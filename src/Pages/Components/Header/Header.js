import React from 'react';
import classNames from 'classnames';
import {
    Link
  } from "react-router-dom"; 

  import './header.scss';

export const Header = ({ components }) => {
    const headerClass = classNames('header');
    const labelClass = classNames('label');

    return (
        <div className={ headerClass }>
            <Link to="/"><span className={ labelClass }> My Storybook </span></Link>
        </div>
    )
}

export default Header;