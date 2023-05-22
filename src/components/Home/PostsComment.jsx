import React from 'react'
import user from './../../assets/user.svg'

const PostsComment = () => {
  return (
    <div className='px-8 flex gap-2 items-start'>
      <img src={user} className='w-[25px]' alt="" />
      <div className='mt-[-3px]'>
        <h1 className='text-[12px] w-full text-[rgba(255,255,255,0.75)]'><span className='text-[14px] font-[700] text-white'>Lorem Ipsum:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, fugit! Impedit quas possimus exercitationem non quia dicta assumenda libero quis.</h1>
      </div>
    </div>
  )
}

export default PostsComment