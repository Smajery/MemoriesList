import React, {useCallback, useEffect} from 'react';
import MemoryItem from "../components/MemoryPage/MemoryItem";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import MemorySelect from "../components/MemoryPage/MemorySelect";

const MemoryPage = () => {
    const {
        categoryItems,
        categories,
        selectedCategory,
        selectedCategoryItems
    } = useSelector(state => state.memoryReducer)

    const {
        setSelectedCategory,
        addCategory,
        setSelectedCategoryName,
        removeCategory,
        addItemInCategory,
        setSelectedCategoryItems,
        sortSelectedCategoryItems
    } = useActions()

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
            <div className='left-bar'>
                <div className='category-list'>
                    <div className='list-name'>
                        Ваш список
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
                                    item.name
                                    :
                                    'Назва категорії'
                                }
                            </div>
                        )}
                    </div>
                </div>
                <div className='category-list__btn-box'>
                    <button className='btn-add'
                            onClick={() => addCategory('Назва категорії')}
                    >
                        Додати
                    </button>
                </div>
            </div>
            <div className='content'>
                {selectedCategory.id
                    ?
                    <div className='content-top'>
                        <MemorySelect
                            defaultValue='Сортування'
                            onChange={sortSelectedCategoryItems}
                        />
                        <div className='content-name'>
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
                    <div className='content-top'>
                        <div className='content-name'>
                            Ви не обрали жодної категорії
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