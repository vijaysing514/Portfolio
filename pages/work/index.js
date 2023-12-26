import ParticlesContainer from '../../components/ParticlesContainer';
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const Work = () => {
  return <div className='bg-primary/30 h-full py-36 flex items-center'>
    <ParticlesContainer />
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up',0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-12'>My Work<span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up',0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Dive into a portfolio of projects that encapsulate my commitment to excellence and innovation. Each endeavor is a testament to my passion for creating digital experiences that not only meet but exceed expectations.</motion.p>
        </div>
        <motion.div variants={fadeIn('up',0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Work;
