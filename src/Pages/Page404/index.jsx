import React from 'react';
import {
    Page404ContainerMain,
    Page404ContainerDiv,
    Page404Numberh1,
    Page404TextDiv,
    Page404TextH2,
    Page404TextButtonDiv
} from './style.jsx'
import { Link } from 'react-router-dom';

export function Page404(){
    return (
        <>
            <Page404ContainerMain>
                <Page404ContainerDiv>
                    <Page404Numberh1>404</Page404Numberh1>
                </Page404ContainerDiv>
                <Page404TextDiv>
                    <Page404TextH2>Page not found</Page404TextH2>
                    <Page404TextButtonDiv>
                        <Link to="/">Back to homepage</Link>
                    </Page404TextButtonDiv>
                </Page404TextDiv>
            </Page404ContainerMain>
        </>
    );
}