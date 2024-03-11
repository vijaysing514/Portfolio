
import ParticlesContainer from '../../components/ParticlesContainer';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const Resume = () => {
   return <div className='bg-primary/30 h-full py-36 flex items-center'>
    <ParticlesContainer />
    <Circles />
    <div>
      <h1>PDF Viewer</h1>
      <iframe
        title="PDF Viewer"
        src="your_pdf_file.pdf"
        width="100%"
        height="500px"
        frameborder="0"
      ></iframe>
    </div>
    <Bulb />
  </div>;
};

export default Resume;
