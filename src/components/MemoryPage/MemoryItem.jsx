import React from 'react';
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {ROUTE_MEMORY} from "../../utils/consts";

const MemoryItem = (props) => {
    const navigate = useNavigate()

    const {removeItemInCategory} = useActions()

    function handleRemoveItem(e) {
        e.stopPropagation()
        removeItemInCategory(props.id)
    }

    return (
        <div
            className='item'
            onClick={() => navigate(ROUTE_MEMORY + '/' + props.selectedCategoryName + '/' + props.name)}
        >
            <div className='item__img-box'>
                <img src={props.img} alt={props.name}/>
            </div>
            <div className='item__text-box'>
                <a>{props.name}</a>
            </div>
            <button
                className='btn-remove'
                onClick={handleRemoveItem}
            >
                x
            </button>
        </div>
    );
};

export default MemoryItem;