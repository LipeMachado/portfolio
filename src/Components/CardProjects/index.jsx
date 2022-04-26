import React from 'react';
import {
    ProjectsDiv
} from './style.jsx';

export function CardProjects(props) {
    return (
        <a href={props.href} target="_blank">
            <ProjectsDiv>
                <img src={props.src} />
            </ProjectsDiv>
        </a>
    );
}