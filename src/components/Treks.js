import React, { useState } from 'react';
import Trek from './Trek';
import './Treks.css';

const Treks = (props) => {

  const treksData = props.treksData;
  const category = props.category;
  const [wishlist, setwishlist] = useState([]);


  function getTreksData() {
    
    if(category === "All"){
      let allTreks = [];
      Object.values(treksData).forEach(array => {
        array.forEach(trekData => {
          allTreks.push(trekData);
        });
      });
      return allTreks;
    }

    else{
      return treksData[category];
    }
    

  }

  const allTreksData = getTreksData();

  return (
    <div className='treks'>
      {
        allTreksData.map((trek, index) => (
        <Trek key={index} {...trek} wishlist={wishlist} setwishlist={setwishlist} />
      ))
      }
    </div>
  );
};

export default Treks;
