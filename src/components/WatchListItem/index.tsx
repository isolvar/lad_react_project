import React from "react";
import style from "./WatchListItem.module.scss";

interface IProps {
    isActive: boolean;
    watchlistName: string;
    onClick?: () => void;
}

const WatchListItem = ({ isActive, watchlistName, onClick }: IProps) => {
    const bckgroundColor = isActive
        ? style.watchlist_block_active
        : style.watchlist_block_inactive;

    return (
        <div
            className={`${style.watchlist_block} ${bckgroundColor}`}
            onClick={!isActive ? onClick : undefined}
        >
            <div className={style.watch_list_icon}>W</div>
            <p className={style.watchlist_name}>{watchlistName}</p>
        </div>
    );
};

export default WatchListItem;
