import React from 'react'
import './Service.css';
import loveimage from "./assets/amish-thakkar-BEdxXAiRfRM-unsplash.jpg"
import second from './assets/nathan-dumlao-As8zq82LBpw-unsplash.jpg'
import third from './assets/aleksandr-popov-tnfmwaj-nuo-unsplash.jpg'
import five from  './assets/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg'
import four from "./assets/Urvashi & Manav’s Wedding Pictures Are So Surreal….jpg"
import reception from "./assets/zaraq-iqbal-4CfXuKfeIGY-unsplash.jpg"
import ledwall from './assets/pexels-pixabay-158826.jpg'
import drone from './assets/pexels-pok-rie-33563-724921.jpg'
import { FaContao,  FaRing } from 'react-icons/fa';
import { FaCakeCandles, FaChampagneGlasses, FaCirclePlay } from 'react-icons/fa6';

const Service = () => {
  return (
    <div className='service'>
        
            <h2 className="wedding-divider">
              <span style={{fontSize:"35px"}}>Our Decorations</span>

              </h2>
              <h1 className='service-content'>Creating Unforgettable Experience</h1>
              <div className='images'>
                <aside>
                
             <div className='cards'>
              <img src={loveimage} alt="love" />
              <p><FaRing/>Marriage</p>
              </div>
                <div className='cards'>
              <img src={second} alt="love" />
              <p><FaCakeCandles></FaCakeCandles>Birthdays</p>
              </div>
                <div className='cards'>
              <img src={third} alt="love" />
              <p><FaCirclePlay></FaCirclePlay> Dj Sounds</p>
              </div>
                
                <div className='cards'>
              <img src={drone} alt="love" />
              <p><FaChampagneGlasses/> Drone Shooting</p>
              </div>

             
              </aside>
              <aside>
                <div className='cards'>
              <img src={four} alt="love" />
              <p><FaContao/>Huldhi</p>
              </div>
                <div className='cards'>
              <img src={reception} alt="love" />
              <p><FaCakeCandles></FaCakeCandles>Reception</p>
              </div>
                <div className='cards'>
              <img src={ledwall} alt="love" />
              <p><FaCirclePlay></FaCirclePlay> LED wall</p>
              </div>
                
                <div className='cards'>
              <img src={five} alt="love" />
              <p><FaChampagneGlasses/> Carporate Events</p>
              </div>


              </aside>
              </div>
    </div>
  )
}
export default Service