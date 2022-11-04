import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import ItemRating from "../components/ItemPage/ItemRating";


const ItemPage = () => {
    const {selectedCategoryItem, categoryItems} = useSelector(state => state.memoryReducer)
    const {setSelectedCategoryItem, setSelectedCategoryItemName, setSelectedCategoryItemImg} = useActions()

    const fetchSelectedItem = useCallback(() => {
        for (let i = 0; i < categoryItems.length; i++){
            if(categoryItems[i].id === Number(localStorage.getItem('itemId'))){
                setSelectedCategoryItem(categoryItems[i])
            }
        }
    }, [categoryItems, selectedCategoryItem])

    useEffect(() => {
        fetchSelectedItem()
    }, [fetchSelectedItem])

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
                            onChange={e => setSelectedCategoryItemImg(e.target.files)}
                        />
                    </div>
                    <div className='content-right'>
                        <div className='item-name'>
                            <textarea
                                value={selectedCategoryItem.name}
                                onChange={e => setSelectedCategoryItemName(e.target.value)}
                            />
                        </div>
                        <ItemRating />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;