import React from "react";
import style from "./Button.module.scss";
import SvgIconHome from "./SvgIconHome";

const ButtonHome = () => {
    return (
        <div className={style.btn_block}>
            <div className={style.btn_icon}>
                <SvgIconHome />
            </div>
            <p className={style.btn_text}>Home</p>
        </div>
    );
};

export default ButtonHome;
