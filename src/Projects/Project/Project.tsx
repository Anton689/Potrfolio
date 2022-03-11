import React from 'react';
import styles from '../Project/Project.module.css'

type ProjectType = {
    projectName: string
    description: string
}

export const Project = ({projectName,description }:ProjectType) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectBlock}>
                <button>View</button>
            </div>
            <div className={styles.textBlock}>
                <h3>{projectName}</h3>
                <span>{description}</span>
            </div>
        </div>
    );
};
