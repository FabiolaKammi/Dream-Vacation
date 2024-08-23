import React from 'react';
import img1 from '../utils/Images/santa Ana.jpg';
import Osaka from '../utils/Images/oscar-city.jpg';
import Florida from "../utils/Images/floridabeach.jpg"
import croatia from "../utils/Images/croaty.jpg";
import zanzibar from "../utils/Images/zanzibar.jpg"


const Infos = () => {
    const vacation =[
        {country: "Japan",
         city:"Osaka",
         info: `Osaka City Museum is a former museum dedicated to the history of Ōsaka, Japan. 
         The castle’s design and construction techniques are fascinating,
          showcasing the grandeur of the Azuchi-Momoyama period. Inside the castle, 
          there’s a museum with exhibits on the history of the castle and the life of Toyotomi Hideyoshi.
          The surrounding park is beautiful, 
          especially during cherry blossom season and autumn when the leaves change color.`,
         image: Osaka
        },
        {country: "United States of America",
            city:"Florida",
            info: `Florida is a state in the Southeastern region of the United States.
            About two-thirds of Florida occupies a peninsula between the Gulf of Mexico and the Atlantic Ocean.
             It has the longest coastline in the contiguous United States, 
             spanning approximately 1,350 miles (2,170 km), not including its many barrier islands. 
             It is the only state that borders both the Gulf of Mexico and the Atlantic Ocean.
              With a population of over 21 million, it is the third-most populous state in the United States. 
              It is the state's largest metropolitan area, with a population of 6.138 million;
               the most populous city is Jacksonville. Florida's other major population centers include Tampa Bay, 
            Orlando, Cape Coral, and the state capital of Tallahassee. `,
            image: Florida
           },
           {country: "Croatia",
            city:"Dubrovnik",
            info: `Croatia is a stunning European destination that offers a blend of history, 
            culture, and natural beauty. You can explore the ancient walled city of Dubrovnik,
             marvel at the Roman ruins of Diocletian's Palace in Split, 
             or relax on the pebbly beaches of the Dalmatian coast. 
             For a more adventurous experience, 
             you can hike through the lush forests and turquoise lakes of Plitvice National Park, 
             or sail among the hundreds of islands that dot the Adriatic Sea. 
             Whether you are looking for a romantic getaway, 
            a family-friendly holiday, or a cultural immersion, Croatia has something for everyone.`,
            image: croatia
           },
           {country: "TanZania",
            city:"Zanzibar",
            info: `This East African island packs a lot of punch for things to do and experience. 
            It’s safe to say that excitement and relaxation can be had on every 
            corner of the island as there are so many wonderful places to visit in Zanzibar. 
            At the same time, you can still easily relax on a beautiful beach and dive into the warm, clear water.
            `,
            image: zanzibar
           },
           {country: "El Savaldor",
            city: "Santa Ana",
            info:`Santa Ana, El Salvador, is a great vacation spot,
            This stunning Gothic-style cathedral is a 
            must-see, with its impressive architecture and historical significance1.
             Hike up this active volcano for breathtaking views and a sense of adventure
             Santa Ana is conveniently located near other popular destinations like 
             the Ruta de las Flores and the Guatemalan border, 
             making it a great base for exploring the region`,
            image:img1
           }    
    ]
  return (
    <div className='vacation-form'>
 {vacation.map((item, id)=>(
    <div className='site' key={id}>

      <section className='right-section'>
       <img src={item.image}alt='example'style={{height:390, width:450}} />
      </section>

      <section className='left-section'>
    <h2>{item.country}</h2>
    <h4>{item.city}</h4>
    <p>{item.info}</p>
    </section>
    </div>
 ))
 }
      
    </div>
  )
}

export default Infos;
