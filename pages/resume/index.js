
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
