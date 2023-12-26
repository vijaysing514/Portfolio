import {BsArrowRight} from 'react-icons/bs';
import ParticlesContainer from '../../components/ParticlesContainer'
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Bulb from '../../components/Bulb';

const Contact = () => {
  return <div className='bg-primary/30 py-32 h-full'>
    <div><ParticlesContainer /></div>
    <div className='container mx-auto my-10 text-center xl:text-left  flex items-center justify-center z-10 mb-[100px]'>
      <div className='flex flex-col w-full max-w-[700px]'>
        <motion.h2 variants={fadeIn('up',0.2)} initial="hidden" animate="show" exit="hidden" className='h2 mb-2 text-center'>Let&apos;s <span className='text-accent'>Connect.</span></motion.h2>
        <motion.p variants={fadeIn('up',0.2)} initial="hidden" animate="show" exit="hidden" className="my-2 mx-auto xl:mx-0 mb-4 xl:mb-6 px-2 xl:px-0 ">
        Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>
        <motion.form variants={fadeIn('up',0.4)} initial="hidden" animate="show" exit="hidden" action='' className='flex flex-1 flex-col w-full gap-6 mx-auto z-10'>
          <div className='flex w-full gap-x-6'>
            <input type='text' placeholder='Name' className='input'/>
            <input type='email' placeholder='Email' className='input'/>
          </div>
          <input type='text' placeholder='Subject' className='input'/>
          <textarea placeholder='Message' className='textarea' />
          <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center flex justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s Talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 transition-all duration-500 group-hover:flex group-hover:opacity-100 group-hover:-translate-y-0 absolute text-[22px] '/>
          </button>
        </motion.form>
      </div>
    </div>
    <Bulb />
    <Circles />
  </div>;
};

export default Contact;
