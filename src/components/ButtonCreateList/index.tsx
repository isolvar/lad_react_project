import React from "react";
import style from "./Button.module.scss";

const ButtonCreateList = () => {
    return (
        <button type="button" className={style.btn_create_list}>
            + Create watchlist
        </button>
    );
};

export default ButtonCreateList;
