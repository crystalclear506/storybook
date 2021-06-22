import React from 'react';
import Item from './_Item';
import classNames from 'classnames';

import './tree.scss';

const Tree = ({ components }) => {
    const treeContainerClass = classNames('tree-container');
    const listContainerClass = classNames('list-container');


    const items = [];

    for (let i = 0; i < 100; i++) {
        items.push(<Item title={ 'Item' }/>);
    }
    return (
        <div className={ treeContainerClass }>
            <div className={ listContainerClass }>
                { items }
            </div>
        </div>
    )
}

export default Tree;