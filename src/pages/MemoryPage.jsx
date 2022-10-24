import React, {useCallback, useEffect, useState} from 'react';
import MemoryItem from "../components/MemoryPage/MemoryItem";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY} from "../utils/consts";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const MemoryPage = () => {
    const navigate = useNavigate()

    const {categoryItems, categories, selectedCategory} = useSelector(state => state.memoryReducer)
    const {setSelectedCategory, addCategory, setSelectedCategoryName, removeCategory, addItemInCategory} = useActions()

    const [sortedCategoryItems, setSortedCategoryItems] = useState([])

    const handleItems = useCallback(() => {
        const newArray = []
        for (let i = 0; i < categoryItems.length; i++) {
            if (categoryItems[i].category === selectedCategory.id) {
                newArray.push(categoryItems[i])
            }
        }
        return setSortedCategoryItems(newArray)
    }, [selectedCategory, categoryItems])

    useEffect(() => {
        handleItems()
    }, [selectedCategory, categoryItems])


    return (
        <div className='memory-page'>
            <div className='category-bar'>
                <div className='category__list'>
                    <div className='list-name'>
                        <h2>Ваш список</h2>
                    </div>
                    <div className='categories'>
                        {categories.map(item =>
                            <div
                                className='category-name'
                                key={item.id}
                                onClick={() => setSelectedCategory(item)}
                                style={{border: item.id === selectedCategory.id ? '2px solid black' : '2px solid transparent'}}
                            >
                                {item.name
                                    ?
                                    <a>{item.name}</a>
                                    :
                                    <a>Назва категорії</a>
                                }
                            </div>
                        )}
                    </div>
                </div>
                <button
                    className='btn-add'
                    onClick={() => addCategory('Назва категорії')}
                >
                    Додати
                </button>
            </div>
            <div className='content-bar'>
                <div className='content-name'>
                    <div className='content-name__text'>
                        {!selectedCategory.id
                            ?
                            <h2>Ви не обрали жодної категорії</h2>
                            :
                            <input
                                type='text'
                                placeholder='Назва категорії'
                                maxLength={15}
                                value={selectedCategory.name}
                                onChange={e => setSelectedCategoryName(e.target.value)}
                            />
                        }
                    </div>
                    {selectedCategory.id
                        &&
                        <button
                            className='btn-remove'
                            onClick={removeCategory}
                        >
                            Видалити
                        </button>
                    }
                </div>
                <div className='content__items'>
                    {selectedCategory.id
                        &&
                        sortedCategoryItems.map(item =>
                            <MemoryItem
                                key={item.id}
                                img={item.img}
                                name={item.name}
                                onClick={() => navigate(ROUTE_MEMORY + '/' + selectedCategory.name + '/' + item.name)}
                            />
                        )
                    }
                    {selectedCategory.id
                        &&
                        <div className='btn-add-box'>
                            <button
                                onClick={() => addItemInCategory(prompt('', 'Назва предмета'), selectedCategory.id)}
                            >
                                Додати
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MemoryPage;