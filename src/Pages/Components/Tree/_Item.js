import React from 'react';
import classNames from 'classnames';

const Item = ({ title }) => {
    const itemClass = classNames('item');
    return (
        <div className={ itemClass }> 
            { title } 
        </div>
    )
}

export default Item;