import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { SlOptionsVertical } from 'react-icons/sl'
import { NavLink, Outlet } from 'react-router-dom'
import user from './../assets/user.svg'

const DashboardLayout = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  const [showOptions, setShowOptions] = useState(false)


  return (
    <div className='flex relative '>
      <aside className={`h-full w-[250px] flex justify-center z-[1000] min-h-[100vh] max-h-[100vh] min-w-[236px]  ${showNavbar ? 'fixed xsm:block sm:block md:block' : 'xsm:hidden  sm:hidden md:hidden'} `}>
        <div className='h-full dark:bg-[#232323] border-[0.1px] border-[#cccccc22] fixed pt-[31px] top-0 flex flex-col items-center  min-h-[100vh] max-h-[100vh] px-[15px] w-[250px] bg-primary overflow-y-auto navbar dark:text-white'>
          <div className='flex flex-col gap-[30px] w-full'>
            <div className='flex justify-between items-center'>
              <h1 className='text-[24px] text-blue-500 font-[800] '>MHS</h1>
              <ImCross onClick={() => setShowNavbar(false)} className='xsm:block md:block sm:block  hidden text-red-500' />
            </div>
            <div className='relative '>
              <BsSearch className='w-[13.77px] h-[18px] absolute top-[50%] translate-y-[-50%] left-[14.77px] text-[#000000] dark:text-[#ffffff]' />
              <input className='w-full outline-none border-[0.1px] border-[#cccccc22] rounded-[4px] h-[38px] indent-[42.15px] font-[400] text-[14px] leading-[14px] dark:bg-[#313030c7] dark:text-[#ffffff]' placeholder='Explore ...' />
            </div>
          </div>
          <div className='flex flex-col gap-[30px] w-full divide-y-[1px] divide-[#cccccc3c] mt-[30px] mb-[3.59375vw]'>
            <div className='flex flex-col gap-[0.8109375vw]'>
              <NavLink to="/" className={({ isActive }) => { return isActive ? "flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] rounded-[4px] bg-[#313030c7] text-blue-500 font-[700]" : "flex gap-[0.662109375vw] h-[42.43px] transition-all duration-350 items-center px-[1vw] hover:bg-[#313030c7] hover:text-primary rounded-[4px] text-white" }}>
                <svg className='fill-current w-[23px]' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.957 19.5729H12.582C12.1237 19.5729 11.7487 19.1979 11.7487 18.7396V14.7812C11.7487 13.7812 10.957 12.9896 9.95703 12.9896C8.95703 12.9896 8.16537 13.7812 8.16537 14.7812V18.7396C8.16537 19.1979 7.79037 19.5729 7.33203 19.5729H1.04036C0.582031 19.5729 0.207031 19.1979 0.207031 18.7396V8.07292C0.207031 7.32292 0.582031 6.61458 1.16536 6.19792L9.54037 0.15625C9.83203 -0.0520833 10.207 -0.0520833 10.4987 0.15625L18.8737 6.19792C19.457 6.61458 19.832 7.32292 19.832 8.07292V18.7812C19.7904 19.1979 19.4154 19.5729 18.957 19.5729ZM13.4154 17.9479H18.1654V8.07292C18.1654 7.86458 18.0404 7.65625 17.8737 7.53125L9.9987 1.82292L2.1237 7.48958C1.95703 7.61458 1.83203 7.82292 1.83203 8.03125V17.9062H6.58203V14.7812C6.58203 12.9062 8.1237 11.3646 9.9987 11.3646C11.8737 11.3646 13.4154 12.9062 13.4154 14.7812V17.9479Z" />
                </svg>
                <p className='text-[14px] fill-inherit pt-[2px]'>Home</p>
              </NavLink>
              <NavLink to="/community" className={({ isActive }) => { return isActive ? "flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] rounded-[4px] bg-[#313030c7] text-blue-500 font-[700]" : "text-white flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] hover:bg-[#313030c7] hover:text-primary rounded-[4px]" }}>
                <svg className='fill-current w-[23px]' width="26" height="22" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.986 11.291H19.4645C19.1213 11.291 18.789 11.3379 18.4728 11.4242C17.8491 10.198 16.5756 9.35547 15.1082 9.35547H10.6511C9.18369 9.35547 7.91021 10.198 7.28646 11.4242C6.97025 11.3379 6.638 11.291 6.29482 11.291H3.77333C1.69272 11.291 0 12.9838 0 15.0644V19.0952C0 20.3436 1.01563 21.3592 2.264 21.3592H23.4953C24.7437 21.3592 25.7593 20.3436 25.7593 19.0952V15.0644C25.7593 12.9838 24.0666 11.291 21.986 11.291ZM6.87778 13.1289V19.8499H2.264C1.84788 19.8499 1.50933 19.5114 1.50933 19.0952V15.0644C1.50933 13.8161 2.52496 12.8004 3.77333 12.8004H6.29482C6.49969 12.8004 6.69807 12.8282 6.88694 12.8795C6.8815 12.9621 6.87778 13.0451 6.87778 13.1289ZM17.3722 19.8499H8.38711V13.1289C8.38711 11.8805 9.40274 10.8649 10.6511 10.8649H15.1082C16.3565 10.8649 17.3722 11.8805 17.3722 13.1289V19.8499ZM24.25 19.0952C24.25 19.5114 23.9114 19.8499 23.4953 19.8499H18.8815V13.1289C18.8815 13.045 18.8778 12.962 18.8723 12.8795C19.0612 12.8282 19.2596 12.8004 19.4645 12.8004H21.986C23.2343 12.8004 24.25 13.816 24.25 15.0644V19.0952Z" />
                  <path d="M5.03467 4.16406C3.18579 4.16406 1.68164 5.66821 1.68164 7.5171C1.68159 9.36598 3.18579 10.8701 5.03467 10.8701C6.88351 10.8701 8.38771 9.36598 8.38771 7.5171C8.38771 5.66821 6.88356 4.16406 5.03467 4.16406ZM5.03462 9.3608C4.01799 9.3608 3.19092 8.53373 3.19092 7.5171C3.19092 6.50046 4.01799 5.6734 5.03462 5.6734C6.05126 5.6734 6.87832 6.50046 6.87832 7.5171C6.87832 8.53373 6.05126 9.3608 5.03462 9.3608Z" />
                  <path d="M12.88 0C10.4099 0 8.40039 2.00953 8.40039 4.4796C8.40039 6.94967 10.4099 8.9592 12.88 8.9592C15.3501 8.9592 17.3596 6.94967 17.3596 4.4796C17.3596 2.00958 15.3501 0 12.88 0ZM12.88 7.44987C11.2422 7.44987 9.90972 6.11743 9.90972 4.4796C9.90972 2.84182 11.2422 1.50933 12.88 1.50933C14.5178 1.50933 15.8503 2.84177 15.8503 4.4796C15.8503 6.11743 14.5178 7.44987 12.88 7.44987Z" />
                  <path d="M20.7222 4.16406C18.8733 4.16406 17.3691 5.66821 17.3691 7.5171C17.3692 9.36598 18.8733 10.8701 20.7222 10.8701C22.5711 10.8701 24.0752 9.36598 24.0752 7.5171C24.0752 5.66821 22.5711 4.16406 20.7222 4.16406ZM20.7222 9.3608C19.7056 9.3608 18.8785 8.53373 18.8785 7.5171C18.8785 6.50046 19.7056 5.6734 20.7222 5.6734C21.7388 5.6734 22.5659 6.50046 22.5659 7.5171C22.5659 8.53373 21.7388 9.3608 20.7222 9.3608Z" />
                </svg>
                <p className='text-[14px] text-inherit pt-[2px]'>Community</p>
              </NavLink>
              <NavLink to="/marketplace" className={({ isActive }) => { return isActive ? "flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] rounded-[4px] bg-[#313030c7] text-blue-500 font-[700]" : "text-white flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] hover:bg-[#313030c7] hover:text-primary rounded-[4px]" }}>
                <svg className='fill-current min-w-[23px]' width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.4 9.45786C0.5558 8.88143 0 7.89929 0 6.78571C0 6.48929 0.7238 3.39714 1.1459 1.66571C1.3636 0.692857 2.212 0.00214287 3.1899 0.00214287C6.2293 1.49677e-08 14.77 0 17.8094 0C18.7894 0 19.6385 0.691428 19.8569 1.665C20.2762 3.39714 21 6.48929 21 6.78571C21 7.89929 20.4442 8.88143 19.6 9.45786V10.7229C19.6 11.1129 19.2906 11.4286 18.9084 11.4286C18.7208 11.4286 18.5402 11.3521 18.4072 11.2171C18.2749 11.0814 18.2 10.8979 18.2 10.7064V9.98C18.0852 9.99357 17.9683 10 17.85 10C16.6509 10 15.8788 9.35929 15.4 8.64214C14.9212 9.35929 14.1491 10 12.95 10C11.7502 10 10.9781 9.35857 10.4986 8.64071C10.0191 9.35857 9.247 10 8.05 10C6.8502 10 6.0781 9.35857 5.5986 8.64071C5.1191 9.35857 4.347 10 3.15 10C3.0317 10 2.9148 9.99357 2.8 9.98V17.8571C2.8 18.0464 2.8735 18.2286 3.0051 18.3621C3.136 18.4964 3.3145 18.5714 3.5 18.5714H7.7V15.7143C7.7 14.9257 8.3272 14.2857 9.1 14.2857H9.8084C9.9918 14.2857 10.1675 14.36 10.2977 14.4921C10.4272 14.625 10.5 14.8043 10.5 14.9914C10.5 15.1829 10.4251 15.3671 10.2928 15.5029C10.1598 15.6379 9.9799 15.7143 9.7923 15.7143C9.4451 15.7143 9.1 15.7143 9.1 15.7143V18.5714H11.9C12.7932 18.5714 12.8016 20 11.9 20H3.5C2.9428 20 2.4087 19.7743 2.0153 19.3721C1.6212 18.9707 1.4 18.4257 1.4 17.8571V9.45786ZM17.2319 17.8793L19.1051 19.7907C19.3781 20.0693 19.8219 20.0693 20.0949 19.7907C20.3679 19.5121 20.3679 19.0593 20.0949 18.7807L18.2217 16.8693C18.6494 16.2364 18.9 15.4693 18.9 14.6429C18.9 12.4743 17.1752 10.7143 15.05 10.7143C12.9248 10.7143 11.2 12.4743 11.2 14.6429C11.2 16.8114 12.9248 18.5714 15.05 18.5714C15.8599 18.5714 16.6117 18.3157 17.2319 17.8793ZM15.05 12.1429C16.4024 12.1429 17.5 13.2629 17.5 14.6429C17.5 16.0229 16.4024 17.1429 15.05 17.1429C13.6976 17.1429 12.6 16.0229 12.6 14.6429C12.6 13.2629 13.6976 12.1429 15.05 12.1429ZM16.0909 6.68214C16.0356 6.33643 15.743 6.08286 15.4 6.08286C15.057 6.08286 14.7644 6.33643 14.7091 6.68214C14.7091 6.68214 14.6265 7.18071 14.3402 7.68143C14.0903 8.11786 13.6703 8.57143 12.95 8.57143C12.2297 8.57143 11.8097 8.11786 11.5598 7.68143C11.2735 7.18071 11.1909 6.68214 11.1909 6.68214C11.1356 6.33643 10.8437 6.08286 10.5007 6.08286C10.1577 6.08214 9.8651 6.335 9.8091 6.68071C9.8091 6.68071 9.7251 7.18 9.4381 7.68071C9.1882 8.11714 8.7682 8.57143 8.05 8.57143C7.3297 8.57143 6.9097 8.11786 6.6598 7.68143C6.3735 7.18071 6.2909 6.68214 6.2909 6.68214C6.2356 6.33643 5.9437 6.08286 5.6007 6.08286C5.2577 6.08214 4.9651 6.335 4.9091 6.68071C4.9091 6.68071 4.8251 7.18 4.5381 7.68071C4.2882 8.11714 3.8682 8.57143 3.15 8.57143C2.184 8.57143 1.4 7.77143 1.4 6.78571C1.4 6.50857 2.1119 3.62071 2.506 2.00429C2.5067 1.99857 2.5081 1.99286 2.5095 1.98786C2.5809 1.66214 2.8637 1.43071 3.1906 1.43071C6.2293 1.42857 14.7707 1.42857 17.8094 1.42857C18.137 1.42857 18.4212 1.66071 18.4926 1.98714C18.494 1.99214 18.4947 1.99714 18.4961 2.00286C18.8881 3.62 19.6 6.50786 19.6 6.78571C19.6 7.77143 18.816 8.57143 17.85 8.57143C17.1297 8.57143 16.7097 8.11786 16.4598 7.68143C16.1735 7.18071 16.0909 6.68214 16.0909 6.68214Z" />
                </svg>
                <p className='text-[14px] text-inherit pt-[2px]'>Marketplace</p>
              </NavLink>
              <NavLink to="/profile" className={({ isActive }) => { return isActive ? "flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] rounded-[4px] bg-[#313030c7] text-blue-500 font-[700]" : "text-white flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] hover:bg-[#313030c7] hover:text-primary rounded-[4px]" }}>
                <svg className='fill-current w-[23px]' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" />
                </svg>
                <p className='text-[14px] text-inherit pt-[2px]'>Events</p>
              </NavLink>
              <NavLink to="/company" className={({ isActive }) => { return isActive ? "flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] rounded-[4px] bg-[#313030c7] text-blue-500 font-[700]" : "text-white flex gap-[0.662109375vw] h-[42.43px] transition duration-350 items-center px-[1vw] hover:bg-[#313030c7] hover:text-primary rounded-[4px]" }}>
                <svg className='fill-current w-[23px]' width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 19.2004C0 18.7586 0.358176 18.4004 0.799999 18.4004H23.2C23.6418 18.4004 24 18.7586 24 19.2004C24 19.6422 23.6418 20.0004 23.2 20.0004H0.799999C0.358176 20.0004 0 19.6422 0 19.2004Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.06824 0.468632C2.3683 0.168568 2.77526 0 3.19961 0H12.7996C13.2239 0 13.6309 0.168568 13.931 0.468632C14.231 0.768687 14.3996 1.17566 14.3996 1.6V19.2C14.3996 19.6418 14.0414 20 13.5996 20C13.1578 20 12.7996 19.6418 12.7996 19.2V1.6H3.19961V19.2C3.19961 19.6418 2.84143 20 2.39961 20C1.95779 20 1.59961 19.6418 1.59961 19.2V1.6C1.59961 1.17566 1.76818 0.768687 2.06824 0.468632Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8008 7.20039C12.8008 6.75855 13.1589 6.40039 13.6008 6.40039H20.8008C21.2251 6.40039 21.6321 6.56895 21.9321 6.86903C22.2322 7.16911 22.4008 7.57607 22.4008 8.00039V19.2004C22.4008 19.6422 22.0426 20.0004 21.6008 20.0004C21.1589 20.0004 20.8008 19.6422 20.8008 19.2004V8.00039H13.6008C13.1589 8.00039 12.8008 7.64223 12.8008 7.20039Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.80078 4.8C4.80078 4.35818 5.15896 4 5.60078 4H8.80078C9.24262 4 9.60078 4.35818 9.60078 4.8C9.60078 5.24182 9.24262 5.6 8.80078 5.6H5.60078C5.15896 5.6 4.80078 5.24182 4.80078 4.8Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.39844 11.2004C6.39844 10.7586 6.75661 10.4004 7.19844 10.4004H10.3984C10.8403 10.4004 11.1984 10.7586 11.1984 11.2004C11.1984 11.6422 10.8403 12.0004 10.3984 12.0004H7.19844C6.75661 12.0004 6.39844 11.6422 6.39844 11.2004Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.80078 15.2004C4.80078 14.7586 5.15896 14.4004 5.60078 14.4004H8.80078C9.24262 14.4004 9.60078 14.7586 9.60078 15.2004C9.60078 15.6422 9.24262 16.0004 8.80078 16.0004H5.60078C5.15896 16.0004 4.80078 15.6422 4.80078 15.2004Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 15.2004C16 14.7586 16.3582 14.4004 16.8 14.4004H18.4C18.8418 14.4004 19.2 14.7586 19.2 15.2004C19.2 15.6422 18.8418 16.0004 18.4 16.0004H16.8C16.3582 16.0004 16 15.6422 16 15.2004Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 11.2004C16 10.7586 16.3582 10.4004 16.8 10.4004H18.4C18.8418 10.4004 19.2 10.7586 19.2 11.2004C19.2 11.6422 18.8418 12.0004 18.4 12.0004H16.8C16.3582 12.0004 16 11.6422 16 11.2004Z" />
                </svg>
                <p className='text-[14px] text-inherit pt-[2px]'>News Feed</p>
              </NavLink>
            </div>
            <div className='pt-[15px]'>
              <div className='flex justify-between'>
                <h1 className='flex flex-col gap-[10px] text-custom-17'>My community</h1>
                <p className='bg-[#cccccc22] text-[10px] rounded-full px-[5px] flex items-center py-[1px]'>21</p>
              </div>
              <div className='flex flex-col gap-[15px] pt-[15px]'>
                {
                  [1, 2, 3].map(() => {
                    return (
                      <div className='ml-[7%] flex gap-[10px]'>
                        <img src={user} className='w-[30px]' alt="" />
                        <div className='flex flex-col justify-center'>
                          <p className='text-custom-12'>Lorem ipsum</p>
                          <p className='text-custom-10 text-[#ccc]'>732 Members</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='pt-[15px]'>
              <div className='flex justify-between'>
                <h1 className='flex flex-col gap-[10px] text-custom-17'>Upcoming Events</h1>
              </div>
              <div className='flex flex-col gap-[15px] pt-[15px]'>
                {
                  [1, 2, 3].map(() => {
                    return (
                      <div className='ml-[7%] flex gap-[10px]'>

                        <div className='h-[40px] w-[40px] rounded-[4px] bg-[#313030c7] text-[10px] flex flex-col gap-[1px] items-center justify-center text-center'><span className='text-[12px] font-[600]'>20</span><p className='text-[#ccc]'>Dec</p></div>
                        <div className='flex flex-col justify-center'>
                          <p className='text-custom-12'>Lorem ipsum dort</p>
                          <p className='text-custom-10 text-[#ccc]'>73k interested -  7k going</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </aside>

      <nav className='flex-1' >
        <div className='h-[70px] xsm:w-full sm:w-full md:w-full w-[calc(100%-250px)] fixed top-0 border-t-[0.1px] border-r-[0.1px] border-b-[0.1px] border-[#cccccc22] dark:bg-[#232323] '>
          <div className='relative ml-[1vw] xsm:ml-[2.4479166666666665vw] mr-[2.4479166666666665vw] m-auto h-full flex items-center rounded-[4px] justify-between '>
            <GiHamburgerMenu className='hidden xsm:block md:block sm:block  dark:text-white' onClick={() => setShowNavbar(!showNavbar)} />
            <div className='flex gap-[3.125vw]'>
              <div className='flex dark:text-white items-center font-[700] gap-2 xsm:hidden md:hidden sm:hidden '>
                <svg className='fill-current w-[23px]' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.957 19.5729H12.582C12.1237 19.5729 11.7487 19.1979 11.7487 18.7396V14.7812C11.7487 13.7812 10.957 12.9896 9.95703 12.9896C8.95703 12.9896 8.16537 13.7812 8.16537 14.7812V18.7396C8.16537 19.1979 7.79037 19.5729 7.33203 19.5729H1.04036C0.582031 19.5729 0.207031 19.1979 0.207031 18.7396V8.07292C0.207031 7.32292 0.582031 6.61458 1.16536 6.19792L9.54037 0.15625C9.83203 -0.0520833 10.207 -0.0520833 10.4987 0.15625L18.8737 6.19792C19.457 6.61458 19.832 7.32292 19.832 8.07292V18.7812C19.7904 19.1979 19.4154 19.5729 18.957 19.5729ZM13.4154 17.9479H18.1654V8.07292C18.1654 7.86458 18.0404 7.65625 17.8737 7.53125L9.9987 1.82292L2.1237 7.48958C1.95703 7.61458 1.83203 7.82292 1.83203 8.03125V17.9062H6.58203V14.7812C6.58203 12.9062 8.1237 11.3646 9.9987 11.3646C11.8737 11.3646 13.4154 12.9062 13.4154 14.7812V17.9479Z" />
                </svg>
                <p className='text-custom-20 fill-inherit pt-[2px]'>Home</p>
              </div>
              <div className='border-[0.1px] h-[38.6px] rounded-[4px] dark:text-white border-[#cccccc22] bg-[#4a464665] flex justify-between gap-[5px] p-[5px]'>
                <h1 className='bg-[#6b69692f] cursor-pointer rounded-[4px] text-[14px] xsm:px-[5px] px-[15px] py-[3px]'>Explore</h1>
                <h1 className='hover:bg-[#6b69692f] cursor-pointer rounded-[4px] text-[14px] xsm:px-[5px] px-[15px] py-[3px]'>Community Feed</h1>
                <h1 className='hover:bg-[#6b69692f] cursor-pointer rounded-[4px] text-[14px] xsm:px-[5px] px-[15px] py-[3px]'>Mutual Friend</h1>
              </div>
            </div>
            <div className='flex gap-[20px] items-center justify-center relative xsm:hidden md:hidden sm:hidden '>
              <div className='bg-[#cccccc22] text-[10px] px-[7px] py-[3px] rounded-full'>
                <svg width="15" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M21.6275 17.6453L20.1541 15.6124C19.9529 15.3361 19.8447 15.0074 19.8439 14.6703V8.83609C19.8439 6.64439 18.936 4.54245 17.3201 2.99268C15.7042 1.44292 13.5125 0.572266 11.2272 0.572266C8.94188 0.572266 6.75019 1.44292 5.13425 2.99268C3.5183 4.54245 2.61047 6.64439 2.61047 8.83609V14.6703C2.60964 15.0074 2.50141 15.3361 2.30027 15.6124L0.826817 17.6453C0.603713 17.8824 0.457003 18.1764 0.404429 18.4917C0.351854 18.8071 0.395667 19.1303 0.530568 19.4222C0.66547 19.7142 0.885682 19.9625 1.16458 20.1369C1.44347 20.3114 1.7691 20.4047 2.10209 20.4054H7.00499C7.20276 21.3395 7.73115 22.1792 8.50063 22.7824C9.27011 23.3856 10.2334 23.7151 11.2272 23.7151C12.221 23.7151 13.1842 23.3856 13.9537 22.7824C14.7232 22.1792 15.2516 21.3395 15.4494 20.4054H20.3523C20.6852 20.4047 21.0109 20.3114 21.2898 20.1369C21.5687 19.9625 21.7889 19.7142 21.9238 19.4222C22.0587 19.1303 22.1025 18.8071 22.0499 18.4917C21.9973 18.1764 21.8506 17.8824 21.6275 17.6453ZM11.2272 22.0582C10.6938 22.0568 10.174 21.8972 9.73901 21.6013C9.30399 21.3054 8.97504 20.8877 8.79727 20.4054H13.6571C13.4793 20.8877 13.1504 21.3054 12.7153 21.6013C12.2803 21.8972 11.7605 22.0568 11.2272 22.0582ZM2.10209 18.7527C2.14103 18.718 2.17573 18.6792 2.20549 18.637L3.71341 16.5545C4.11568 16.0018 4.33215 15.3444 4.33381 14.6703V8.83609C4.33381 7.08273 5.06008 5.40118 6.35283 4.16136C7.64559 2.92155 9.39894 2.22503 11.2272 2.22503C13.0554 2.22503 14.8088 2.92155 16.1015 4.16136C17.3943 5.40118 18.1205 7.08273 18.1205 8.83609V14.6703C18.1222 15.3444 18.3387 16.0018 18.7409 16.5545L20.2489 18.637C20.2786 18.6792 20.3133 18.718 20.3523 18.7527H2.10209Z" fill="white" />
                  </g>
                </svg>
              </div>
              <div className='flex items-center gap-[15px] text-white'>
                <h1>Lorem</h1>
                <img src={user} className='h-[35px]' alt="" />
              </div>
            </div>
            <SlOptionsVertical onClick={() => setShowOptions(!showOptions)} className='hidden xsm:block md:block sm:block  dark:text-white' />
            {showOptions &&
              <>
                <div onClick={(e) => e.stopPropagation()} className="transition-all  border-solid border-b-[#343333] border-b-[12px] border-x-transparent border-x-[12px] border-t-0 absolute z-[100000] top-[calc(100%-1px)] right-[1px]"></div>
                <div onClick={(e) => e.stopPropagation()} className='overflow-hidden min-w-[200px] bg-white dark:text-white text-black  dark:bg-[#343333] absolute z-[100000] rounded-[10px] top-[calc(100%+4px)] right-[1px]'>
                  <div className='m-auto divide-y-[1px] divide-[rgba(255,255,255,0.5)] flex w-full flex-col '>
                    <div className='cursor-pointer hover:bg-[#cccccc21]'>
                      <div className='py-[14.86px] text-custom-18 px-[18px]'>
                        Notification
                      </div>
                    </div>
                    <div className='cursor-pointer hover:bg-[#cccccc21]'>
                      <div className='py-[14.86px] text-custom-18 px-[18px]'>
                        Profile
                      </div>
                    </div>
                  </div>
                </div>
              </>}
          </div>
        </div>

        <div onClick={() => setShowNavbar(false)} className='mt-[70px] dark:bg-[#000000ea] dark:text-white min-h-[calc(100vh-70px)]'>
          <Outlet />
        </div>
      </nav>
    </div>
  )
}

export default DashboardLayout