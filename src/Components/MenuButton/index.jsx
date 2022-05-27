import React, { useState } from 'react';
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
                        <li>HOME</li>
                        <li>WHO I AM</li>
                        <li>SKILLS</li>
                        <li>CONTACTS</li>
                    </MenuListItemsUl>
                </MenuListDiv>
            </MenuListContainerDiv>
        </>
    );
}