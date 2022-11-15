import React from 'react';
// import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY} from "../../utils/consts";
import {useActions} from "../../hooks/useActions";

const MemoryItem = ({selectedCategoryName, item}) => {
    const navigate = useNavigate()

    const {setSelectedCategoryItem} = useActions()
    // const {removeItemInCategory} = useActions()

    // function handleRemoveItem(e) {
    //     e.stopPropagation()
    //     removeItemInCategory(props.id)
    // }

    function openItemPage() {
        localStorage.removeItem('itemId')
        localStorage.setItem('itemId', item.id)
        setSelectedCategoryItem(item)
        navigate(ROUTE_MEMORY + `/${selectedCategoryName}/${item.name}`)
    }

    return (
        <div
            className='item'
            onClick={openItemPage}
        >
            <div className='item__img-box'>
                <img src={item.img} alt={item.name}/>
            </div>
            <div className='item__content-box'>
                <div className='text-box'>
                    <textarea
                        value={item.name}
                        readOnly={true}
                    />
                </div>
                <div className='rating-box'>
                    <input type="radio" id="star-5" name={`rating-${item.id}`} value="5"
                           checked={item.rating === 5}
                           readOnly={true}
                    />
                    <label htmlFor="star-5" title="Оцінка «5»"/>
                    <input type="radio" id="star-4" name={`rating-${item.id}`} value="4"
                           checked={item.rating === 4}
                           readOnly={true}
                    />
                    <label htmlFor="star-4" title="Оцінка «4»"/>
                    <input type="radio" id="star-3" name={`rating-${item.id}`} value="3"
                           checked={item.rating === 3}
                           readOnly={true}
                    />
                    <label htmlFor="star-3" title="Оцінка «3»"/>
                    <input type="radio" id="star-2" name={`rating-${item.id}`} value="2"
                           checked={item.rating === 2}
                           readOnly={true}
                    />
                    <label htmlFor="star-2" title="Оцінка «2»"/>
                    <input type="radio" id="star-1" name={`rating-${item.id}`} value="1"
                           checked={item.rating === 1}
                           readOnly={true}
                    />
                    <label htmlFor="star-1" title="Оцінка «1»"/>
                </div>
            </div>
            {/*<button*/}
            {/*    className='btn-remove'*/}
            {/*    onClick={handleRemoveItem}*/}
            {/*>*/}
            {/*    x*/}
            {/*</button>*/}
        </div>
    );
};

export default MemoryItem;