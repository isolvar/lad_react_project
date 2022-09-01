import React, { FC } from "react";
import SvgRibbonMark from "../SvgRibbonMark";
import SvgSmileSelector from "../SvgSmileSelector";
import style from "./MovieCard.module.scss";

interface IProps {
    rating: number;
    imageSrc?: string;
    movieName?: string;
    year?: string;
}

const MovieCard: FC<IProps> = (props) => {
    const { rating, imageSrc, movieName, year } = props;
    return (
        <div className={style.movie_block}>
            <div className={style.movie_svg_ribbon}>
                <SvgRibbonMark />
            </div>
            <img src={imageSrc} className={style.movie_img} />
            <div className={style.movie_desc_rating}>
                <div className={style.movie_rating}>
                    <div className={style.movie_rating_smile}>
                        <SvgSmileSelector rating={rating} />
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
