import React from 'react';
import {
    SkillsContainerDiv,
    InfosSkillsArticle,
    CardSkillsContainerDiv,
    InfoSkillsH1,
    InfoSkillsParagraphP,
} from './style.jsx';

import { i18n } from '../../translate/i18n'

import { CardSkills } from '../../Components/CardSkills/'

import logoCss from '../../Assets/iconsSkills/logoCSS.svg'
import logoHtml from '../../Assets/iconsSkills/logoHTML.svg'
import logoJavaScript from '../../Assets/iconsSkills/logoJavaScript.svg'
import logoReactJs from '../../Assets/iconsSkills/logoReactJS.svg'
import logoPython from '../../Assets/iconsSkills/logoPython.svg'
import logoLess from '../../Assets/iconsSkills/logoLess.svg'
import logoStyledComponents from '../../Assets/iconsSkills/logoStyledComponents.svg'
import logoVueJs from '../../Assets/iconsSkills/logoVueJs.svg'

export function Skills() {
    return (
        <SkillsContainerDiv>
            <InfosSkillsArticle>
                <InfoSkillsH1>{i18n.t('skills.skillsTitle')}</InfoSkillsH1>
                <InfoSkillsParagraphP>{i18n.t('skills.skillsExample')}</InfoSkillsParagraphP>
            </InfosSkillsArticle>
            <CardSkillsContainerDiv>
                <CardSkills src={logoHtml} className={"html"}/>
                <CardSkills src={logoCss} className={"css"}/>
                <CardSkills src={logoJavaScript} className={"js"}/>
                <CardSkills src={logoReactJs} className={"reactjs"}/>
                <CardSkills src={logoVueJs} className={"vue"} />
                <CardSkills src={logoLess} className={"less"} />
                <CardSkills src={logoStyledComponents} className={"styledComponents"} />
                <CardSkills src={logoPython} className={"python"} />
            </CardSkillsContainerDiv>
        </SkillsContainerDiv>
    );
}