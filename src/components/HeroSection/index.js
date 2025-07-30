import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/mi3.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer id="home" className='home'>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer id="user-detail-intro" className='section'>
                    <HeroLeftContainer id="Left">
                        <Title id="user-detail-name" >Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                      
                      
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img className='home-img' src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
                <div>
                <SubTitle id="about" className='about section'>About : {Bio.description}</SubTitle>
                        <ResumeButton id="resume-button-2" href={Bio.resume} target='_blank'>Resume</ResumeButton>

                    </div>

            </HeroContainer>
        </div>
    )
}

export default HeroSection