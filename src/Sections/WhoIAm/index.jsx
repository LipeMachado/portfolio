import React from 'react';
import Lottie from 'react-lottie';
import 'aos/dist/aos.css';
import {
    WhoIAmContainerDiv,
    ImageWhoIAmDiv,
    WhoIAmTextDiv,
    WhoIAmNameH2,
    WhoIAmNameP
} from './style.jsx';

import { i18n } from '../../translate/i18n'

import whoIAmAnimated from '../../Assets/animatedImages/whoiam.json'

export function WhoIAm() {

    const optionAnimatedWhoIAm = {
        loop: true,
        autoplay: true,
        animationData: whoIAmAnimated,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <WhoIAmContainerDiv>
            <ImageWhoIAmDiv data-aos="fade-down">
                <Lottie options={optionAnimatedWhoIAm} width={ 400 } height={ 400 }/>
            </ImageWhoIAmDiv>
            <WhoIAmTextDiv>
                <WhoIAmNameH2 data-aos="fade-up">{i18n.t('whoIAm.whoIAmTittle')} <span>.</span></WhoIAmNameH2>
                <WhoIAmNameP data-aos="fade-up">
                    {i18n.t('whoIAm.whoIAmParagraph')}
                </WhoIAmNameP>
            </WhoIAmTextDiv>
        </WhoIAmContainerDiv>
    );
}