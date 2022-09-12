import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Pagination from "../../entities/Pagination";
import { fetchSearchMovie } from "../../server_services/server_api";
import { clearState, setMovies } from "../../store/moviesSlice";
import { RootState } from "../../store/store";
import style from "./SearchPage.module.scss";

const SearchPage = () => {
    const { searchValue } = useParams();
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const movies = useSelector((state: RootState) => state.movies.movies);

    if (!searchValue) {
        return <div></div>;
    }

    useEffect(() => {
        setIsLoading(true);
        fetchSearchMovie(searchValue).then((response) => {
            if (response === "error") {
                setIsError(true);
                setIsLoading(false);
            } else {
                dispatch(setMovies(response));
                setIsLoading(false);
            }

            return () => {
                dispatch(clearState());
            };
        });
    }, []);

    return (
        <>
            <div className={style.search_block}>
                Search resulrts for {"<<"}
                {searchValue}
                {">> "}:
            </div>
            {isLoading && <Loader />}
            {movies && <Pagination rowsAmount={2} movies={movies} />}
            {isError && (
                <div className={style.error}> Something went wrong :{"("}</div>
            )}
        </>
    );
};

export default SearchPage;
