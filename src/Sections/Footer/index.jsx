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

export function Footer() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <ContactContainerDiv>
            <ContactContentDiv>
                <ContactLogosDiv>
                    <a href="http://github.com/LipeMachado" target="_blank"><img src={logoGitHub} /></a>
                    <a href="https://www.linkedin.com/in/felipe-silva-machado-676b70186/" target="_blank"><img src={logoLinkedIn} /></a>
                    <a href="https://www.instagram.com/lipe_machado765/" target="_blank"><img src={logoInstagram} /></a>
                </ContactLogosDiv>
                <ContactIndexsUl>
                    <ContactIndexsDiv>
                        <li><Link to="home">Home <span>|</span></Link></li>
                        <li><Link to="whoAmI">Who am I? <span>|</span></Link></li>
                        <li><Link to="projects">Projects <span>|</span></Link></li>
                        <li><Link to="skills">Skills</Link></li>
                    </ContactIndexsDiv>
                </ContactIndexsUl>
            </ContactContentDiv>
        </ContactContainerDiv>
    );
}