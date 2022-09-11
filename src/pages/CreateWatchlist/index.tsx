import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonRed from "../../components/ButtonRed";
import { addList } from "../../store/listsSlice";
import style from "./CreateWatchList.module.scss";

const CreateWatchlist = () => {
    const [watchlistName, setWatchlistName] = useState("");
    const [watchlistDesc, setWatchlistDesc] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWatchlistName(event.target.value);
    };
    const handleChangeDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWatchlistDesc(event.target.value);
    };

    const handlerCreateListBtn = () => {
        dispatch(addList({ listName: watchlistName, listDesc: watchlistDesc }));
        navigate(-1);
    };

    return (
        <div className={style.create_block}>
            <p className={style.create_block_text}>Create a new Watchlist</p>
            <label className={style.create_block_label}>Name</label>
            <input
                type="text"
                className={style.create_block_input}
                value={watchlistName}
                onChange={handleChangeName}
            ></input>
            <label className={style.create_block_label}>Description</label>
            <input
                type="text"
                className={style.create_block_input}
                value={watchlistDesc}
                onChange={handleChangeDesc}
            ></input>
            <ButtonRed text="Create watchlist" func={handlerCreateListBtn} />
        </div>
    );
};

export default CreateWatchlist;
