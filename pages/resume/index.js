
import ParticlesContainer from '../../components/ParticlesContainer';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const Resume = () => {
   const handleDownload = () => {
    // Assuming fileUrl is the URL of the file you want to download
    const fileUrl = '/vijay-singh.pdf';
    
    // Triggering the download
    window.open(fileUrl, '_blank');
  };
   return <div className='bg-primary/30 h-full py-36 flex items-center'>
    <ParticlesContainer />
    <Circles />
    <div>
      <h1>Download Resume</h1>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
    <Bulb />
  </div>;
};

export default Resume;
