import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import SearchBarWithButton from "../../components/SearchBarWithButton";
import WelcomeBlock from "../../components/WelcomeBlock";
import Pagination from "../../entities/Pagination";
import { fetchPopularMovies } from "../../server_services/server_api";
import { IMoviesState, setMovies } from "../../store/moviesSlice";
import style from "./HomePage.module.scss";

const HomePage = () => {
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const data = useSelector(
        (state: { movies: IMoviesState }) => state.movies.movies
    );

    useEffect(() => {
        fetchPopularMovies().then((response) => {
            if (response === "error") {
                setIsError(true);
            } else {
                dispatch(setMovies(response));
                setIsLoading(false);
            }
        });
    }, []);

    return (
        <>
            <WelcomeBlock />
            <SearchBarWithButton />
            <p className={style.text_popular_movie}>Popular movies right now</p>
            {isLoading && <Loader />}
            {data && (
                <Pagination rowsAmount={1} elementsInRow={5} data={data} />
            )}
            {isError && (
                <div>
                    {" "}
                    Something went wrong :{"("}. Please, try to update this page
                    a little later.
                </div>
            )}
        </>
    );
};

export default HomePage;
