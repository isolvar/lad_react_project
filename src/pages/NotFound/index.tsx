import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <p className={style.page_notfound}>
            Page not found! Let{"'"}s go <Link to="/">home</Link>.
        </p>
    );
};

export default NotFound;
