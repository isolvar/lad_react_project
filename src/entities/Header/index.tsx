import React from "react";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <header className={style.header}>
            <p className={style.header_p}>Your Watchlist space</p>
        </header>
    );
};

export default Header;
