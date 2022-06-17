import React from 'react';
import { 
    ProjectsTitleH1,
    ProjectsContainerDiv
} from './style.jsx';

import { CardProjects } from '../../Components/CardProjects/'

import nftCard from '../../Assets/nftCard.jpg'
import orderSummary from '../../Assets/orderSummary.jpg'
import profileCard from '../../Assets/profileCard.jpg'
import qrCode from '../../Assets/qrCode.jpg'
import statsPreview from '../../Assets/statsPreview.jpg'
import codarWebsite from '../../Assets/codarWebsite.jpeg'
import portfolio from '../../Assets/portfolio.jpeg'

export function Projects() {
    return (
        <>
            <ProjectsTitleH1>Projects</ProjectsTitleH1>
            <ProjectsContainerDiv>
                <CardProjects src={nftCard} href={"https://github.com/LipeMachado/nftCard-Challenge"} />
                <CardProjects src={orderSummary} href={"https://github.com/LipeMachado/orderSummary-Challenge"} />
                <CardProjects src={profileCard} href={"https://github.com/LipeMachado/profileCard-Challenge"} />
                <CardProjects src={qrCode} href={"https://github.com/LipeMachado/qrCode-Challenge"} />
                <CardProjects src={statsPreview} href={"https://github.com/LipeMachado/statsPreview-Challenge"} />
                <CardProjects src={codarWebsite} href={"https://github.com/LipeMachado/codar-Challenge"} />
                <CardProjects src={portfolio} href={"https://github.com/LipeMachado/portfolio"} />
            </ProjectsContainerDiv>
        </>
    );
}