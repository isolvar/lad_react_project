import React from "react";
import style from "./ButtonRed.module.scss";

interface IProps {
    width?: string;
    height?: string;
    text: string;
    onClick?: () => void;
}

const ButtonRed = (props: IProps) => {
    const styling = {
        width: props.width || "247px",
        height: props.height || "40px",
    };

    return (
        <button
            type="button"
            style={styling}
            className={style.btn_create_list}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default ButtonRed;
