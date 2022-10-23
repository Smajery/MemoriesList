import React from 'react';

const MemoryItem = (props) => {
    return (
        <div className='item' onClick={props.onClick}>
            <div className='item__img'>
                <img src={props.img} alt={props.name} width={50} height={70}/>
            </div>
            <div className='item__text'>
                {props.name}
            </div>
        </div>
    );
};

export default MemoryItem;