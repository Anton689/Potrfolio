import React from 'react';
import styles from './Skill.module.css';

export type SkillType = {
    title: string
    description: string
}

export const Skill = (props:SkillType) => {
    const {title, description} = props

    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span className={styles.description}>
                {description}
            </span>
        </div>
    );
};

