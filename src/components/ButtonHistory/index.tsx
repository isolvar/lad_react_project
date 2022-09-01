import React from "react";
import style from "./Button.module.scss";
import SvgIconHistory from "./SvgIconHistory";

const ButtonHistoty = () => {
    return (
        <div className={style.btn_block}>
            <div className={style.btn_icon}>
                <SvgIconHistory />
            </div>
            <p className={style.btn_text}>History</p>
        </div>
    );
};

export default ButtonHistoty;
