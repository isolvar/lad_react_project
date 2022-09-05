import React from "react";
import ButtonRed from "../../components/ButtonRed";
import style from "./CreateWatchList.module.scss";

const CreateWatchlist = () => {
    return (
        <div className={style.create_block}>
            <p className={style.create_block_text}>Create a new Watchlist</p>
            <label className={style.create_block_label}>Name</label>
            <input type="text" className={style.create_block_input}></input>
            <label className={style.create_block_label}>Description</label>
            <input type="text" className={style.create_block_input}></input>
            <ButtonRed text="Create watchlist" />
        </div>
    );
};

export default CreateWatchlist;
