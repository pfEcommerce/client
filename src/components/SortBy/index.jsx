import React from 'react';
import { useDispatch } from "react-redux";
import StyledButton from "../styles/styled_button/styledButton";
import { filteByDesAsc } from "../../Redux/actions/sortByAbcActions";
import {sortByPrice } from "../../Redux/actions/sortByPriceActions";

const options = ['Alphabetical order: A-Z', 'Alphabetical order: Z-A', 'Price: Max to Min', 'Price: Min to Max'];

export default function SortBy() {
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        if (event.target.innerText === 'Alphabetical order: A-Z') {
            dispatch(filteByDesAsc("az"))
        } else if (event.target.innerText === 'Alphabetical order: Z-A') {
            dispatch(filteByDesAsc("za"))
        } else if (event.target.innerText === 'Price: Max to Min') {
            dispatch(sortByPrice("max"))
        } else if (event.target.innerText === 'Price: Min to Max') {
            dispatch(sortByPrice("min"))
        }
    };

    return (
        <div>
            <StyledButton>
                <div>
                    {options.map((option, index) => (
                        <div
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </StyledButton>
        </div>


    )
}

