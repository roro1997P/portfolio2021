import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Html'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Css'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Gsap'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Sass'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Git'} progress={'70%'} width={'70%'} />
            </div>
        </div>
    )
}

export default AboutPage;
