import React from 'react';
import './Filter.css'

const Filter = (props) => {

  const fData = props.fData;
  let setcategory = props.setcategory;

  function filterHandler(title) {
    setcategory(title);
  }

  return (
    <div className='filter'>
      {
        fData.map((data, index) => (
          <div className='button-box' key={index}>
            <button key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>
          </div>
        ))
      }
    </div>
  );
}

export default Filter;

