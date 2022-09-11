import { Dispatch } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { Params } from "react-router-dom";
import { IPropsMovieCard } from "../../components/MovieCard";
import {
    changeWatchedStatusByListIdAndMovieId,
    removeMovieByListIdAndMovieId,
} from "../../store/listsSlice";
import { setModalData } from "../../store/modalSlice";
import { IMovie } from "../../store/moviesSlice";
import style from "./Pagination.module.scss";

export function useGetCards(
    elementsToShow: number,
    movies: IMovie[],
    pageNumber: number,
    MovieCard: FC<IPropsMovieCard>,
    dispatch: Dispatch,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    elementsInRow: number,
    isInWatchlistPage: boolean,
    params: Readonly<Params<string>>
): JSX.Element[] {
    const rowsDiv = [];
    let rowDiv = [];

    for (let i = 0; i < elementsToShow; i++) {
        const movie = movies[i + (pageNumber - 1) * elementsToShow];
        const { id, posterUrl, nameRU, nameEN, rating, year, watched } = movie;

        const onClickRibbon = isInWatchlistPage
            ? () => {
                  dispatch(
                      removeMovieByListIdAndMovieId({
                          listID: params.listId,
                          movieId: id,
                      })
                  );
              }
            : () => {
                  dispatch(setModalData(movie));
                  setIsShowModal(true);
              };

        const onClickCheck = () => {
            dispatch(
                changeWatchedStatusByListIdAndMovieId({
                    listID: params.listId,
                    movieId: id,
                })
            );
        };
        // алерт на удаление
        // удаление полностью списка
        // редактирование списка
        // два поиска
        rowDiv.push(
            <MovieCard
                key={`mc${id}`}
                imageSrc={posterUrl}
                movieName={nameRU || nameEN}
                rating={rating}
                year={year}
                isRibbonActive={isInWatchlistPage}
                isShowCheckMark={isInWatchlistPage}
                isCheckMarkActive={watched}
                onClickRibbonMark={onClickRibbon}
                onClickChechMark={isInWatchlistPage ? onClickCheck : undefined}
            />
        );

        if (i + 1 === elementsInRow || i + 1 === elementsToShow) {
            rowsDiv.push(
                <div key={`rmc${id}`} className={style.pagination_row}>
                    {rowDiv}
                </div>
            );
            rowDiv = [];
        }
    }

    return rowsDiv;
}
