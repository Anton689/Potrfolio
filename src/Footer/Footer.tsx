import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../Common/styles/Container.module.css';
import {Icon} from './Icon';

export const Footer = () => {
    return (
        <div className={style.container}>
            <div className={styleContainer.container}>
                <div className={style.wrapper}>
                    <h3>Name Name</h3>
                    <div className={style.localBlock}>
                        <Icon/>
                        <Icon/>
                        <Icon/>
                        <Icon/>
                        <Icon/>
                        <Icon/>
                        <Icon/>
                    </div>
                </div>
            </div>
        </div>
    );
};
