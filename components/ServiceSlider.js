import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {FreeMode,Pagination} from 'swiper'
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Discover the transformative power of design comprehensive services',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Fusing Creativity with Functionality Design Solutions.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Empowering Growth through Innovative Development Solutions.',
  },
  {
    icon: <RxReader />,
    title: 'Maintenance',
    description: 'Ensure optimal performance of assets with maintenance services.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Unlock the potential of your online presence with specialized SEO.',
  },
];


const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15,
    },
    640:{
      slidesPerView:3,
      spaceBetween:15,
    },
  }}
  freeMode={true}
  pagination={{
    clickable:true,
  }}
  modules={[FreeMode,Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
    {serviceData.map((item,itemIndex)=>{
      return <SwiperSlide key={itemIndex}>
        <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.25)] transition-all duration-300'>
          <div className='text-accent text-4xl mb-4'>{item.icon}</div>
          <div className='mb-8'>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[350px] leading-normal'>{item.description}</p>
          </div>
          <div className='text-3xl'>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
          </div>
        </div>
      </SwiperSlide>
    })}
  </Swiper>;
};

export default ServiceSlider;
