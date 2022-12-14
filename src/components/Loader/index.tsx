import React from "react";
import style from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={style.loader_block}>
            <div className={style.loader_spinner}></div>
        </div>
    );
};

export default Loader;
