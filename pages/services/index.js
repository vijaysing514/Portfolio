import ParticlesContainer from '../../components/ParticlesContainer';
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const Services = () => {
  return <div className='bg-primary/30 h-full py-36 flex items-center'>
    <ParticlesContainer />
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up',0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My services <span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up',0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</motion.p>
        </div>
        <motion.div variants={fadeIn('up',0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;
