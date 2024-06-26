import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'
import { motion } from "framer-motion";
import {fadeIn} from '../variants'
import Particles from "react-tsparticles";
const Home = () => {
  return (
    <div className="bg-primary-60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-balck/30 to-black/10 ">
        <div className="flex flex-col text-center justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1 variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
          Coding Dreams<br/> into <span className="text-accent">Digital reality</span> 
          </motion.h1>
          <motion.p variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl max-auto xl:mx-0 mb-10 xl:mb-16">
          In the vast realm of digital innovation, my passion as a web developer is to breathe life into your ideas, transforming concepts into interactive and visually stunning realities. 
          </motion.p>
          <div className="flex justify-center relative xl:hidden">
            <ProjectBtn />
          </div>
          <motion.div variants={fadeIn('down',0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex"> 
          <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer />
        <motion.div variants={fadeIn('up',0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration:1,ease:'easeInOut'}} className="h-full w-full max-w-[537px] max-h-[478px] absolute -bottom-12 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
