import React, { useState } from 'react';
// import myImg from '../images/Samurai_discover_activity.png';
// import myImg2 from '../images/2.png';
// import CV from '../images/dang lai anh.pdf';

 



const ComponentName = () => {        
    return (
        <section>

    <div className="relative py-12 overflow-hidden bg-gray-100 sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col">
                <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">ĐÂY LÀ PHẦN ✨ HEADER CỦA Web</h1>
                    <p className="mt-5 text-lg font-medium text-gray-900 lg:mt-8">Find the best inverstment managers and automated strategies in DeFi</p>

                    <div className="mt-8 lg:mt-10 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5">
                        <a
                            href="#About"
                            title=""
                            className="inline-flex items-center justify-center px-16 py-3 text-base font-bold leading-7 rounded-md text-white transition-all duration-200 bg-emerald-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-emerald-700"
                            role="button"
                        >
                            About Me
                        </a>
                        <a
                            href={CV} download="dang lai anh"
                            title=""
                            className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200"
                            role="button"
                        >
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download CV
                        </a>
                    </div>

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
                    </div>
{/* 
                    <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
                        <div>
                            <p className="text-4xl font-bold text-gray-900">50k+</p>
                            <p className="mt-2 text-base font-medium text-gray-500">Artwork</p>
                        </div>

                        <div>
                            <p className="text-4xl font-bold text-gray-900">17k+</p>
                            <p className="mt-2 text-base font-medium text-gray-500">Artists</p>
                        </div>
                    </div> */}
                </div>





                {/* <div className="relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-1/2 lg:top-1/2"> */}


{/* PHẦN TEST  */}

         
    



{/* ENG PHẦN TEST */}
                        
<div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
                    <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                         <div className="flex justify-start w-full gap-6 pb-8 overflow-x-auto snap-x">
{/* CARD ITEM N */}
                                      <div class="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                        <div class="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                            <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3"
                                ><img class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={myImg} alt="thumbnail-1"
                            /></a>
                            <div class="flex-1 px-4 py-5 sm:p-6">
                                <a href="#" title="" class="">
                                    <p class="text-lg font-bold text-gray-900">How to write content about your photographs</p>
                                    <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.</p></a
                                >
                            </div>
                            <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <p class="text-sm font-medium text-gray-900"><a href="#" title="" class="">Growth</a></p>
                                        <span class="text-sm font-medium text-gray-900">•</span>
                                        <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                                    </div>
                                    <a href="#" title="" class="" role="button"
                                        ><svg class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="17" y1="7" x2="7" y2="17"></line>
                                            <polyline points="8 7 17 7 17 16"></polyline></svg
                                    ></a>
                                </div>
                            </div>
                        </div>
                                      </div>
{/* END CARD ITEM N */}


                                      <div class="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                        <div class="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                            <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3"
                                ><img class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={myImg} alt="thumbnail-1"
                            /></a>
                            <div class="flex-1 px-4 py-5 sm:p-6">
                                <a href="#" title="" class="">
                                    <p class="text-lg font-bold text-gray-900">How to write content about your photographs</p>
                                    <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.</p></a
                                >
                            </div>
                            <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <p class="text-sm font-medium text-gray-900"><a href="#" title="" class="">Growth</a></p>
                                        <span class="text-sm font-medium text-gray-900">•</span>
                                        <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                                    </div>
                                    <a href="#" title="" class="" role="button"
                                        ><svg class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <line x1="17" y1="7" x2="7" y2="17"></line>
                                            <polyline points="8 7 17 7 17 16"></polyline></svg
                                    ></a>
                                </div>
                            </div>
                        </div>
                                      </div>



{/* CARD ITEM NEW 1 */}    
                                       <div class="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                                 <div class="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                                      <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3"
                                      ><img class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={myImg} alt="thumbnail-2"
                                      /></a>
                                      <div class="flex-1 px-4 py-5 sm:p-6">
                                      <a href="#" title="" class="">
                                              <p class="text-lg font-bold text-gray-900">How to write content about your photographs</p>
                                              <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.</p></a
                                               >
                                       </div>
                                       <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                                            <div class="flex items-center justify-between">
                                                      <div class="flex items-center space-x-2">
                                                            <p class="text-sm font-medium text-gray-900"><a href="#" title="" class="">Growth</a></p>
                                                            <span class="text-sm font-medium text-gray-900">•</span>
                                                            <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                                                      </div>
                                                      <a href="#" title="" class="" role="button"
                                                              ><svg class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                              <line x1="17" y1="7" x2="7" y2="17"></line>
                                                              <polyline points="8 7 17 7 17 16"></polyline></svg
                                                      ></a>
                                                      </div>
                                      </div>
                                 </div>
                                       </div>              
{/* CARD ITEM NEW 2 */}
                        </div>
                    </div>
                </div>




                    
            </div>
        </div>
    </div>
</section>

    )
}
export default ComponentName;   