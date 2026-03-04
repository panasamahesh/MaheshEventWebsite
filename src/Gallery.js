import React from 'react'
import image1 from "./assets/amish-thakkar-BEdxXAiRfRM-unsplash.jpg"
import image2 from "./assets/zaraq-iqbal-taCoSDNQbX8-unsplash.jpg"
import image3 from './assets/aleksandr-popov-tnfmwaj-nuo-unsplash.jpg'
import image4 from  './assets/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg'
import image5 from "./assets/Urvashi & Manav’s Wedding Pictures Are So Surreal….jpg"
import image6 from "./assets/zaraq-iqbal-4CfXuKfeIGY-unsplash.jpg"
import image7 from './assets/pexels-pixabay-158826.jpg'
import image8 from './assets/pexels-pok-rie-33563-724921.jpg'
import image9 from  './assets/aneta-pawlik-d8s13D29QiE-unsplash.jpg'
import image10 from "./assets/nathan-dumlao-As8zq82LBpw-unsplash.jpg"
import image11 from "./assets/aleksandr-popov-9vDdkxSCAD4-unsplash.jpg"
import image12 from './assets/faded_gallery-JEludq8wsD8-unsplash.jpg'
import image13 from './assets/lee-blanchflower-1dW1vEJLlCQ-unsplash.jpg'
import image14 from './assets/pexels-fonok-403495.jpg'



import "./Gallery.css";

const Gallery = () => {

    const images=[image1,image2,image3,image13,image4,image5,image6,image7,image8,image9,image14,image10,image11,image12 ]
  return (
    
    <div className='headed' >
        
         <section className='gallerycontent'>
            <aside>Event Gallery</aside>
            <aside>Our Captured Moment's</aside>
         </section>

         <div className='gallery-scroll'>
            {images.map((item,index)=>(
                <img key={index} className='items' src={item} alt="images" />
            ))}

         </div>

    </div>
  )
}

export default Gallery


// import React, { useState } from 'react'
// import "./Gallery.css";

// const Gallery = () => {

//   const [images, setImages] = useState([]);

//   const handleUpload = (event) => {
//     const files = Array.from(event.target.files);

//     const imageURLs = files.map(file => URL.createObjectURL(file));

//     setImages(prev => [...prev, ...imageURLs]);
//   };

//   return (
//     <div className='headed'>

//       <section className='gallerycontent'>
//         <aside>Event Gallery</aside>
//         <aside>Our Captured Moment's</aside>
//       </section>

//       {/* Upload Button */}
//       <input 
//         type="file"
//         multiple
//         accept="image/*"
//         onChange={handleUpload}
//       />

//       {/* Horizontal Scroll Gallery */}
//       <div className='gallery-scroll'>
//         {images.map((item, index) => (
//           <img key={index} className='items' src={item} alt={`upload-${index}`} />
//         ))}
//       </div>

//     </div>
//   )
// }

// export default Gallery