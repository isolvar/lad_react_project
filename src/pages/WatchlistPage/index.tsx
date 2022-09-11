import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SvgEditIcon from "../../components/SvgEditIcon";
import Pagination from "../../entities/Pagination";
import { getWatchlistByIdSelector } from "../../store/listsSlice";
import style from "./WatchlistPage.module.scss";

const WatchlistPage = () => {
    const navigate = useNavigate();
    const { listId } = useParams();

    if (!listId)
        return (
            <div className={style.error}>
                Error in url. Start from home page.
            </div>
        );

    const watchlist = useSelector(getWatchlistByIdSelector(+listId));
    if (!watchlist)
        return (
            <div className={style.error}>
                Watchlist does not exist. Start from home page.
            </div>
        );
    const { listName, listDesc, movies } = watchlist;

    const handlerOnEdit = () => {
        navigate(`/watchlist/edit/${listId}`);
    };

    const unwatchedTime = movies
        ? movies
              .filter((movie) => !movie.watched)
              .reduce((acc, movie) => {
                  if (!movie.duration) return acc;
                  return acc + movie.duration;
              }, 0)
        : 0;
    const hours = Math.floor(unwatchedTime / 60);
    const minutes = unwatchedTime % 60;
    const unwatchedTImeFormatted = `${hours}h ${minutes}m`;

    const averageScore = Math.round(
        movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length
    );

    return (
        <div className={style.watchlistpage_block}>
            <div className={style.watchlist_name_block}>
                <p className={style.watchlist_name}>{listName}</p>
                <div className={style.watchlist_edit} onClick={handlerOnEdit}>
                    <SvgEditIcon />
                </div>
            </div>
            <div className={style.watchlist_about_header}>
                About this watchlist
            </div>
            <div className={style.watchlist_about_desc}>{listDesc}</div>
            <div className={style.watchlist_infoblocks}>
                <div className={`${style.watchlist_infoblock} ${style.block1}`}>
                    <p className={style.watchlist_infoblock_names}>
                        ITEMS ON LIST
                    </p>
                    <p className={style.watchlist_infoblock_data}>
                        {movies.length}
                    </p>
                </div>
                <div className={`${style.watchlist_infoblock} ${style.block2}`}>
                    <p className={style.watchlist_infoblock_names}>
                        UNWATCHED RUNTIME
                    </p>
                    <p className={style.watchlist_infoblock_data}>
                        {unwatchedTImeFormatted}
                    </p>
                </div>
                <div className={`${style.watchlist_infoblock} ${style.block3}`}>
                    <p className={style.watchlist_infoblock_names}>
                        AVERAGE SCORE
                    </p>
                    <p className={style.watchlist_infoblock_data}>
                        {averageScore}
                    </p>
                </div>
            </div>
            {movies.length && <Pagination rowsAmount={1} movies={movies} />}
        </div>
    );
};

export default WatchlistPage;
