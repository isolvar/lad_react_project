import React from "react";
import MovieCard from "../../components/MovieCard";
import SearchBarWithButton from "../../components/SearchBarWithButton";
import WelcomeBlock from "../../components/WelcomeBlock";
import style from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <>
            <WelcomeBlock />
            <SearchBarWithButton />
            <p className={style.text_popular_movie}>Popular movies right now</p>
            <MovieCard
                rating={60}
                movieName="Afynfcnbxnbxtcrbt ndfhb b vtcnf b["
                year="(2022)"
            />
        </>
    );
};

export default HomePage;
