import React from "react";
import SvgIcon from "./SvgIcon";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
    return (
        <div className={style.searchbar_block}>
            <div className={style.svg_block}>
                <SvgIcon />
            </div>
            <input type="search" placeholder="Search" className={style.input} />
        </div>
    );
};

export default SearchBar;
