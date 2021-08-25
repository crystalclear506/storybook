import React from 'react';
import classNames from 'classnames';
import {
    Link
} from "react-router-dom"; 

import styles from './header.scss';

export const Header = ({ components }) => {
    return (
        <div className={ styles.header }>
            <Link to="/"><span className={ styles.label }> Opal's Components </span></Link>
        </div>
    )
}

export default Header;