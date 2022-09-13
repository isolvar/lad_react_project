import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import SearchBarWithButton from "../../entities/SearchBarWithButton";
import WelcomeBlock from "../../components/WelcomeBlock";
import Pagination from "../../entities/Pagination";
import { clearState, fetchMovie } from "../../store/moviesSlice";
import { RootState, useAppDispatch } from "../../store/store";
import style from "./HomePage.module.scss";

const HomePage = () => {
    const dispatch = useAppDispatch();

    const data = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        dispatch(fetchMovie({ type: "popular", search: "" }));

        return () => {
            dispatch(clearState());
        };
    }, []);

    const showLoader = data.status === "Loading";
    const showPagination = data.status === "Fulfilled";
    const showError = data.status === "Error";

    return (
        <>
            <WelcomeBlock />
            <SearchBarWithButton />
            <p className={style.text_popular_movie}>Popular movies right now</p>
            {showLoader && <Loader />}
            {showPagination && data.movies && (
                <Pagination rowsAmount={1} movies={data.movies} />
            )}
            {showError && (
                <div className={style.error}>
                    {" "}
                    Something went wrong :{"("} Please, try to update this page
                    a little later.
                </div>
            )}
        </>
    );
};

export default HomePage;
