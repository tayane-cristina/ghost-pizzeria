import React from 'react';
import TopFive from '../../topFive/TopFive';
import './Home.css'
import PreviewEvents from '../../previewEvents/PreviewEvents';
import Local from '../../local/Local';
import ShowImagePrev from '../../navbar/showImagePrev/ShowImagePrev';


const Home = () => {
  return (
    <div className='principal-div-home'>
      <ShowImagePrev />
      <TopFive />
      <PreviewEvents />
      <Local />
    </div>
  );
};

export default Home;