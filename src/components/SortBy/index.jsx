import React from 'react';
import { useDispatch } from "react-redux";
import StyledButton from "../styles/styled_button/styledButton";
import { filteByDesAsc } from "../../Redux/actions/sortByAbcActions"

const options = ['Alphabetical order: A-Z', 'Alphabetical order: Z-A'];

export default function SortBy() {
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        if (event.target.innerText === 'Alphabetical order: A-Z') {
            dispatch(filteByDesAsc("az"))
        } else if (event.target.innerText === 'Alphabetical order: Z-A') {
            dispatch(filteByDesAsc("za"))
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

