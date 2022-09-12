import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonRed from "../../components/ButtonRed";
import { clearEditState } from "../../store/editSlice";
import { addList, editListNameDescByListId } from "../../store/listsSlice";
import { RootState } from "../../store/store";
import style from "./CreateEditWatchList.module.scss";

const CreateEditWatchlist = () => {
    const [watchlistName, setWatchlistName] = useState("");
    const [watchlistDesc, setWatchlistDesc] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const editData = useSelector((state: RootState) => state.edit);

    const isInEditMode = location.pathname.startsWith("/watchlist/edit/");
    if (
        isInEditMode &&
        watchlistName !== editData.watchlistName &&
        watchlistDesc !== editData.watchlistDesc
    ) {
        setWatchlistName(editData.watchlistName);
        setWatchlistDesc(editData.watchlistDesc);
    }

    const listId = params.listId && +params.listId;

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

    const handlerEditListBtn = () => {
        dispatch(
            editListNameDescByListId({
                listId: listId,
                listName: watchlistName,
                listDesc: watchlistDesc,
            })
        );
        dispatch(clearEditState());
        navigate(-1);
    };

    const handlerBtn = isInEditMode ? handlerEditListBtn : handlerCreateListBtn;
    console.log(listId, editData.watchlistId);
    if (isInEditMode && listId !== editData.watchlistId) {
        return (
            <div className={style.create_block_text}>
                Error! Not correct watchlist ID.
            </div>
        );
    }

    const btnText = isInEditMode ? "Save changes" : "Create watchlist";

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
            <ButtonRed text={btnText} onClick={handlerBtn} />
        </div>
    );
};

export default CreateEditWatchlist;
