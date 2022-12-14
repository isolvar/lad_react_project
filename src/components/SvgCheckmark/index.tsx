import React from "react";

interface IProps {
    isActive: boolean;
}

const SvgCheckmark = ({ isActive }: IProps) => {
    return (
        <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.081 25L0 14.4908L3.85613 10.1803L10.4983 16.4781L23.5944 0L28 3.71144L11.081 25Z"
                fill={isActive ? "green" : "white"}
            />
        </svg>
    );
};
export default SvgCheckmark;
