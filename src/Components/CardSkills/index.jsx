import React from 'react';
import { 
    CardSkillsArticle
} from './style.jsx';

    function hoverChangeInformations() {
        let changeInfos = document.querySelector(".changeInfos")    
    }

export function CardSkills(props) {
    return (
        <CardSkillsArticle className={props.className}>
            <span></span>
            <img src={props.src} />
        </CardSkillsArticle>
    );
}