
import ParticlesContainer from '../../components/ParticlesContainer';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const Resume = () => {
  return <div className='bg-primary/30 h-full py-36 flex items-center'>
    <ParticlesContainer />
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up',0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My services <span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up',0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Embark on a journey of digital transformation with my comprehensive range of services tailored to elevate your online presence.</motion.p>
        </div>
        <motion.div variants={fadeIn('up',0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        <div>
      <h1>PDF Viewer</h1>
      <iframe
        title="PDF Viewer"
        src="/vijay-singh.pdf"
        width="100%"
        height="500px"
        frameborder="0"
      ></iframe>
    </div>
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Resume;
