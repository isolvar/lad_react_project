import React from "react";
import ButtonRed from "../ButtonRed";
import WatchListItem from "../WatchListItem";
import style from "./ModalBlockAddToList.module.scss";

const ModalBlockAddToList = () => {
    return (
        <div className={style.modal_block}>
            <div>
                <p>Add movie</p>
                <p>To watchlist:</p>
            </div>
            <p></p>
            <WatchListItem watchlistName="sdad" listID={2} />
            <ButtonRed text="Create new watchlist" func={undefined} />
        </div>
    );
};

export default ModalBlockAddToList;
