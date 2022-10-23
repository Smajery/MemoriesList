import React, {useState} from 'react';
import MemoryItem from "../components/MemoryPage/MemoryItem";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY_ITEM} from "../utils/consts";
import {useSelector} from "react-redux";

const MemoryPage = () => {
    const {categoryItems, listItems} = useSelector(state => state.memoryReducer)
    const [selectedCategory, setSelectedCategory] = useState('Ви не обрали жодної категорії')

    const navigate = useNavigate()

    return (
        <div className='memory-page'>
            <div className='sidebar'>
                <div className='list'>
                    <div className='list-name'><h2>Ваш список</h2></div>
                    <div className='categories'>
                        {listItems.map(item =>
                            <div
                                className='category-name'
                                key={item.id}
                                onClick={() => setSelectedCategory(item.name)}
                            >
                                {item.name}
                            </div>
                        )}
                    </div>
                </div>
                <button className='btn-add'>Додати</button>
            </div>
            <div className='content'>
                <div className='content-name'>
                    <h2>{selectedCategory}</h2>
                </div>
                <div className='content__items'>
                    {categoryItems.map(item =>
                        <MemoryItem
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            onClick={() => navigate(ROUTE_MEMORY_ITEM + '/' + item.id)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemoryPage;