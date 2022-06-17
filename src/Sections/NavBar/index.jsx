import React from 'react';
import { Link } from 'react-scroll';
import {
    NavBarNav,
    NavListUl
} from './style.jsx';

import { MenuButton } from '../../Components/MenuButton'

export function NavBar() {
    return (
        <NavBarNav>
            <h1 id="teste" data-aos="zoom-in-down">POW.IO</h1>
            <NavListUl>
                <li><Link to="whoIAm">Who I am?</Link></li>
                <li><Link to="projects">Projects</Link></li>
                <li><Link to="skills">Skills</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </NavListUl>
            <MenuButton />
        </NavBarNav>
    );
}