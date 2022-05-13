import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    ScrollTopContainerDiv,
    ScrollTopDiv,
    TrianguloDiv
} from './style.jsx';

export function ScrollTop() {

    const [toTopButton, setToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 250) {
                setToTopButton(true)
            } else {
                setToTopButton(false)
            }
        })

        Aos.init({
            duration: 1200,
        });
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {toTopButton && (
                <ScrollTopContainerDiv onClick={scrollUp} data-aos="fade-left">
                    <ScrollTopDiv>
                        <TrianguloDiv />
                    </ScrollTopDiv>
                </ScrollTopContainerDiv>
            )}
        </>
    );
}