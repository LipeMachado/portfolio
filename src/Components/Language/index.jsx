import React from 'react';
import { 
    LanguageMenuDiv
} from './style.jsx';

export function Language(props) {

    return (
        <LanguageMenuDiv className={props.className}>
            <span onClick={props.PtBr}>PT-BR</span>
            <span onClick={props.EnUs}>EN-US</span>
        </LanguageMenuDiv>
    );
}