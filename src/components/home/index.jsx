import React from 'react'
import Banner from './components/banner';
import homeStyle from './home.module.css';

const Home = () => {
  return (
    <div className={homeStyle.rootComponent}>
      <Banner />
    </div>
  )
}

export default Home