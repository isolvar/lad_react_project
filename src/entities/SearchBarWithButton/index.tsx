import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonRed from "../../components/ButtonRed";
import SvgSearchIcon from "../../components/SvgSearchIcon";
import style from "./SearchBarWithButton.module.scss";

const SearchBarWithButton = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handlerOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate(`/search/${inputValue}`);
    };

    const handlerOnClick = () => {
        navigate(`/search/${inputValue}`);
    };

    return (
        <form onSubmit={handlerOnSubmit}>
            <div className={style.search_block}>
                <div className={style.svg_block}>
                    <SvgSearchIcon />
                </div>
                <input
                    type="search"
                    className={style.input_block}
                    placeholder="Search for movies by title"
                    value={inputValue}
                    onChange={handlerOnChange}
                />
                <ButtonRed
                    text="search"
                    width="90px"
                    height="100%"
                    onClick={handlerOnClick}
                />
            </div>
        </form>
    );
};

export default SearchBarWithButton;
