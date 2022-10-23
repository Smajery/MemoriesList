import React from 'react';

const MemoryItem = (props) => {
    return (
        <div className='item' onClick={props.onClick}>
            <div className='item__img-box'>
                <img src={props.img} alt={props.name}/>
            </div>
            <div className='item__text-box'>
                <a>{props.name}</a>
            </div>
        </div>
    );
};

export default MemoryItem;