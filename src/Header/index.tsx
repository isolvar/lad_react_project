import React from "react";
import SearchInput from "../common/SearchInputonTop";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <header className={style.header}>
            <SearchInput />
        </header>
    );
};

export default Header;
