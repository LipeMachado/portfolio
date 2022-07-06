import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import {
    NavBarNav,
    NavListUl,
    LanguageLi,
    ThemeModeLi,
    ThemeDarkIconDiv,
    ThemeLightIconDiv
} from './style.jsx';
import { Globe, Moon, Sun } from 'phosphor-react';
import { i18n } from '../../translate/i18n'

import { MenuButton } from '../../Components/MenuButton/'
import { Language } from '../../Components/Language/'
import { UseClickOutside } from '../../Components/UseClickOutside/'

const I18N_STORAGE_KEY = 'i18nextLng'

export function NavBar() {
    const [openLanguage, setOpenLanguage] = useState(false);

    const changePtBr = () => {
        localStorage.setItem(I18N_STORAGE_KEY, "pt-BR")
        window.location = window.location
    }

    const changeEnUs = () => {
        localStorage.setItem(I18N_STORAGE_KEY, "en-US")
        window.location = window.location
    }

    const LanguageMenu = useRef(null)
    UseClickOutside(LanguageMenu, () => setOpenLanguage(false));

    const [switchTheme, setSwitchTheme] = useState(false);

    return (
        <NavBarNav>
            <h1 id="teste" data-aos="zoom-in-down">POW.IO</h1>
            <NavListUl>
                <li><Link to="whoIAm">{i18n.t('navBar.navBarWhoIAm')}</Link></li>
                <li><Link to="projects">{i18n.t('navBar.navBarProjects')}</Link></li>
                <li><Link to="skills">{i18n.t('navBar.navBarSkills')}</Link></li>
                <li><Link to="contact">{i18n.t('navBar.navBarContact')}</Link></li>
                <LanguageLi ref={LanguageMenu}>
                    <Globe size={23} onClick={() => { setOpenLanguage(!openLanguage) }} />
                    <Language PtBr={changePtBr} EnUs={changeEnUs} className={openLanguage ? 'active' : 'disabled'}/>
                </LanguageLi>
                <ThemeModeLi>
                    <ThemeDarkIconDiv onClick={() => {setSwitchTheme(!switchTheme), alert('Coming soon')}} className={switchTheme ? 'disabled' : 'active'} >
                        <Moon size={23} />
                    </ThemeDarkIconDiv>
                    <ThemeLightIconDiv onClick={() => {setSwitchTheme(!switchTheme), alert('Coming soon')}} className={switchTheme ? 'active' : 'disabled'}>
                        <Sun size={23} />
                    </ThemeLightIconDiv>
                </ThemeModeLi>
            </NavListUl>
            <MenuButton />
        </NavBarNav>
    );
}