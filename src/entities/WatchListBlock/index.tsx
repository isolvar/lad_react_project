import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import WatchListItem from "../../components/WatchListItem";
import { RootState } from "../../store/store";
import style from "./WatchListBlock.module.scss";

const WatchListBlock = () => {
    const [activeListNum, setActiveListNum] = useState(-1);
    const navigate = useNavigate();
    const params = useParams();
    const movieLists = useSelector(
        (state: RootState) => state.watchlists.lists
    );

    if (
        !!params &&
        !!params.listId &&
        activeListNum.toString() !== params.listId
    ) {
        setActiveListNum(+params.listId);
    }

    if (!!params && !params.listId && activeListNum !== -1) {
        setActiveListNum(-1);
    }

    return (
        <div className={style.watchlist_block}>
            <p className={style.watchlist_block_text}>My Lists</p>
            {movieLists &&
                movieLists.map((movieList, index) => {
                    return (
                        <WatchListItem
                            key={`l${movieList.listID}`}
                            isActive={index === activeListNum}
                            watchlistName={movieList.listName}
                            onClick={() => {
                                navigate(`/watchlist/${movieList.listID}`);
                            }}
                        />
                    );
                })}
        </div>
    );
};

export default WatchListBlock;
