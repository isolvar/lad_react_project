import React, { useState } from "react";
import ButtonRed from "../../components/ButtonRed";
import ButtonHome from "../../components/ButtonHome";
import SearchBar from "../../components/SearchBar";
import style from "./SideBar.module.scss";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const hadlerCreateWatchlistBtn = () => {
        navigate("/create");
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") navigate(`/search/${inputValue}`);
    };

    return (
        <div className={style.sidebar_block}>
            <p className={style.sidebar_top_text}>Watchlist</p>
            <SearchBar
                inputValue={inputValue}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
            />
            <ButtonHome to="/" />
            <ButtonRed
                text="+ Create watchlist"
                onClick={hadlerCreateWatchlistBtn}
            />
            <div className={style.line}></div>
        </div>
    );
};

export default SideBar;
