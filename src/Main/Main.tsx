import React from 'react';
import style from './Main.module.css';
import styleContainer from '../Common/styles/Container.module.css';


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.wrapper}>
                    <div className={style.text}>Text
                        <span>Hi there</span>
                        <h1>Anton Anton</h1>
                        <p>Front Dev Dev</p>
                    </div>
                    <div className={style.photo}>Photo</div>
                </div>

            </div>
        </div>
    );
};
