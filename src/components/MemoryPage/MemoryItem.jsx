import React, {useCallback, useEffect, useState} from 'react';
// import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY} from "../../utils/consts";
import star from '../../img/starsvg.svg'
import {useActions} from "../../hooks/useActions";

const MemoryItem = ({selectedCategoryName, item}) => {
    const navigate = useNavigate()

    const {setSelectedCategoryItem} = useActions()
    // const {removeItemInCategory} = useActions()

    // function handleRemoveItem(e) {
    //     e.stopPropagation()
    //     removeItemInCategory(props.id)
    // }

    const [ratingArray, setRatingArray] = useState([])

    const amountStars = useCallback(() => {
        const newArray = []
        for (let i = 1; i <= item.rating; i++) {
            newArray.push(i)
        }
        return setRatingArray(newArray)
    }, [item.rating])

    function openItemPage() {
        setSelectedCategoryItem(item)
        navigate(ROUTE_MEMORY + '/' + selectedCategoryName + '/' + item.name)
    }

    useEffect(() => {
        amountStars()
    }, [item.rating, amountStars])


    return (
        <div
            className='item'
            onClick={openItemPage}
        >
            <div className='item__img-box'>
                <img src={item.img} alt={item.name}/>
            </div>
            <div className='item__content-box'>
                <div className='text-box'>
                    <textarea
                        value={item.name}
                    />
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
            {/*<button*/}
            {/*    className='btn-remove'*/}
            {/*    onClick={handleRemoveItem}*/}
            {/*>*/}
            {/*    x*/}
            {/*</button>*/}
        </div>
    );
};

export default MemoryItem;