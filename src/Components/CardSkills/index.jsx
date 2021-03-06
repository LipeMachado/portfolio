import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
    CardSkillsArticle
} from './style.jsx';

import { i18n } from '../../translate/i18n'

import listTexts from './listTexts.js';

function hoverChangeInformations(classCardName, textInfoCard) {
    let changeInfos = document.querySelector(".changeInfos");

    document.querySelector(classCardName).addEventListener('mouseover', () => {
        changeInfos.innerHTML = textInfoCard;
    })
    
    document.querySelector(classCardName).addEventListener('mouseout', () => {
        changeInfos.innerHTML = `${i18n.t('skills.skillsExample')}`;
    })
}

export function CardSkills(props) {
    useEffect(() => {
        hoverChangeInformations(`.${props.className}`, listTexts[props.className])

        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <CardSkillsArticle className={props.className} data-aos="zoom-in">
            <span></span>
            <img src={props.src} />
        </CardSkillsArticle>
    );
}