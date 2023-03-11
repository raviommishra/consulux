import React from 'react'
import Banner from './components/banner';
import Empowers from './components/empower';
import homeStyle from './home.module.css';
import Mystory from './components/my-story';
import OurTeam from './components/our-team';
import Projects from './components/projects';


const Home = () => {
  return (
    <div className={homeStyle.rootComponent}>
      <Banner />
      <Empowers />
     <OurTeam />
      <Mystory />

      <Projects />
    </div>
  )
}

export default Home