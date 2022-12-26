import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards from './Cards';
import Sdata from './Sdata';

function ncards(val){
  return(
    <Cards 
    imgsrc={val.imgsrc}
    namesr={val.namesr}
    descrsr={val.descrsr}
    linksr={val.linksr}
  />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='hedd'><h1>Top 5 on Disney+Hotstar</h1></div>
  <div className='bigcont'>
    {Sdata.map(ncards)}
  </div>
  </>
);
