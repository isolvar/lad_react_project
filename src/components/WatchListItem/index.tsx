import React from "react";
import { useParams } from "react-router-dom";
import style from "./WatchListItem.module.scss";

interface IProps {
    watchlistName: string;
    onClick?: () => void;
    listID: number;
}

const WatchListItem = ({ watchlistName, onClick, listID }: IProps) => {
    const { pageID } = useParams();

    let isActive: boolean;
    if (listID.toString() === pageID) {
        isActive = true;
    } else {
        isActive = false;
    }

    const bckgroundColor = isActive
        ? style.watchlist_block_active
        : style.watchlist_block_inactive;

    return (
        <div
            className={style.watchlist_block + bckgroundColor}
            onClick={!isActive ? onClick : undefined}
        >
            <div className={style.watch_list_icon}>W</div>
            <p className={style.watchlist_name}>{watchlistName}</p>
        </div>
    );
};

export default WatchListItem;
