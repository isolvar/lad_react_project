import React from "react";
import SvgSearchIcon from "../SvgSearchIcon";
import style from "./SearchBarWithButton.module.scss";

const SearchBarWithButton = () => {
    return (
        <div className={style.search_block}>
            <div className={style.svg_block}>
                <SvgSearchIcon />
            </div>
            <input
                type="search"
                className={style.input_block}
                placeholder="Search for movies by title"
            />
            <button type="button" className={style.button}>
                search
            </button>
        </div>
    );
};

export default SearchBarWithButton;
