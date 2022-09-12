import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import SearchBarWithButton from "../../entities/SearchBarWithButton";
import WelcomeBlock from "../../components/WelcomeBlock";
import Pagination from "../../entities/Pagination";
import { fetchPopularMovies } from "../../server_services/server_api";
import { clearState, setMovies } from "../../store/moviesSlice";
import { RootState } from "../../store/store";
import style from "./HomePage.module.scss";

const HomePage = () => {
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const data = useSelector((state: RootState) => state.movies.movies);

    useEffect(() => {
        setIsLoading(true);
        fetchPopularMovies().then((response) => {
            if (response === "error") {
                setIsError(true);
                setIsLoading(false);
            } else {
                dispatch(setMovies(response));
                setIsLoading(false);
            }
        });
        return () => {
            dispatch(clearState());
        };
    }, []);

    return (
        <>
            <WelcomeBlock />
            <SearchBarWithButton />
            <p className={style.text_popular_movie}>Popular movies right now</p>
            {isLoading && <Loader />}
            {data && <Pagination rowsAmount={1} movies={data} />}
            {isError && (
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
