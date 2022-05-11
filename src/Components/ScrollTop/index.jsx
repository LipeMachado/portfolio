import React, { useEffect, useState } from 'react';
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
                <ScrollTopContainerDiv onClick={scrollUp}>
                    <ScrollTopDiv>
                        <TrianguloDiv />
                    </ScrollTopDiv>
                </ScrollTopContainerDiv>
            )}
        </>
    );
}