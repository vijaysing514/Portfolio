import {BsArrowRight} from 'react-icons/bs';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return <div className='bg-primary/30 h-full'>
    <div className='container mx-auto py-32 text-center xl:text-left h-full flex items-center justify-center'>
      <div className='flex flex-col w-full max-w-[700px]'>
        <motion.h2 variants={fadeIn('up',0.2)} initial="hidden" animate="show" exit="hidden" className='h2 mb-12 text-center'>Let&apos;s <span className='text-accent'>Connect.</span></motion.h2>
        <motion.form variants={fadeIn('up',0.4)} initial="hidden" animate="show" exit="hidden" action='' className='flex flex-1 flex-col w-full gap-6 mx-auto'>
          <div className='flex w-full gap-x-6'>
            <input type='text' placeholder='Name' className='input'/>
            <input type='email' placeholder='Email' className='input'/>
          </div>
          <input type='email' placeholder='Subject' className='input'/>
          <textarea placeholder='Message' className='textarea' />
          <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center flex justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s Talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 transition-all duration-500 group-hover:flex group-hover:opacity-100 group-hover:-translate-y-0 absolute text-[22px] '/>
          </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
