import React from 'react';
import { Link } from 'react-scroll';
import {
    NavBarNav,
    NavListUl
} from './style.jsx';
import { i18n } from '../../translate/i18n'

import { MenuButton } from '../../Components/MenuButton'

export function NavBar() {
    return (
        <NavBarNav>
            <h1 id="teste" data-aos="zoom-in-down">POW.IO</h1>
            <NavListUl>
                <li><Link to="whoIAm">{i18n.t('navBar.navBarWhoIAm')}</Link></li>
                <li><Link to="projects">{i18n.t('navBar.navBarProjects')}</Link></li>
                <li><Link to="skills">{i18n.t('navBar.navBarSkills')}</Link></li>
                <li><Link to="contact">{i18n.t('navBar.navBarContact')}</Link></li>
            </NavListUl>
            <MenuButton />
        </NavBarNav>
    );
}