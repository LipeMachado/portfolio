import React from 'react';
import {
    ProjectsDiv
} from './style.jsx';



export function CardProjects(props) {
    return (
        <ProjectsDiv>
            <a href={props.href} target="_blank">
                <div>
                    <img src={props.src} />
                </div>
            </a>
        </ProjectsDiv>
    );
}