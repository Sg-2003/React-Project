import React,{useEffect} from 'react'

import paris from '../../assets/paris.png'
import traveler1 from '../../assets/user-1.png'

import london from '../../assets/london.png'
import traveler2 from '../../assets/user-2.png'

import dubai from '../../assets/dubai.png'
import traveler3 from '../../assets/user-3.png'

import newyork from '../../assets/New-york.png'
import traveler4 from '../../assets/user-4.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers=[
  {
    id:1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "John Deo",
    socialLink: '@john_deo'
  },
  {
    id:2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: "Mariya Maloa",
    socialLink: '@mary_malo'
  },
  {
    id:3,
    destinationImage: dubai,
    travelerImage: traveler3,
    travelerName: "Steven John",
    socialLink: '@steve_john'
  },
  {
    id:4,
    destinationImage: newyork,
    travelerImage: traveler4,
    travelerName: "Hary Patrick",
    socialLink: '@hey_hary'
  },

]
const Travelers = () => {
  useEffect(()=>{
      Aos.init({duration:2000})
    })
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top Travelers of this month!</h2>

        <div className="travelersContainer grid">
         {
          travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
            return(
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
            <img src={destinationImage} className="destinationImage" />
            <div className="travelerDetails">
              <div className="travelerPicture">
               <img src={travelerImage} className='travelerImage'/>
              </div>
              <div className="travelerName">
                <span>{travelerName}</span>
                 <p>{socialLink}</p>
                </div>
            </div>
          </div>
            )
          }
         )},
        </div>
      </div>
    </div>
  )
}

export default Travelers
