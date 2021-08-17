import React from 'react';
import classNames from 'classnames';

const Item = ({ children }) => {
    const itemClass = classNames('item');
    return (
        <div className={ itemClass }> 
            { children } 
        </div>
    )
}

export default Item;