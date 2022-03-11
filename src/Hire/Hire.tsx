import React from 'react';
import styles from './Hire.module.css'
import styleContainer from '../Common/styles/Container.module.css';

export const Hire = () => {
    return (
        <div className={styles.hireContainer}>
            <div className={`${styleContainer.container}`}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h3>Agree to remote work</h3>
                        <button>Hire me</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

