import React from 'react';
import ShimmerItem from './ShimmerItem';


function ShimmerAccordion() {
  return (
    <>
    <div className='flex flex-wrap w-10/12 md:w-8/12 mx-auto justify-center md:justify-between shadow-lg rounded-3xl p-8'>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
        <ShimmerItem/>
    </div>
    </>
  )
}

export default ShimmerAccordion;
