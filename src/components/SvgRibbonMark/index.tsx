import React from "react";

const SvgRibbonMark = () => {
    return (
        <svg
            width="26"
            height="38"
            viewBox="0 0 26 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_92_814)">
                <path
                    d="M25 1H1V36L13 30L25 36V1Z"
                    fill="black"
                    fillOpacity="0.6"
                    shapeRendering="crispEdges"
                />
                <path
                    d="M25 1H1V36L13 30L25 36V1Z"
                    stroke="#D9D9D9"
                    strokeOpacity="0.6"
                    shapeRendering="crispEdges"
                />
            </g>
            <line
                x1="13"
                y1="24"
                x2="13"
                y2="12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="7"
                y1="18"
                x2="19"
                y2="18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <defs>
                <filter
                    id="filter0_d_92_814"
                    x="0.5"
                    y="0.5"
                    width="25"
                    height="37.309"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_92_814"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_92_814"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default SvgRibbonMark;
