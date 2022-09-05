import React from "react";
import { useNavigate } from "react-router-dom";
import WatchListItem from "../../components/WatchListItem";
import style from "./WatchListBlock.module.scss";

interface IProps {
    listID: number;
    listName: string;
}

const WatchListBlock = (movieListArr: IProps[]) => {
    const navigate = useNavigate();

    return (
        <div className={style.watchlist_block}>
            <p className={style.watchlist_block_text}>My Lists</p>
            {movieListArr.map((movieList) => {
                return (
                    <WatchListItem
                        key={`l${movieList.listID}`}
                        listID={movieList.listID}
                        watchlistName="Movies movies"
                        onClick={() =>
                            navigate(`/watchlist/${movieList.listID}`)
                        }
                    />
                );
            })}
        </div>
    );
};

export default WatchListBlock;
