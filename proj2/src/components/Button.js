import React from "react";
import PropTypes from "prop-types";
import "./Search.css";
import "./Movie.css";


const Button = ({setVisibleMovie, setSelectedNumber}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];

    const onClickNumber = (number) => {
        setVisibleMovie(true)
        setSelectedNumber(number)
    }

    return(
        <>
            {numbers.map((number) => (<button className="button" key={number} onClick={()=> onClickNumber(number)}>{number}</button>))}
        </>
    )
};

export default Button;
