import React from 'react'
import './homeScreen.css'
import { HomeBanner } from './HomeBanner/homeBanner'
import { HomeDetails } from './HomeDetails/homeDetails'
import { Footer } from '../../Component/Footer/footer'

export const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <HomeBanner></HomeBanner>
        <br></br>
        <br/>
        <br></br>
        <br/>
        <br></br>
        <br/>
        <br></br>
        <br/>
        <HomeDetails></HomeDetails>
      
    </div>
  )
}