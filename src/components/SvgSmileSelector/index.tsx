import React from "react";
import SvgSmileBad from "./SvgSmileBad";
import SvgSmileGood from "./SvgSmileGood";
import SvgSmileNormal from "./SvgSmileNormal";

interface IProps {
    rating: number;
}

const SvgSmileSelector = ({ rating }: IProps) => {
    if (rating >= 80) return <SvgSmileGood />;
    if (rating >= 35 && rating < 80) return <SvgSmileNormal />;
    return <SvgSmileBad />;
};

export default SvgSmileSelector;
