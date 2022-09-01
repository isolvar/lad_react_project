import React from "react";
import ButtonCreateList from "../../components/ButtonCreateList";
import ButtonHistoty from "../../components/ButtonHistory";
import ButtonHome from "../../components/ButtonHome";
import SearchBar from "../../components/SearchBar";
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
