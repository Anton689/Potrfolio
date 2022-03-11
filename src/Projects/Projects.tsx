import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../Common/styles/Container.module.css';
import {Project} from './Project/Project';


export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container}`}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>My Projects</h2>
                    <div className={styles.projects}>
                        <Project projectName={'Project name'} description={'description'}/>
                        <Project projectName={'Project name2'} description={'description2'}/>
                    </div>
                </div>

            </div>

        </div>
    );
};

