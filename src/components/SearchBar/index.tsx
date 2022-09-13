import React from "react";
import SvgIcon from "../SvgSearchIcon";
import style from "./SearchBar.module.scss";

interface IProps {
    inputValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
}

const SearchBar = ({ inputValue, onChange, onKeyDown }: IProps) => {
    return (
        <div className={style.searchbar_block}>
            <div className={style.svg_block}>
                <SvgIcon />
            </div>
            <input
                type="search"
                placeholder="Search"
                className={style.input}
                value={inputValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export default SearchBar;
