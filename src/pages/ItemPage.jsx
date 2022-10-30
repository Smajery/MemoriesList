import React from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import ItemRating from "../components/ItemPage/ItemRating";


const ItemPage = () => {
    const {selectedCategoryItem} = useSelector(state => state.memoryReducer)
    const {setSelectedCategoryItemName} = useActions()

    // const uploadFile = (file) => {
    //
    //     // файла <5 Мб
    //     if (file.size > 5 * 1024 * 1024) {
    //         alert("Файл должен быть не более 5 МБ.");
    //         return;
    //     }
    //
    // }

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
                        <ItemRating />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;