import React, {useCallback, useEffect} from 'react';
import MemoryItem from "../components/MemoryPage/MemoryItem";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import MemorySelect from "../components/MemoryPage/MemorySelect";

const MemoryPage = () => {
    const {categoryItems, categories, selectedCategory, selectedCategoryItems} = useSelector(state => state.memoryReducer)

    const {setSelectedCategory, addCategory, setSelectedCategoryName, removeCategory, addItemInCategory, setSelectedCategoryItems, sortSelectedCategoryItems} = useActions()

    const handleItems = useCallback(() => {
        const newArray = []
        for (let i = 0; i < categoryItems.length; i++) {
            if (categoryItems[i].category === selectedCategory.id) {
                newArray.push(categoryItems[i])
            }
        }
        return setSelectedCategoryItems(newArray)
    }, [selectedCategory, categoryItems])

    useEffect(() => {
        handleItems()
    }, [selectedCategory, categoryItems, handleItems])


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
                                className={item.id === selectedCategory.id ? 'category-name active' : 'category-name'}
                                key={item.id}
                                onClick={() => setSelectedCategory(item)}
                            >
                                {item.name
                                    ?
                                    <p>{item.name}</p>
                                    :
                                    <p>Назва категорії</p>
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
                {selectedCategory.id
                    ?
                    <div className='content-name'>
                        <MemorySelect
                            defaultValue='Сортування'
                            onChange={sortSelectedCategoryItems}
                        />
                        <div className='content-name__text'>
                            <input
                                type='text'
                                placeholder='Назва категорії'
                                maxLength={15}
                                value={selectedCategory.name}
                                onChange={e => setSelectedCategoryName(e.target.value)}
                            />
                        </div>
                        <button
                            className='btn-remove'
                            onClick={removeCategory}
                        >
                            Видалити
                        </button>
                    </div>
                    :
                    <div className='content-name'>
                        <div className='content-name__text'>
                            <h2>Ви не обрали жодної категорії</h2>
                        </div>
                    </div>
                }
                {selectedCategory.id
                    &&
                    <div className='content__items'>
                        {selectedCategoryItems.map(item =>
                            <MemoryItem
                                key={item.id}
                                item={item}
                                selectedCategoryName={selectedCategory.name}
                            />
                        )
                        }
                        <div className='btn-add-box'>
                            <button
                                onClick={() => addItemInCategory(prompt('', 'Назва предмета'), selectedCategory.id)}
                            >
                                Додати
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MemoryPage;