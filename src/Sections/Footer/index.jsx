import React from "react";
import { Link } from 'react-scroll';
import { 
    ContactContainerDiv,
    ContactContentDiv,
    ContactLogosDiv,
    ContactIndexsUl,
    ContactIndexsDiv
 } from './style.jsx';

import logoGitHub from '../../Assets/iconsContact/logoGitHub.svg'
import logoLinkedIn from '../../Assets/iconsContact/logoLinkedIn.svg'
import logoInstagram from '../../Assets/iconsContact/logoInstagram.svg'
import logoCurriculo from '../../Assets/iconsContact/logoCurriculo.svg'

import ArchiveCurriculo from '../../Assets/archiveCurriculo/Curriculo-FelipeSilvaMachado.pdf'

export function Footer() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const gitHubView = () => {
        fbq('track', 'View GitHub');
    }

    const linkedInView = () => {
        fbq('track', 'View LinkedIn');
    }

    const instagramView = () => {
        fbq('track', 'View Instagram');
    }

    const curriculoView = () => {
        fbq('track', 'View Curriculo');
    }

    return (
        <ContactContainerDiv>
            <ContactContentDiv>
                <ContactLogosDiv>
                    <a href="http://github.com/LipeMachado" target="_blank" onClick={gitHubView}><img src={logoGitHub} /></a>
                    <a href="https://www.linkedin.com/in/felipe-silva-machado-676b70186/" target="_blank" onClick={linkedInView}><img src={logoLinkedIn}/></a>
                    <a href="https://www.instagram.com/lipe_machado765/" target="_blank" onClick={instagramView}><img src={logoInstagram}/></a>
                    <a href={ArchiveCurriculo} download="Curriculo - Felipe Silva Machado" onClick={curriculoView}><img src={logoCurriculo}/></a>
                </ContactLogosDiv>
                <ContactIndexsUl>
                    <ContactIndexsDiv>
                        <li><Link to="home">Home</Link></li>
                        <li><span>|</span></li>
                        <li><Link to="whoIAm">Who I am?</Link></li>
                        <li><span>|</span></li>
                        <li><Link to="projects">Projects</Link></li>
                        <li><span>|</span></li>
                        <li><Link to="skills">Skills</Link></li>
                    </ContactIndexsDiv>
                </ContactIndexsUl>
            </ContactContentDiv>
        </ContactContainerDiv>
    );
}