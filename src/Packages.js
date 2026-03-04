import React, { useState } from 'react'
import './Packages.css'

import image1 from "./assets/amish-thakkar-BEdxXAiRfRM-unsplash.jpg"
import image2 from "./assets/zaraq-iqbal-taCoSDNQbX8-unsplash.jpg"
import image3 from './assets/aleksandr-popov-tnfmwaj-nuo-unsplash.jpg'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import image4 from  './assets/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg'
import image5 from "./assets/Urvashi & Manav’s Wedding Pictures Are So Surreal….jpg"

import image6 from './assets/pexels-pixabay-158826.jpg'

import { useLocation } from 'react-router-dom'
  const Categories=["All","wedding","corporate Event","Concerts","WE","Decor Setups",];
  const plans=[
        {id:1,
         price:70000,
         image:image1,
         features:[
        "stage Decorations",
        "Guest Arragements",
        "Floral Setup",
        "photo Booth"
      ]
    },
    {
      id:2,
      price:20000,
      image:image2,
      features:[
         "prabhakar will assign",
      "led light effective",
      "Sound System",
      "Grand Welcome"],
    },
    {
      id:3,
      price:12000,
      image:image3,
      features:[
         "Premium prewedding ",
      "Huldi monitoring",
      "Sound System",
      "Full Decoration"],
    },
    {
      id:4,
      price:25000,
      image:image4,
      features:[
         "Luxury Seating",
      "Premium Lighting",
      "Sound System",
      "Full Decoration"],
    },
    {
      id:5,
      price:5000,
      image:image5,
      features:[
         "Luxury Seating",
      "Premium Lighting",
      "Sound System",
      "Full Decoration"],
    },
    {
    id: 6,
    price: 4500,
    image: image6,
    features: [
      "Premium Stage",
      "Advanced Lighting",
      "Drone Coverage",
      "LED Screen Setup"
    ],
  }
  ]
const Packages = () => {

  //  const [activetab,setactivetab]=useState("All");
      //  const location=useLocation();
  return (
    <div className='packagesheader'>
       
         <div className='packageheader2'>
            <h1>Our Packages</h1>
            <p>Affortable Event Packages</p>
         </div>
         <div className='tabs'>
              <div>
                {Categories.map((cat)=>(
                  <button key={cat} className='packagecards'>{cat}</button>
                ))}
              </div>
         </div>
         <div className="packages">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="packagesqueate"
          >
          
            <div className="card-image">
              <img src={plan.image} alt="event" />
            </div>

            <div className="card-content">
              
              <h2><FaIndianRupeeSign></FaIndianRupeeSign>{plan.price}</h2>

              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      
    
    )
}

export default Packages