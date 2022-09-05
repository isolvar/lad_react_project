import React from "react";
import ButtonRed from "../ButtonRed";
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
            <ButtonRed text="search" width="90px" height="100%" />
        </div>
    );
};

export default SearchBarWithButton;
