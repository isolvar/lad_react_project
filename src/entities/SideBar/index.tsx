import React from "react";
import ButtonRed from "../../components/ButtonRed";
import ButtonHistoty from "../../components/ButtonHistory";
import ButtonHome from "../../components/ButtonHome";
import SearchBar from "../../components/SearchBar";
import style from "./SideBar.module.scss";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();

    const hadlerCreateWatchlistBtn = () => {
        navigate("/create");
    };

    return (
        <div className={style.sidebar_block}>
            <p className={style.sidebar_top_text}>Watchlist</p>
            <SearchBar />
            <ButtonHome />
            <ButtonHistoty />
            <ButtonRed
                text="+ Create watchlist"
                func={hadlerCreateWatchlistBtn}
            />
            <div className={style.line}></div>
        </div>
    );
};

export default SideBar;
