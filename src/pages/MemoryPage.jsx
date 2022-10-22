import React, {useState} from 'react';
import MemoryItem from "../components/MemoryPage/MemoryItem";

const MemoryPage = () => {
    const [categoryValue, setCategoryValue] = useState('Назва категорії')
    const categoryItems = [1, 2, 3, 4, 5, 6]
    const listItems = [1, 2, 3]

    return (
        <div className='memory-page'>
            <div className='sidebar'>
                <div className='list'>
                    <div className='list-name'><h3>Ваш список</h3></div>
                    <form className='categories'>
                        {listItems.map((item, index) =>
                            <input
                                key={index}
                                type='text'
                                value={categoryValue}
                                onChange={e => setCategoryValue(e.target.value)}
                            />
                        )}
                    </form>
                </div>
                <button className='btn-add'>Додати</button>
            </div>
            <div className='content'>
                <div className='category-name'>
                    <h2>Назва категорії</h2>
                </div>
                <div className='content__items'>
                    {categoryItems.map((item, index) =>
                        <MemoryItem
                            key={index}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemoryPage;