import React from 'react';
import { LOGO_URL2 } from '../utils/constant';

const Footer = () => {
    const date=new Date().getFullYear();
    return (
      <div className='bg-zinc-900 shadow-inner text-xs sm:text-base w-auto mt-20'>
          <div className='w-10/12 mx-auto h-auto bg-zinc-900 flex-wrap items-center flex justify-around py-10'>
          <div className=' w-[40%] md:w-[20%] p-1'>
              <div className='flex justify-start text-white'>
                  <img src={LOGO_URL2} className=' h-10 sm:h-14'/>
                  <span className='font-semibold text-center p-2 pt-4'> Tiffin</span>
              </div>
             
          </div>
          <div className='w-[50%] md:w-[20%] p-2 text-white'>
              <ul className='m-1 p-1'>
                  <li className='font-semibold m-2 '>
                      Company
                  </li>
                  <li className='m-2'>
                      About Us
                  </li>
                  <li className='m-2'>
                      Grocery
                  </li>
                  <li className='m-2'>
                      Career
                  </li>
              </ul>
          </div>
          <div className='w-[50%] md:w-[20%] p-2 text-white'>
              <ul className='m-1 p-1'>
                  <li className='font-semibold m-2'>
                      Legal
                  </li>
                  <li className='m-2'>
                      Terms & Conditions
                  </li>
                  <li className='m-2'>
                      Privacy Policy
                  </li>
                  <li className='m-2'>
                      Cookie Policy
                  </li>
              </ul>
          </div>
          <div className='w-[50%] md:w-[20%] p-2 text-white'>
              <ul className='m-1 p-1'>
                  <li className='font-semibold m-2'>
                      Contact Us
                  </li>
                  <li className='m-2'>
                      Ibran,Giridih-815301
                  </li>
                  <li className='m-2'>
                    95088*****
                  </li>
                  <li className='m-2 break-words'>
                    ibrangrd@gmail.com
                  </li>
              </ul>
          </div>
      </div>
      
      <div className="bg-zinc-800 flex justify-around">
          <p className=" text-center text-white">Copyright @{date}. Foodie's Spot Incl.All rights reserved</p>     
      </div>
      
      </div>
        )
  }
  
  export default Footer