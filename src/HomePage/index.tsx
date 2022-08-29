import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import style from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={style.content_block}>
                <SideBar />
                <div className={style.temp}></div>
            </div>
        </>
    );
};

export default HomePage;
