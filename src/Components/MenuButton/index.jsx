import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
    ListMenuIconContainerDiv,
    MenuListContainerDiv,
    MenuListCloseIconDiv,
    MenuListDiv,
    MenuListItemsUl
} from './style.jsx';

import { List, X } from 'phosphor-react';

export function MenuButton() {

    const [active, setActive] = useState(false);

    const ToggleMode = () => {
        setActive(!active);
    };

    return (
        <>
            <ListMenuIconContainerDiv onClick={ToggleMode}>
                <List size={32} />
            </ListMenuIconContainerDiv>

            <MenuListContainerDiv style={{ display: active ? "flex" : "none" }}>
                <MenuListCloseIconDiv onClick={ToggleMode}>
                    <X size={32} />
                </MenuListCloseIconDiv>
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