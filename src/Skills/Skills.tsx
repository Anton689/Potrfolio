import React from 'react';
import styles from './Skills.module.css';
import styleContainer from '../Common/styles/Container.module.css';
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Заголовок</h2>
                <div className={styles.skills}>
                    <Skill title={'HTML'} description={'loremsdfs sdf sdf qwqweqwe '}/>
                    <Skill title={'CSS'} description={'loremq qwe sdf erhgr tyjetr wer 23  wsdf'}/>
                    <Skill title={'JS'} description={'Lorem sdf '}/>
                </div>
            </div>

        </div>
    );
};

