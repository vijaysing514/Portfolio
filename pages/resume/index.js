import ParticlesContainer from '../../components/ParticlesContainer';
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
       <iframe
        title="Vijay Singh Resume"
        src="vijay-singh.pdf"
        width="100%"
        height="500px"
        frameborder="0"
        className="z-10"
      ></iframe>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;
