import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
    ListMenuMobileIconContainerDiv,
    Line1Div,
    Line2Div,
    Line3Div,
    MenuListContainerDiv,
    MenuListDiv,
    MenuListItemsUl,
    MenuMobileLanguageLi
} from './style.jsx';
import { i18n } from '../../translate/i18n'

const I18N_STORAGE_KEY = 'i18nextLng'

export function MenuButton() {
    const [active, setActive] = useState(false);

    const changePtBr = () => {
        localStorage.setItem(I18N_STORAGE_KEY, "pt-BR")
        window.location = window.location
        setActive(!active)
    }

    const changeEnUs = () => {
        localStorage.setItem(I18N_STORAGE_KEY, "en-US")
        window.location = window.location
        setActive(!active)
    }

    return (
        <>
            <ListMenuMobileIconContainerDiv onClick={() => { setActive(!active) }} className={active ? 'active' : 'disable'}>
                <Line1Div></Line1Div>
                <Line2Div></Line2Div>
                <Line3Div></Line3Div>
            </ListMenuMobileIconContainerDiv>

            <MenuListContainerDiv style={{ display: active ? "flex" : "none" }}>
                <MenuListDiv>
                    <MenuListItemsUl>
                        <li><Link to="home" onClick={() => { setActive(!active) }}>HOME</Link></li>
                        <li><Link to="whoIAm" onClick={() => { setActive(!active) }}>WHO I AM</Link></li>
                        <li><Link to="projects" onClick={() => { setActive(!active) }}>PROJECTS</Link></li>
                        <li><Link to="skills" onClick={() => { setActive(!active) }}>SKILLS</Link></li>
                        <li><Link to="contact" onClick={() => { setActive(!active) }}>CONTACTS</Link></li>
                        <MenuMobileLanguageLi>
                            <span onClick={changePtBr}>PT-BR</span>
                            <span onClick={changeEnUs}>EN-US</span>
                        </MenuMobileLanguageLi>
                    </MenuListItemsUl>
                </MenuListDiv>
            </MenuListContainerDiv>
        </>
    );
}