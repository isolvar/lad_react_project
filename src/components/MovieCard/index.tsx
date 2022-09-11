import React, { FC } from "react";
import SvgCheckmark from "../SvgCheckmark";
import SvgRibbonMark from "../SvgRibbonMark";
import SvgSmileSelector from "../SvgSmileSelector";
import style from "./MovieCard.module.scss";

export interface IPropsMovieCard {
    rating?: number;
    imageSrc?: string;
    movieName?: string;
    year?: string | number;
    isRibbonActive?: boolean;
    isShowCheckMark?: boolean;
    isCheckMarkActive?: boolean;
    onClick?: () => void;
    onClickRibbonMark?: () => void;
    onClickChechMark?: () => void;
}

const MovieCard: FC<IPropsMovieCard> = (props) => {
    const { rating, imageSrc, movieName, year } = props;
    const {
        isRibbonActive = false,
        isShowCheckMark = false,
        isCheckMarkActive = false,
    } = props;

    return (
        <div className={style.movie_block} onClick={props.onClick}>
            <div
                className={style.movie_svg_ribbon}
                onClick={props.onClickRibbonMark}
            >
                <SvgRibbonMark isActive={isRibbonActive} />
            </div>
            {isShowCheckMark && (
                <div
                    className={style.movie_svg_check}
                    onClick={props.onClickChechMark}
                >
                    <SvgCheckmark isActive={isCheckMarkActive} />
                </div>
            )}
            <img src={imageSrc} className={style.movie_img} />
            <div className={style.movie_desc_rating}>
                <div className={style.movie_rating}>
                    <div className={style.movie_rating_smile}>
                        <SvgSmileSelector rating={rating || 10} />
                    </div>
                    <p className={style.movie_rating_score}>
                        {rating}
                        <span className={style.movie_rating_score_span}>
                            /100
                        </span>
                    </p>
                </div>
                <p className={style.movie_name_year}>{movieName}</p>
                <p className={style.movie_name_year}>{year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
