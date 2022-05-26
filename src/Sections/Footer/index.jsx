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
                        <li><Link to="home" onClick={scrollUp}>Home <span>|</span></Link></li>
                        <li><Link to="whoAmI">Who am I? <span>|</span></Link></li>
                        <li><Link to="projects">Projects <span>|</span></Link></li>
                        <li><Link to="skills">Skills</Link></li>
                    </ContactIndexsDiv>
                </ContactIndexsUl>
            </ContactContentDiv>
        </ContactContainerDiv>
    );
}