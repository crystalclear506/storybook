import React from 'react';

import styles from './welcome.scss';

export const Home = ({ components }) => {
    return (
        <div>
            <h1 className={styles.title}> Welcome to My Storybook </h1>
            <h2 className={styles.subtitle}> This storybook consists of demos of all my components that I have created and used in my projects</h2>
            <p className={styles.paragraph}>
                Simply choose a component from the list on the left to see it in action.
            </p>
        </div>
    )
}

export default Home;