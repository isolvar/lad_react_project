import React, { FC, useState } from "react";
import MovieCard from "../../components/MovieCard";
import { IMovie } from "../../store/moviesSlice";
import style from "./Pagination.module.scss";

interface IProps {
    rowsAmount: number;
    elementsInRow: number;
    data: IMovie[];
}

const Pagination: FC<IProps> = ({ rowsAmount, elementsInRow, data }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const elementsAmount = data.length;
    const maxPage = Math.floor(elementsAmount / (rowsAmount * elementsInRow));
    const elementsToShow = rowsAmount * elementsInRow;

    const rowsDiv = [];
    let rowDiv = [];
    for (let i = 0; i < elementsToShow; i++) {
        const { id, posterUrl, nameRU, nameEN, rating, year } =
            data[i + (pageNumber - 1) * elementsToShow];

        rowDiv.push(
            <MovieCard
                key={`mc${id}`}
                imageSrc={posterUrl}
                movieName={nameRU || nameEN}
                rating={rating}
                year={year}
            />
        );

        if (i > 0 && elementsInRow % (i + 1) === 0) {
            rowsDiv.push(
                <div key={`rmc${id}`} className={style.pagination_row}>
                    {rowDiv}
                </div>
            );
            rowDiv = [];
        }
    }

    const handlerDecreasePage = () => {
        if (pageNumber === 1) return;
        setPageNumber((prev) => prev - 1);
    };

    const handlerIncreasePage = () => {
        if (pageNumber === maxPage) return;
        setPageNumber((prev) => prev + 1);
    };

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
        </div>
    );
};

export default Pagination;
