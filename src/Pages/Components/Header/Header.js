import React from 'react';
import classNames from 'classnames';
import styles from './header.scss';

export const Header = ({ components }) => {
    const headerClass = classNames('header');
    const labelClass = classNames('label');

    return (
        <div className={ headerClass }>
            <span className={ labelClass }> My Storybook </span>
        </div>
    )
}

export default Header;