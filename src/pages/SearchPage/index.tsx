import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Pagination from "../../entities/Pagination";
import { clearState, fetchMovie } from "../../store/moviesSlice";
import { RootState, useAppDispatch } from "../../store/store";
import style from "./SearchPage.module.scss";

const SearchPage = () => {
    const { searchValue } = useParams();
    const dispatch = useAppDispatch();

    const data = useSelector((state: RootState) => state.movies);

    if (!searchValue) {
        return <div></div>;
    }

    useEffect(() => {
        dispatch(fetchMovie({ type: "search", search: `${searchValue}` }));

        return () => {
            dispatch(clearState());
        };
    }, []);

    const showLoader = data.status === "Loading";
    const showPagination = data.status === "Fulfilled";
    const showError = data.status === "Error";

    return (
        <>
            <div className={style.search_block}>
                Search resulrts for {"<<"}
                {searchValue}
                {">> "}:
            </div>
            {showLoader && <Loader />}
            {showPagination && data.movies && (
                <Pagination rowsAmount={2} movies={data.movies} />
            )}
            {showError && (
                <div className={style.error}> Something went wrong :{"("}</div>
            )}
        </>
    );
};

export default SearchPage;
