
import React , {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Navigation, Pagination} from 'swiper'
// icons
import {BsArrowRight} from 'react-icons/bs'
import Image from 'next/image'
import Link from "next/link";
// data
const workSlides = [
  {
      title:'ReactJs Apps',
      slides: [
        {
          images: [
            {
              title: 'https://dashboard-vijay.vercel.app/',
              path: '/dashboard-app.png',
              name: 'Dashboard App',
            },
            {
              title: 'https://vijay-chatting.vercel.app/',
              path: '/chatapp.png',
              name: 'Chat Bot App',
            },
            {
              title: 'https://vijay-cricket-score-backend.vercel.app/',
              path: '/Cricket-Project-score-backend.png',
              name: 'Cricket Sorecard App',
            },
             {
              title: 'https://vijay-image-ai.vercel.app/',
              path: '/imageai.png',
               name: 'AI Image Genration App',
            },
          ],
        },
        {
          images: [
            {
              title: 'https://vinstagram.vercel.app/',
              path: '/vinstagram.png',
              name: 'Instagram Clone',
            },
            {
              title: 'https://vijaysingh.vercel.app/',
              path: '/portfolio.png',
              name: 'My Portfolio',
            },
          ],
        },
      ],
      },
  {
    title:'Websites',
    slides: [
      {
        images: [
          {
            title: 'https://b2bgrowthexpo.com/',
            path: '/b2bexpo.png',
            name: 'Live Website',
          },
          {
            title: 'https://marshamcourthotel.co.uk/',
            path: '/marshamcourt.png',
            name: 'Live Website',
          },
          {
            title: 'https://www.sirmaxochem.in/',
            path: '/sirmaxo.png',
            name: 'Live Website',
          },
          {
            title: 'https://unity101.org/',
            path: '/unity.png',
            name: 'Live Website',
          },
        ],
      },
      {
        images: [
          {
            title: 'http://customtheme.singhvijay.in/?i=1',
            path: '/customt.png',
            name: 'Live Website',
          },
          {
            title: 'https://bbxuk.com/',
            path: '/bbx.png',
            name: 'Live Website',
          },
          {
            title: 'https://www.visualytes.com/',
            path: '/visu.png',
            name: 'Live Website',
          },
          {
            title: 'https://tideandseektravel.com/',
            path: '/tide.png',
            name: 'Live Website',
          },
        ],
      },
    ],
    },
    
// {
// title:'Laravel',
// slides: [
//   {
//     images: [
//       {
//         title: 'https://www.feedbackvalue.com/',
//         path: '/feedback.png',
//       },
//     ],
//   },
// ],
// },
// {
//   title:'CodeIgniter',
//   slides: [
//     {
//       images: [
//         {
//           title: 'https://apps.globalhrin.com/',
//           path: '/global.png',
//         },
//       ],
//     },
//   ],
//   },
];


const WorkSlider = () => {
  const [index,setIndex] = useState(0);

  return (
  <div>
    <div className="flex mx-auto gap-x-4 xl:gap-x-8 xl:mx-0 md-4">
          {workSlides.map((item,itemIndex)=>{
            return(
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:bg-white after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            )
          })}
        </div>
  <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={10}
  navigation
  pagination={{ clickable: true }}
  className='h-[280px] sm:h-[480px]'
  >
    {workSlides[index].slides.map((slide,index)=>{
      return <SwiperSlide key={index}>
        <div className='grid py-4 grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image,index)=>{
            return <div className='rounded-lg relative overflow-hidden flex items-center justify-center group' key={index}>
              <div className='flex items-center justify-center relative overflow-hidden group'>
                <Image src={image.path} width={500} height={300} alt='' />
                <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300'></div>
                <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                
                <Link target="_blank" href={image.title}>
                  <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100'>{image.name}</div>
                </Link>
                <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-xl'>
                <Link target="_blank" href={image.title}><BsArrowRight /></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </SwiperSlide>
    })}
  </Swiper>
  </div>);
};

export default WorkSlider;
