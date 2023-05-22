import React from 'react'
import { ImAttachment } from 'react-icons/im'
import { IoIosArrowDown } from 'react-icons/io'
import { RiEmotionHappyLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import Posts from '../components/Home/Posts'
import user from './../assets/user.svg'

const Home = () => {
  return (
    <div className='px-10 xsm:px-5 py-5 flex justify-between gap-10'>
      <div className='flex-col gap-5 w-[70%] xsm:w-full'>
        <div className='px-5 py-4 border-[0.1px] border-[#cccccc22] bg-[#4a464665] rounded-[4px]'>
          <div className='flex gap-[10px]'>
            <img src={user} className='w-[33px]' alt="" />
            <input className='w-full rounded-full h-[38px] outline-none px-5 font-[400] text-[14px] leading-[14px] dark:bg-[#6b69692f] dark:text-[#ffffff]' placeholder="What's on your mind?" />
          </div>
          <div className='flex mt-3 justify-between'>
            <div className='flex gap-3 items-center'>
              <svg className='fill-white' width="20" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 3C1.44772 3 1 3.44772 1 4V11C1 11.5523 1.44772 12 2 12H13C13.5523 12 14 11.5523 14 11V4C14 3.44772 13.5523 3 13 3H2ZM0 4C0 2.89543 0.895431 2 2 2H13C14.1046 2 15 2.89543 15 4V11C15 12.1046 14.1046 13 13 13H2C0.895431 13 0 12.1046 0 11V4ZM2 4.25C2 4.11193 2.11193 4 2.25 4H4.75C4.88807 4 5 4.11193 5 4.25V5.75454C5 5.89261 4.88807 6.00454 4.75 6.00454H2.25C2.11193 6.00454 2 5.89261 2 5.75454V4.25ZM12.101 7.58421C12.101 9.02073 10.9365 10.1853 9.49998 10.1853C8.06346 10.1853 6.89893 9.02073 6.89893 7.58421C6.89893 6.14769 8.06346 4.98315 9.49998 4.98315C10.9365 4.98315 12.101 6.14769 12.101 7.58421ZM13.101 7.58421C13.101 9.57302 11.4888 11.1853 9.49998 11.1853C7.51117 11.1853 5.89893 9.57302 5.89893 7.58421C5.89893 5.5954 7.51117 3.98315 9.49998 3.98315C11.4888 3.98315 13.101 5.5954 13.101 7.58421Z"
                />
              </svg>
              <svg width="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" ><rect x="9.16" y="9.16" width="45.69" height="45.69" rx="2.51" /><polyline points="9.16 41.95 20.68 32.19 29.71 40.38 43.27 23.51 54.77 40.38" /><circle cx="19.76" cy="19.38" r="3.93" /></svg>
              <ImAttachment />
              <SlLocationPin className='!text-white w-[21px] h-[18px]' />
              <RiEmotionHappyLine className='!text-white w-[21px] h-[20px]' />
            </div>
            <button className='px-5 py-[1px] flex justify-center items-center rounded-[4px] border-[0.1px] border-[#cccccc22]'>Post</button>
          </div>
        </div>
        <div className='flex flex-col gap-5 pt-[25px]'>
          {
            [1, 2, 3].map(() => {
              return (
                <Posts />
              )
            })
          }
        </div>
      </div>
      <div className='xsm:hidden flex flex-col gap-5 w-[30%]'>
        <div className='border-[0.1px] border-[#cccccc22] rounded-[4px] bg-[#4a464665] px-5 py-4'>
          <div className='flex justify-between items-center mb-5'>
            <h1 className='text-[18px]'>Today Trending</h1>
            <IoIosArrowDown className='text-white' />
          </div>
          <div className='flex flex-col gap-[15px] '>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <div className='flex justify-between'>
                  <div className='flex flex-col justify-center'>
                    <p className='text-[14px]'>Lorem ipsum dolor</p>
                    <p className='text-[11px] text-[#ccc] flex items-center gap-[5px]'>125 posts today</p>
                  </div>
                  <div>
                    <p className='bg-[#cccccc22] text-[10px] rounded-full px-[5px] flex items-center py-[1px]'>66 in 1 hour</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className='text-[14px] text-blue-500 px-5 pt-5  text-center'>View all</p>
        </div>
        <div className='border-[0.1px] border-[#cccccc22] rounded-[4px] bg-[#4a464665] px-5 py-4'>
          <div className='flex justify-between items-center mb-5'>
            <h1 className='text-[18px]'>My Friends</h1>
            <IoIosArrowDown className='text-white' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <div className='flex gap-[10px]'>
                  <img src={user} className='w-[30px]' alt="" />
                  <div className='flex flex-col justify-center'>
                    <p className='text-[14px]'>Lucky Andreas</p>
                    <p className='text-[11px] text-[#ccc] flex items-center gap-[5px]'>Last actively recently</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className='text-[14px] text-blue-500 px-5 pt-5  text-center'>View all</p>
        </div>
      </div>
    </div>
  )
}

export default Home 