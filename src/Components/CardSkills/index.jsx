import React, { useEffect } from 'react';
import { 
    CardSkillsArticle
} from './style.jsx';

import listTexts from './listTexts.js';

function hoverChangeInformations(classCardName, textInfoCard) {
    let changeInfos = document.querySelector(".changeInfos");

    document.querySelector(classCardName).addEventListener('mouseover', () => {
        changeInfos.innerHTML = textInfoCard;
    })
    
    document.querySelector(classCardName).addEventListener('mouseout', () => {
        changeInfos.innerHTML = `Hover the mouse cursor on the card to read`;
    })
}

export function CardSkills(props) {
    useEffect(() => {
        hoverChangeInformations(`.${props.className}`, listTexts[props.className])
    }, []);

    return (
        <CardSkillsArticle className={props.className} >
            <span></span>
            <img src={props.src} />
        </CardSkillsArticle>
    );
}