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
                <WhoIAmNameH2 data-aos="fade-up">Who I am <span>.</span></WhoIAmNameH2>
                <WhoIAmNameP data-aos="fade-up">
                    Hello, my name is Felipe Silva Machado. I am a front-end developer,
                    developing responsive and minimalistic websites.
                    I started in the programming world when I was 15,
                    I used to look at games and would like to know how they worked,
                    soon after I started studying python, and was looking for how websites worked,
                    and got interested in developing websites. Today I am a programmer, photographer, video editor and designer.
                </WhoIAmNameP>
            </WhoIAmTextDiv>
        </WhoIAmContainerDiv>
    );
}