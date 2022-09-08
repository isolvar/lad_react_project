import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import WatchListItem from "../../components/WatchListItem";
import style from "./WatchListBlock.module.scss";

interface IProps {
    movieLists: {
        listID: number;
        listName: string;
    }[];
}

const WatchListBlock: FC<IProps> = ({ movieLists }) => {
    const navigate = useNavigate();

    return (
        <div className={style.watchlist_block}>
            <p className={style.watchlist_block_text}>My Lists</p>
            {movieLists.map((movieList) => {
                return (
                    <WatchListItem
                        key={`l${movieList.listID}`}
                        listID={movieList.listID}
                        watchlistName={movieList.listName}
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
