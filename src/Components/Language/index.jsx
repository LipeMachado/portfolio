import React from 'react';
import { 
    LanguageMenuDiv
} from './style.jsx';

export function Language(props) {
    return (
        <LanguageMenuDiv className={props.className}>
            <span onClick={props.PtBr}>pt-BR</span>
            <span onClick={props.EnUs}>en-US</span>
        </LanguageMenuDiv>
    );
}