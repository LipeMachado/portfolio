import React from "react";
import { Link } from 'react-scroll';
import { 
    ContactContainerDiv,
    ContactContentDiv,
    ContactLogosUl,
    ContactIndexsUl,
    ContactIndexsDiv
 } from './style.jsx';

import logoGitHub from '../../Assets/iconsContact/logoGitHub.svg'
import logoLinkedIn from '../../Assets/iconsContact/logoLinkedIn.svg'
import logoInstagram from '../../Assets/iconsContact/logoInstagram.svg'

import contactAnimated from '../../Assets/animatedImages/contact.json'

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
                <ContactLogosUl>
                    <li><img src={logoGitHub} /></li>
                    <li><img src={logoLinkedIn} /></li>
                    <li><img src={logoInstagram} /></li>
                </ContactLogosUl>
                <ContactIndexsUl>
                    <ContactIndexsDiv>
                        <li><Link to="home" onClick={scrollUp}>Home</Link></li>
                        <li><Link to="whoAmI">Who am I?</Link></li>
                        <li><Link to="projects">Projects</Link></li>
                        <li><Link to="skills">Skills</Link></li>
                    </ContactIndexsDiv>
                </ContactIndexsUl>
            </ContactContentDiv>
        </ContactContainerDiv>
    );
}