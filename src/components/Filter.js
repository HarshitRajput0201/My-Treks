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
        fData.map((data) => (
          <div className='button-box'>
            <button key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>
          </div>
        ))
      }
    </div>
  );
}

export default Filter;

