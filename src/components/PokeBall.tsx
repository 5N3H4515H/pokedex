import React from "react";

interface props {
    color?: string;
    className?: string;
}

const PokeBall: React.FC<React.SVGProps<SVGSVGElement> & props> = ({
    color,
    ...rest
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150.16 151.05"
            {...rest}
        >
            <path
                className={color}
                d="M95.23,75.53a19.71,19.71,0,1,1-19.7-19.71A19.7,19.7,0,0,1,95.23,75.53Z"
            />
            <path
                className={color}
                d="M111.79,87.1a38.06,38.06,0,1,1,0-23.15h38.36a75.49,75.49,0,1,0,0,23.15Z"
            />
        </svg>
    );
};

export default PokeBall;
