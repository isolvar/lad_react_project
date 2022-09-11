import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalFrame from "../../components/ModalFrame";
import WatchListItem from "../../components/WatchListItem";
import { addMovieToListByListId } from "../../store/listsSlice";
import { RootState } from "../../store/store";
import style from "./ModalWindowAddMovie.module.scss";

interface IProps {
    isActive: boolean;
    onClose: () => void;
}

const ModalWindowAddMovie = ({ isActive, onClose }: IProps) => {
    const lists = useSelector((state: RootState) => state.watchlists.lists);
    const modal = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    const movieName = !modal.data ? "" : modal.data.nameRU || modal.data.nameEN;

    const listsBlock = lists ? (
        lists.map((list) => {
            const { listID, listName } = list;
            return (
                <WatchListItem
                    key={`wli${listID}`}
                    isActive={false}
                    watchlistName={listName}
                    onClick={() => {
                        dispatch(
                            addMovieToListByListId({
                                listID: listID,
                                movie: modal.data,
                            })
                        );
                    }}
                />
            );
        })
    ) : (
        <div className={style.modal_text}>
            <i>
                No watchlist. Please, before to add movie create the watchlist.
            </i>
        </div>
    );

    return (
        <ModalFrame isActive={isActive} onClose={onClose}>
            <div className={style.modal_block}>
                <div className={style.modal_movie_name_block}>
                    <p className={style.modal_text}>Add movie</p>
                    <p className={style.modal_movie_name}>{movieName}</p>
                </div>
                <p className={style.modal_text}>To watchlist:</p>
                {listsBlock}
            </div>
        </ModalFrame>
    );
};

export default ModalWindowAddMovie;
