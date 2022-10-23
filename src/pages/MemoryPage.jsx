import React, {useState} from 'react';
import MemoryItem from "../components/MemoryPage/MemoryItem";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY_ITEM} from "../utils/consts";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const MemoryPage = () => {
    const navigate = useNavigate()

    const {categoryItems, categories, selectedCategory} = useSelector(state => state.memoryReducer)
    const {setSelectedCategory, addCategory, setSelectedCategoryName} = useActions()

    return (
        <div className='memory-page'>
            <div className='category-bar'>
                <div className='category__list'>
                    <div className='list-name'><h2>Ваш список</h2></div>
                    <div className='categories'>
                        {categories.map(item =>
                            <div
                                className='category-name'
                                key={item.id}
                                onClick={() => setSelectedCategory(item)}
                                style={{border: item.id === selectedCategory.id ? '2px solid black' : 'none'}}
                            >
                                {item.name}
                            </div>
                        )}
                    </div>
                </div>
                <button
                    className='btn-add'
                    onClick={() => addCategory('New Category')}
                >
                    Додати
                </button>
            </div>
            <div className='content'>
                <div className='content-name'>
                    {!selectedCategory.name
                        ?
                        <h2>Ви не обрали жодної категорії</h2>
                        :
                        <input
                            type='text'
                            value={selectedCategory.name}
                            onChange={e => setSelectedCategoryName(e.target.value)}
                        />

                    }
                </div>
                <div className='content__items'>
                    {selectedCategory.name
                        &&
                        categoryItems.map(item =>
                            <MemoryItem
                                key={item.id}
                                img={item.img}
                                name={item.name}
                                onClick={() => navigate(ROUTE_MEMORY_ITEM + '/' + item.id)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MemoryPage;