import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDetail } from "../../Redux/actions/detailActions"
import { removeWishList } from "../../Redux/actions/wishActions";


export default function WishCard ({name}) {

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(removeWishList(name))
        
    }


    return (
        <div>
            <h2> {name} </h2>
            <button onClick={handleClick}> x </button>
        </div>
    )
}