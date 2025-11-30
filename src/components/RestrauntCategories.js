import React, { useState } from 'react'
import CategoriesItemList from './CategoriesItemList';

const RestrauntCategories = (props) => {
    const {data, showItems, setShowIndex} = props;
    const [show,setShow] = useState(false);

    const handle_Hide_Show = () => {
      setShow(!show);
      
    }


    return (

    <div>

      <div className='sm:w-8/12 p-2 m-auto'>
        <div className='flex justify-between cursor-pointer items-center p-4 rounded-md m-2' onClick={handle_Hide_Show}>
        <span className='font-bold text-lg'>{data.title}  ({data.itemCards.length})</span>
        <span>{show ?"⬆":"⬇"}</span>
        </div>
        

      <div className='flex flex-col'> 
      { show && <CategoriesItemList items={data.itemCards}/>}
      </div>
       
      </div>

      <hr className='w-8/12 m-auto h-1 border-none bg-gray-200'/>
   
    </div>
  )
}

export default RestrauntCategories
