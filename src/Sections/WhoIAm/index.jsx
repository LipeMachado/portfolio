import React from 'react';
import Lottie from 'react-lottie';
import {
    WhoAmIContainerDiv,
    ImageWhoAmIDiv,
    WhoAmITextDiv,
    WhoAmINameH2,
    WhoAmINameP
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
        <WhoAmIContainerDiv>
            <ImageWhoAmIDiv>
                <Lottie options={optionAnimatedWhoIAm} width={ 400 } height={ 400 } data-aos="zoom-in"/>
            </ImageWhoAmIDiv>
            <WhoAmITextDiv>
                <WhoAmINameH2>Who I am <span>.</span></WhoAmINameH2>
                <WhoAmINameP>
                    Hello, my name is Felipe Silva Machado. I am a front-end developer.
                    I develop responsive and minimalistic websites. I started in the programming world when I was 15 years old,
                    I used to look at games and would like to know how they worked, soon after I started studying python,
                    and was looking for how websites worked, and I got interested in developing websites.
                    Today I am in college, studying Computer Science. And I want to become a great professional.
                </WhoAmINameP>
            </WhoAmITextDiv>
        </WhoAmIContainerDiv>
    );
}