import React from 'react'
import { BiCommentDetail } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { CiClock2 } from 'react-icons/ci'
import { FiThumbsUp } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { SlOptionsVertical, SlShareAlt } from 'react-icons/sl'
import user from './../../assets/user.svg'
import PostsComment from './PostsComment'

const Posts = () => {
  return (
    <div className='flex gap-[10px] flex-col py-4 border-[0.1px] border-[#cccccc22] bg-[#4a464665] rounded-[4px]'>
      <div className='flex justify-between px-5'>
        <div className='flex gap-[10px]'>
          <img src={user} className='w-[35px]' alt="" />
          <div className='flex flex-col justify-center'>
            <p className='text-custom-18'>Lucky Andreas</p>
            <p className='text-custom-10 text-[#ccc] flex items-center gap-[5px]'><CiClock2 className='text-[12px]' />12 minutes ago</p>
          </div>
        </div>
        <div className='flex items-center gap-[10px]'>
          <BsBookmark />
          <SlOptionsVertical /></div>
      </div>
      <p className='px-5 pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid unde autem, aliquam perferendis ducimus dolor repellat ab id cum tempore.</p>
      <img src="https://plus.unsplash.com/premium_photo-1668487826818-d7092d28b617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className='max-h-[500px]' alt="" />
      <div className='grid grid-cols-3 py-1'>
        <div className='flex justify-center items-center gap-[5px]'>
          <FiThumbsUp />
          Like
        </div>
        <div className='flex justify-center items-center gap-[5px]'>
          <BiCommentDetail className='mt-[3px]' />
          <p>Comment</p>
        </div>
        <div className='flex justify-center items-center gap-[8px]'>
          <SlShareAlt />
          Share
        </div>
      </div>
      <div className='py-[0.1px] bg-[#cccccc2b] w-full'></div>
      <div className='flex gap-[10px]  mt-2 px-5'>
        <img src={user} className='w-[33px]' alt="" />
        <input className='w-full rounded-full h-[38px] outline-none px-5 font-[400] text-[14px] leading-[14px] dark:bg-[#6b69692f] dark:text-[#ffffff]' placeholder="What's on your mind?" />
      </div>
      <div className='px-5 py-2'>
        <p className='text-[13px] flex items-center gap-1'>All comments <IoIosArrowDown className='text-white' /></p>
      </div>
      <div className='flex gap-4 mb-2 flex-col'>
        {[1, 2].map(() => {
          return (
            <PostsComment />
          )
        })}
      </div>
      <div className='py-[0.1px] mx-5 bg-[#cccccc2b] '></div>
      <p className='text-[14px] text-blue-500 px-5 py-2 text-center'>View all comments</p>
    </div>
  )
}

export default Posts