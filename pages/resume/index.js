
import ParticlesContainer from '../../components/ParticlesContainer';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const Resume = () => {
  return <div className='bg-primary/30 h-full'>
    <ParticlesContainer />
    <Circles />
    <div className='container mx-auto'>
      <div className=''>
        <motion.div variants={fadeIn('up',0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        <div>
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
