import React, { useRef } from 'react';
import {
    Page404ContainerMain,
    Page404ContainerDiv,
    Page404Numberh1,
    Page404TextDiv,
    Page404TextH2,
    Page404TextButtonDiv,
    Page404LanguageDiv,
    Page404LanguagePtBrSpan,
    Page404LanguageEnUsSpan
} from './style.jsx'
import { i18n } from '../../translate/i18n'

import { UseClickOutside } from '../../Components/UseClickOutside/'

const I18N_STORAGE_KEY = 'i18nextLng'

import { Link } from 'react-router-dom';

export function Page404() {

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

    return (
        <>
            <Page404ContainerMain>
                <Page404ContainerDiv>
                    <Page404Numberh1>404</Page404Numberh1>
                </Page404ContainerDiv>
                <Page404TextDiv>
                    <div>
                        <Page404TextH2>{i18n.t('page404.page404Title')}</Page404TextH2>
                    </div>
                    <Page404TextButtonDiv>
                        <Link to="/">{i18n.t('page404.page404TextButton')}</Link>
                    </Page404TextButtonDiv>
                </Page404TextDiv>
                <Page404LanguageDiv>
                    <Page404LanguagePtBrSpan onClick={changePtBr}>Pt-Br</Page404LanguagePtBrSpan>
                    <Page404LanguageEnUsSpan onClick={changeEnUs}>En-Us</Page404LanguageEnUsSpan>
                </Page404LanguageDiv>
            </Page404ContainerMain>
        </>
    );
}