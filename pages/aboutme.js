import Head from 'next/head'
import { server } from '../config'
import AboutMeHeader from "../comps/AboutMe/AboutMeHeader"
import ExperienceSection from '../comps/AboutMe/ExperienceSection'
import SkillsSection from '../comps/AboutMe/SkillsSection'
import { skillsData } from '../data/skillsdata'
import { experienceData } from '../data/experiencedata'

const aboutme = () => {
    return (
        <div>
            <Head>
                <title>Bivens Blueprint | About Me</title>
            </Head>

            <AboutMeHeader />
            
            <SkillsSection skillsData={skillsData} />

            <ExperienceSection experienceData={experienceData} />
            
            
        </div>
    );
}

export default aboutme;