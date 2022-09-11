import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";
import SvgIconHistory from "./SvgIconHistory";

interface IProps {
    to: string;
}

const ButtonHistoty = ({ to }: IProps) => {
    return (
        <Link to={to}>
            <div className={style.btn_block}>
                <div className={style.btn_icon}>
                    <SvgIconHistory />
                </div>
                <p className={style.btn_text}>History</p>
            </div>
        </Link>
    );
};

export default ButtonHistoty;
