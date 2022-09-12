import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { useWindowSize } from "../../shared/useWindowSize";
import { IMovie } from "../../store/moviesSlice";
import ModalWindowAddMovie from "../ModalWindowAddMovie";
import style from "./Pagination.module.scss";
import { useGetCards } from "./useGetCards";

interface IProps {
    rowsAmount: number;
    movies: IMovie[];
}

const Pagination: FC<IProps> = ({ rowsAmount, movies }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const location = useLocation();
    const params = useParams();

    const [windowWidth] = useWindowSize();
    const availableWidth = windowWidth - (320 + 70 + 60);

    const elementsInRow = Math.floor((availableWidth + 60) / (150 + 60));
    const elementsAmount = movies.length;
    const maxPage = Math.ceil(elementsAmount / (rowsAmount * elementsInRow));
    const elementsToShow = Math.min(
        rowsAmount * elementsInRow,
        elementsAmount - (pageNumber - 1) * elementsInRow * rowsAmount
    );

    if (pageNumber > maxPage) setPageNumber(maxPage);

    const handlerHideModal = useCallback(() => setIsShowModal(false), []);

    const isInWatchlistPage = location.pathname.startsWith("/watchlist/");

    const rowsDiv = useGetCards(
        elementsToShow,
        movies,
        pageNumber,
        MovieCard,
        dispatch,
        setIsShowModal,
        elementsInRow,
        isInWatchlistPage,
        params
    );

    const handlerDecreasePage = () => {
        if (pageNumber === 1) return;
        setPageNumber((prev) => prev - 1);
    };

    const handlerIncreasePage = () => {
        if (pageNumber === maxPage) return;
        setPageNumber((prev) => prev + 1);
    };

    const modalWindow = isShowModal ? (
        <ModalWindowAddMovie
            isActive={isShowModal}
            onClose={handlerHideModal}
        />
    ) : null;

    return (
        <div className={style.pagination_block}>
            {rowsDiv}
            <div className={style.pagination_buttons_block}>
                <button
                    type="button"
                    onClick={handlerDecreasePage}
                    className={style.page_button}
                >
                    {"<"}
                </button>
                <div className={style.pagination_page_number}>{pageNumber}</div>
                <button
                    type="button"
                    onClick={handlerIncreasePage}
                    className={style.page_button}
                >
                    {">"}
                </button>
            </div>
            {modalWindow}
        </div>
    );
};

export default Pagination;
