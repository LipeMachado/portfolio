import React from 'react';
import { 
    CardSkillsDiv
} from './style.jsx';

    function hoverChangeInformations() {
        let changeInfos = document.querySelector(".changeInfos")    
    }

export function CardSkills(props) {
    return (
        <CardSkillsDiv className={props.className}>
            <div>
                <img src={props.src}/>
            </div>
        </CardSkillsDiv>
    );
}