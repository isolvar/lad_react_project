import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";
import SvgIconHome from "./SvgIconHome";

interface IProps {
    to: string;
}

const ButtonHome = ({ to }: IProps) => {
    return (
        <Link to={to}>
            <div className={style.btn_block}>
                <div className={style.btn_icon}>
                    <SvgIconHome />
                </div>
                <p className={style.btn_text}>Home</p>
            </div>
        </Link>
    );
};

export default ButtonHome;
