import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards from './Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='hedd'><h1>Top 5 on Hotstar</h1></div>
  <div className='bigcont'>
  <Cards 
    imgsrc='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4295/754295-v'
    namesr='Avatar'
    descrsr='A Disney-Hotstar Original Series'
    linksr='https://www.hotstar.com/in/movies/avatar/1770000948'
  />
  <Cards 
    imgsrc='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v'
    namesr='Drishyam'
    descrsr='A Disney-Hotstar Original Series'
    linksr='https://www.hotstar.com/in/movies/drishyam/1000074189'
  />
  <Cards 
    imgsrc='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4954/894954-v'
    namesr='The Good Wife'
    descrsr='A Disney-Hotstar Original Series'
    linksr='https://www.hotstar.com/in/movies/the-good-wife/1835045497'
  />
  <Cards 
    imgsrc='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5541/675541-v'
    namesr='The Jungle Book'
    descrsr='A Disney-Hotstar Original Series'
    linksr='https://www.hotstar.com/in/movies/the-jungle-book/1260018310'
  />
  <Cards 
    imgsrc='https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/old_images/vertical/MOVIE/7441/1000087441/1000087441-v'
    namesr='Masaan'
    descrsr='A Disney-Hotstar Original Series'
    linksr='https://www.hotstar.com/in/movies/masaan/1000087441'
  />
  </div>
  </>
);

