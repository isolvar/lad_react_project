import React, { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import style from "./ModalFrame.module.scss";

interface IProps {
    isActive: boolean;
    children: React.ReactNode;
    onClose?: () => void;
}

const modalRootEl = document.getElementById("modal");

const ModalFrame: FC<IProps> = ({ children, isActive, onClose }) => {
    const element = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
        if (isActive) {
            modalRootEl?.appendChild(element);

            return () => {
                modalRootEl?.removeChild(element);
            };
        }
    });

    return createPortal(
        <div className={style.modal_active} onClick={onClose}>
            {children}
        </div>,
        element
    );
};

export default ModalFrame;
