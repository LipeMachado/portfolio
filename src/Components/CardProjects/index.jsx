import React from 'react';
import {
    ProjectsDiv
} from './style.jsx';

export function CardProjects(props) {
    return (
        <a href={props.href} target="_blank">
            <ProjectsDiv>
                <div>
                    <img src={props.src} />
                </div>
            </ProjectsDiv>
        </a>
    );
}