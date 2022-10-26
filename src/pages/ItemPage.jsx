import React from 'react';
import {useSelector} from "react-redux";

const ItemPage = () => {
    const {selectedCategoryItem} = useSelector(state => state.memoryReducer)

    console.log(selectedCategoryItem)

    return (
        <div className='item-page'>

        </div>
    );
};

export default ItemPage;