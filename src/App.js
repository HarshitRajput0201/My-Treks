import Filter from './components/Filter';
import Treks from './components/Treks';
import data from './data';
import filterData from './Filter-data';
import { useState } from 'react';
import './App.css';

function App() {

  const alldata = data;
  const [category, setcategory] = useState(filterData[0].title);

  return (
    <div className='main-container'>
      <div className='header'> 
        <h1 className='heading'>Treks of Maharastra</h1>
        <div className='filter-box'>
          <Filter fData={filterData} category={category} setcategory={setcategory}/>
        </div>
      </div>
      <div className='content'>
        <div className='treks-box'><Treks treksData={alldata} category={category}/></div>
      </div>
    </div>
  );
}

export default App;

