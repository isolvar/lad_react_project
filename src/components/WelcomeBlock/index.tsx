import React from "react";
import SvgCheckmark from "../SvgCheckmark";
import SvgRibbonMark from "../SvgRibbonMark";
import style from "./WelcomeBlock.module.scss";

const WelcomeBlock = () => {
    return (
        <div className={style.welcome_block}>
            <p className={style.text_first_p}>
                Welcome to{" "}
                <span className={style.text_first_p_span}>Watchlists</span>
            </p>
            <p className={style.text_second_p}>
                Browse movies, add them to watchlists and share them with
                friends.
            </p>
            <p className={style.text_second_p}>
                Just click the{" "}
                <span className={style.span_ribbon}>
                    <SvgRibbonMark isActive={false} />
                </span>{" "}
                to add a movie, the poster to see more details or{" "}
                <span>
                    <SvgCheckmark isActive={false} />
                </span>{" "}
                to mark the movie as watched.
            </p>
        </div>
    );
};

export default WelcomeBlock;
