import React from "react";
import style from "./SearchInput.module.scss";
import SvgSearchIcon from "./SvgSearchIcon";

const SearchInput = () => {
    return (
        <div className={style.input_block}>
            <input
                placeholder="Search"
                type="search"
                className={style.input}
            ></input>
            <div className={style.search_icon}>
                <SvgSearchIcon />
            </div>
        </div>
    );
};

export default SearchInput;
