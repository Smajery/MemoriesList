import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";

const ItemRating = () => {
    const {selectedCategoryItem} = useSelector(state => state.memoryReducer)
    const {setSelectedCategoryItemRating} = useActions()

    const [ratingFive, setRatingFive] = useState(false)
    const [ratingFour, setRatingFour] = useState(false)
    const [ratingThree, setRatingThree] = useState(false)
    const [ratingTwo, setRatingTwo] = useState(false)
    const [ratingOne, setRatingOne] = useState(false)

    const setRating = useCallback(() => {
        setRatingFive(selectedCategoryItem.rating === 5)
        setRatingFour(selectedCategoryItem.rating === 4)
        setRatingThree(selectedCategoryItem.rating === 3)
        setRatingTwo(selectedCategoryItem.rating === 2)
        setRatingOne(selectedCategoryItem.rating === 1)
    }, [selectedCategoryItem.rating])

    useEffect(() => {
        setRating()
    }, [setRating])

    const currentRatingIsOne = () => {
        setRatingFive(false)
        setRatingFour(false)
        setRatingThree(false)
        setRatingTwo(false)
        setRatingOne(true)
        setSelectedCategoryItemRating(1)
    }
    const currentRatingIsTwo = () => {
        setRatingFive(false)
        setRatingFour(false)
        setRatingThree(false)
        setRatingOne(false)
        setRatingTwo(true)
        setSelectedCategoryItemRating(2)
    }
    const currentRatingIsThree = () => {
        setRatingFive(false)
        setRatingFour(false)
        setRatingTwo(false)
        setRatingOne(false)
        setRatingThree(true)
        setSelectedCategoryItemRating(3)
    }
    const currentRatingIsFour = () => {
        setRatingFive(false)
        setRatingThree(false)
        setRatingTwo(false)
        setRatingOne(false)
        setRatingFour(true)
        setSelectedCategoryItemRating(4)
    }
    const currentRatingIsFive = () => {
        setRatingFour(false)
        setRatingThree(false)
        setRatingOne(false)
        setRatingTwo(false)
        setRatingFive(true)
        setSelectedCategoryItemRating(5)
    }

    return (
        <div className='item-rating'>
            <input type="radio" id="star-5" name={`rating-${selectedCategoryItem.id}`} value="5"
                   checked={ratingFive}
                   onChange={currentRatingIsFive}
            />
            <label htmlFor="star-5" title="Оцінка «5»"/>
            <input type="radio" id="star-4" name={`rating-${selectedCategoryItem.id}`} value="4"
                   checked={ratingFour}
                   onChange={currentRatingIsFour}
            />
            <label htmlFor="star-4" title="Оцінка «4»"/>
            <input type="radio" id="star-3" name={`rating-${selectedCategoryItem.id}`} value="3"
                   checked={ratingThree}
                   onChange={currentRatingIsThree}
            />
            <label htmlFor="star-3" title="Оцінка «3»"/>
            <input type="radio" id="star-2" name={`rating-${selectedCategoryItem.id}`} value="2"
                   checked={ratingTwo}
                   onChange={currentRatingIsTwo}
            />
            <label htmlFor="star-2" title="Оцінка «2»"/>
            <input type="radio" id="star-1" name={`rating-${selectedCategoryItem.id}`} value="1"
                   checked={ratingOne}
                   onChange={currentRatingIsOne}
            />
            <label htmlFor="star-1" title="Оцінка «1»"/>
        </div>
    );
};

export default ItemRating;