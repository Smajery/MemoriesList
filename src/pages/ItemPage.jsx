import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import star from "../img/starsvg.svg";
import {useActions} from "../hooks/useActions";


const ItemPage = () => {
    const {selectedCategoryItem} = useSelector(state => state.memoryReducer)

    const {setSelectedCategoryItemName} = useActions()

    const [ratingArray, setRatingArray] = useState([])

    const amountStars = useCallback(() => {
        const newArray = []
        for (let i = 1; i <= selectedCategoryItem.rating; i++) {
            newArray.push(i)
        }
        return setRatingArray(newArray)
    }, [selectedCategoryItem.rating])

    // const uploadFile = (file) => {
    //
    //     // файла <5 Мб
    //     if (file.size > 5 * 1024 * 1024) {
    //         alert("Файл должен быть не более 5 МБ.");
    //         return;
    //     }
    //
    // }

    useEffect(() => {
        amountStars()
    }, [selectedCategoryItem.rating, amountStars])

    return (
        <div className='item-page'>
            <div className='content'>
                <div className='item-card'>
                    <div className='content-left'>
                        <img
                            src={selectedCategoryItem.img}
                            alt={selectedCategoryItem.name}
                        />
                        <input
                            type='file'
                            accept=".jpg, .jpeg, .png, .gif"
                        />
                    </div>
                    <div className='content-right'>
                        <div className='item-name'>
                            <textarea
                                value={selectedCategoryItem.name}
                                onChange={e => setSelectedCategoryItemName(e.target.value)}
                            />
                        </div>
                        <div className='item-rating'>
                            {ratingArray.map(rate =>
                                <img
                                    key={rate}
                                    src={star}
                                    alt={rate}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;