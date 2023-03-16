import React, { useState } from 'react';
import myImg4 from '../images/4.png';
import myImg2 from '../images/2-2.png';
import myImg5 from '../images/mobile.png';
import CV from '../images/DANG-LAI-ANH-1.pdf';
import Logo from '../images/logo-2.png';
import HrmMobile from '../images/hrmmobile-2.png';
import BoxChat from '../images/Boxchat2.png'



 

const ComponentName = () => {        
    return ( 


<div className="">


 {/* //PHẦN 2 */}
<header className= " text-gray-400 bg-Neutral-800 body-font">
  <div className=" container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a href='#' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
   <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={Logo} alt="thumbnail-3"/>

      
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24"> */}
        {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      {/* <span class="ml-3 text-xl">Tailblocks</span> */}
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1  md:pl-4 md:border-l md:border-gray-700 dark:text-gray-300	flex flex-wrap items-center text-base justify-center">
      <a href="#" title="" className="mr-5  text-blue-500 hover:text-white">Home</a>
      <a href="#Works" title="" className="mr-5 hover:text-white">Works </a>
      <a href="#About" title="" className="mr-5 hover:text-white">About</a>
      <a href="#Footer" title="" className="mr-5 hover:text-white">DeFi</a>
    </nav>
    
    <div className="hidden md:block">
                    <a
                        href="mailto:prisonerk33@gmail.com"
                        title=""
                        className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-700 rounded-lg sm:text-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                        >Contact Me</a
                    >
                </div>
  </div>
</header>
    



    <section>

<div className="relative py-12 overflow-hidden bg-gray-100 sm:py-16 lg:py-20 xl:py-24">
<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
<div className="flex flex-col">

  {/* PART 1  */}
  <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
      {/* <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">TEST CHO APP ✨ DeFi strategies</h1> */}
     <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Welcome to<span className="inline"><img className="inline w-auto h-8 sm:h-10 lg:h-12" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg" alt="shape-1"/></span>My Portfolio <span className="inline"><img className="inline w-auto h-8 sm:h-10 lg:h-11" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg" alt="shape-2"/></span></h1>

      <p className="mt-5 text-lg font-medium text-gray-900 lg:mt-8">Intern Ui/Ux Design</p>


      <div className="mt-8 lg:mt-12">
          <svg className="w-auto h-4 mx-auto text-gray-300 lg:mx-0" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"></line>
              <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"></line>
          </svg>
         
          <p className="mt-8 text-base font-semibold text-gray-900">A little information about me</p>
{/* <form action="#" method="post" className="relative mt-4">
<div className="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
<div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
<div className="flex-1">
  <label for="" className="sr-only">Email address</label>
  <div>
    <input type="email" name="" id="" className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900" placeholder="Enter email address"/>
  </div>
</div><button type="button" className="inline-flex items-center justify-center
 w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white
  transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg
   sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Join Now</button>
</div>
</form> */}





      </div>





{/* Bỏ comments */}



{/* BUTTON  */}    
      <div className="relative mt-4 lg:mt-10  sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5">
          <a
              href="#About"
              title=""
              className="inline-flex items-center justify-center px-16 py-3 text-base font-bold leading-7 rounded-md text-white transition-all duration-200 bg-emerald-900  border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-emerald-700"
              role="button"
          >
              About Me
          </a>
          <a
              href={CV} download="dang lai anh"
              title=""
              className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold 
              transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center
               rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200 text-gray-500 hover:text-gray-900"
              role="button"
          >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download CV
          </a>
      </div>

     
{/* 
      <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
          <div>
              <p className="text-4xl font-bold text-gray-900">50k+</p>
           </div>

          <div>
              <p className="text-4xl font-bold text-gray-900">17k+</p>
              <p className="mt-2 text-base font-medium text-gray-500">Artists</p>
          </div>
      </div> */}
  </div>

  {/* PART 2  */}

  <div className="pb-8 ml-12  lg:inset-0 lg:pb-0">
<div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
<div className="flex justify-start w-full gap-6 pb-8 overflow-x-auto snap-x">

{/* LANDING PORTFOLIO  */}
{/* <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"> */}
<div className="relative snap-start scroll-ml-6 shrink-0">
<div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
<a href="https://www.figma.com/file/mltu4Htmtm7dhwkZpbDo5B/Landingportfolio?node-id=0%3A1&t=mW51iCyNFapVy1uR-1" title="" className="flex shrink-0 aspect-w-4 aspect-h-3"><img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={myImg2} alt="thumbnail-1"/></a>
<div className="flex-1 px-4 py-5 sm:p-6">
  <a href="#" title="" className="">
  <p className="text-lg font-bold text-gray-800">Landing Portfolio</p>
  <p className="mt-3 text-sm font-medium leading-6 text-gray-600 line-clamp-3">Phần mềm gợi ý, hỗ trợ các doanh nghiệp trong các vấn đề về giới thiệu trang web đến với khách hàng</p></a>
</div>
<div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium text-gray-900"><a href="#" title="" className="">Growth</a></p><span className="text-sm font-medium text-gray-900">•</span>
      <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
    </div><a href="https://www.figma.com/file/ownjikFnr9hPDI1VfSzAXh/landingfolio?node-id=0%3A1&t=ojYEwzCr6G2JYYiw-1" title="" className="" role="button"><svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="17" y1="7" x2="7" y2="17"></line>
    <polyline points="8 7 17 7 17 16"></polyline></svg></a>
  </div>
</div>
</div>
</div>


{/* HRM PC  */}
<div className="relative snap-start scroll-ml-6 w-19 shrink-0 first:pl-6 last:pr-6">
<div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
<a href="https://www.figma.com/file/3QM5Eljefni4gvaZigRZtR/Hrm-'%C4%91ang-c%E1%BA%ADp-nh%E1%BA%ADt?node-id=0%3A1&t=Bb4R04nVlwy10BpF-1" title="" className="flex shrink-0 aspect-w-4 aspect-h-3"><img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={myImg4} alt="thumbnail-2"/></a>
<div className="flex-1 px-4 py-5 sm:p-6">
  <a href="#" title="" className="">
  <p className="text-lg font-bold text-gray-900">HRM</p>
  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">Phần mềm cung cấp các giải pháp hỗ trợ doanh nghiệp trong quản trị và phát triển nhân lực.</p></a>
</div>
<div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium text-gray-900"><a href="#" title="" className="">Growth</a></p><span className="text-sm font-medium text-gray-900">•</span>
      <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
    </div><a href="#" title="" className="" role="button"><svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="17" y1="7" x2="7" y2="17"></line>
    <polyline points="8 7 17 7 17 16"></polyline></svg></a>
  </div>
</div>
</div>
</div>


{/* HRM MOBILE  */}
<div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
<div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
<a href="https://www.figma.com/file/85YtKWyr7GYIZHka5p52R6/HRM-MOBILE?node-id=0%3A1&t=nzwOrgeX6sogYK5N-1" title="" className="flex shrink-0 aspect-w-4 aspect-h-3"><img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={HrmMobile} alt="thumbnail-3"/></a>
<div className="flex-1 px-4 py-5 sm:p-6">
  <a href="#" title="" className="">
  <p className="text-lg font-bold text-gray-900">HRM Mobile</p>
  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.</p></a>
</div>
<div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium text-gray-900"><a href="#" title="" className="">Growth</a></p><span className="text-sm font-medium text-gray-900">•</span>
      <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
    </div><a href="#" title="" className="" role="button"><svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="17" y1="7" x2="7" y2="17"></line>
    <polyline points="8 7 17 7 17 16"></polyline></svg></a>
  </div>
</div>
</div>
</div>



{/* BOX CHAT  */}

<div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
<div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
<a href="https://www.figma.com/file/EP0L4IzcPg18B553uGtxdn/Box-chat?node-id=0%3A1&t=haNFsRb24ZofLjGX-1" title="" className="flex shrink-0 aspect-w-4 aspect-h-3">
  <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={BoxChat} alt="thumbnail-3"/></a>
<div className="flex-1 px-4 py-5 sm:p-6">
  <a href="#" title="" className="">
  <p className="text-lg font-bold text-gray-900">Box Chat</p>
  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.</p></a>
</div>
<div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium text-gray-900"><a href="#" title="" className="">Growth</a></p><span className="text-sm font-medium text-gray-900">•</span>
      <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
    </div><a href="#" title="" className="" role="button"><svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="17" y1="7" x2="7" y2="17"></line>
    <polyline points="8 7 17 7 17 16"></polyline></svg></a>
  </div>
</div>
</div>
</div>



{/* NFT WEB  */}
{/* <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
<div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
<a href="https://www.figma.com/proto/EamF64uZEA7bD2XZxqIVjV/Product-%3A-SAMURAI-MANAGER-(II)-2?page-id=0%3A1&node-id=236%3A7482&viewport=-4077%2C-8077%2C0.6&scaling=min-zoom" title="" className="flex shrink-0 aspect-w-4 aspect-h-3">
  <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={myImg2} alt="thumbnail-3"/></a>
<div className="flex-1 px-4 py-5 sm:p-6">
  <a href="#" title="" className="">
  <p className="text-lg font-bold text-gray-900">Nft</p>
  <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.</p></a>
</div>
<div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium text-gray-900"><a href="#" title="" className="">Growth</a></p><span className="text-sm font-medium text-gray-900">•</span>
      <p className="text-sm font-medium text-gray-900">7 Mins Read</p>
    </div><a href="#" title="" className="" role="button"><svg className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="17" y1="7" x2="7" y2="17"></line>
    <polyline points="8 7 17 7 17 16"></polyline></svg></a>
  </div>
</div>
</div>
</div> */}



</div>



{/* <div className="flex items-center justify-end mt-2 space-x-5">
<div className="w-16 h-[3px] rounded-full bg-gray-900"></div>
<div className="w-16 h-[3px] rounded-full bg-gray-300"></div>
</div> */}
</div>
  </div>
</div>
</div>
</div>
    </section>
</div>
    )
}
export default ComponentName;