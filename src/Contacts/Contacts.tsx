import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from '../Common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={styles.container}>
            <div className={`${styleContainer.container}`}>

                <div className={styles.wrapper}>
                    <h3>contacts</h3>
                        <form className={styles.contacts}>
                            <input type="text" />
                            <input type="text" />
                            <textarea></textarea>
                        </form>
                        <button>Send</button>



                </div>

            </div>

        </div>
    );
};

