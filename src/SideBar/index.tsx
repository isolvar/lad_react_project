import React from "react";
import ButtonCreateList from "../common/ButtonCreateList";
import ButtonHistoty from "../common/ButtonHistory";
import ButtonHome from "../common/ButtonHome";
import SearchBar from "../common/SearchBar";
import style from "./SideBar.module.scss";

const SideBar = () => {
    return (
        <div className={style.sidebar_block}>
            <p className={style.sidebar_top_text}>Watchlist</p>
            <SearchBar />
            <ButtonHome />
            <ButtonHistoty />
            <ButtonCreateList />
            <div className={style.line}></div>
        </div>
    );
};

export default SideBar;
