import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';
import './Trek.css';

const Trek = (props) => {

  let wishlist = props.wishlist;
  let setwishlist = props.setwishlist;

  function clickHandler() {

    if(wishlist.includes(props.id)){
      setwishlist((prev) => prev.filter((cid) => cid !== props.id));
      toast.warning("Item Removed");
    }

    else{
      if(wishlist.length === 0){
        setwishlist([props.id]);
      }

      else{
        setwishlist((prev) => [...prev, props.id]);
      }
      
      toast.success("Item Added");

    }
    
  }

  return (
    <div className='trek'>
        <img src={props.image} alt=''></img> 
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h4>{props.time}</h4>
        <div className='button'>
          <button onClick={clickHandler}>
            {
              wishlist.includes(props.id) ? (<FaCheck style={{color:'white'}} />) : (<FaPlus style={{color:'white'}}/>)
            }
          </button>
        </div>
        
    </div>
  )
}

export default Trek;