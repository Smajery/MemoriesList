import React, {useCallback, useEffect, useState} from 'react';
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY} from "../../utils/consts";
import star from '../../img/starsvg.svg'

const MemoryItem = (props) => {
    const navigate = useNavigate()

    const {removeItemInCategory} = useActions()

    function handleRemoveItem(e) {
        e.stopPropagation()
        removeItemInCategory(props.id)
    }

    const [ratingArray, setRatingArray] = useState([])

    const amountStars = useCallback(() => {
        const newArray = []
        for (let i = 1; i <= props.rate; i++) {
            newArray.push(i)
        }
        return setRatingArray(newArray)
    }, [props.rate])

    useEffect(() => {
        amountStars()
    }, [props.rate, amountStars])


    return (
        <div
            className='item'
            onClick={() => navigate(ROUTE_MEMORY + '/' + props.selectedCategoryName + '/' + props.name)}
        >
            <div className='item__img-box'>
                <img src={props.img} alt={props.name}/>
            </div>
            <div className='item__content-box'>
                <div className='text-box'>
                    <p>{props.name}</p>
                </div>
                <div className='rating-box'>
                    {ratingArray.map(rate =>
                        <img
                            key={rate}
                            src={star}
                            alt={rate}
                        />
                    )}
                </div>
            </div>
            <button
                className='btn-remove'
                onClick={handleRemoveItem}
            >
                x
            </button>
        </div>
    );
};

export default MemoryItem;