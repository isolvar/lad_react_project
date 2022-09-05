import React, { FC, useState } from "react";
import style from "./ModalWindow.module.scss";

interface IProps {
    active: boolean;
    children: React.ReactNode;
}

const ModalWindow: FC<IProps> = ({ children, active }) => {
    const [isActive, setIsActive] = useState(active);

    const styling = isActive ? style.modal_active : style.modal_inactive;

    const handleModalWindow = () => {
        setIsActive(false);
    };

    return (
        <div className={styling} onClick={handleModalWindow}>
            {children}
        </div>
    );
};

export default ModalWindow;
