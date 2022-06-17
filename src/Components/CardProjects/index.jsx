import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    ProjectsDiv
} from './style.jsx';



export function CardProjects(props) {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    })

    return (
        <ProjectsDiv data-aos="fade-up">
            <a href={props.href} target="_blank">
                <div>
                    <img src={props.src} />
                </div>
            </a>
        </ProjectsDiv>
    );
}