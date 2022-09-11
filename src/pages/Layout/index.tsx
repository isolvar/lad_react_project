import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../entities/Header";
import SideBar from "../../entities/SideBar";
import WatchListBlock from "../../entities/WatchListBlock";
import style from "./Layout.module.scss";

const Layout = () => {
    return (
        <>
            <Header />
            <div className={style.aside_content_block}>
                <div className={style.aside_block}>
                    <SideBar />
                    <WatchListBlock />
                </div>

                <div className={style.content_block}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
