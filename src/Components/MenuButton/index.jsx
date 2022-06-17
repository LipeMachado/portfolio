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
} from './style.jsx';

export function MenuButton() {

    const [active, setActive] = useState(false);

    const ToggleMode = () => {
        setActive(!active);
    };

    return (
        <>
            <ListMenuMobileIconContainerDiv onClick={ToggleMode} className={active ? 'active' : 'disable'}>
                <Line1Div></Line1Div>
                <Line2Div></Line2Div>
                <Line3Div></Line3Div>
            </ListMenuMobileIconContainerDiv>

            <MenuListContainerDiv style={{ display: active ? "flex" : "none" }}>
                <MenuListDiv>
                    <MenuListItemsUl>
                        <li><Link to="home" onClick={ToggleMode}>HOME</Link></li>
                        <li><Link to="whoIAm" onClick={ToggleMode}>WHO I AM</Link></li>
                        <li><Link to="projects" onClick={ToggleMode}>PROJECTS</Link></li>
                        <li><Link to="skills" onClick={ToggleMode}>SKILLS</Link></li>
                        <li><Link to="contact" onClick={ToggleMode}>CONTACTS</Link></li>                
                    </MenuListItemsUl>
                </MenuListDiv>
            </MenuListContainerDiv>
        </>
    );
}