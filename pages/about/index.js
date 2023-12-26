import React , {useState} from "react";
import ParticlesContainer from '../../components/ParticlesContainer'
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles"
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

 //data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5"/>,
          <FaCss3 key="Css3"/>,
          <SiTailwindcss key="SiTailwindcss"/>,
          <FaJs key="FaJs"/>,
          <FaBootstrap key="FaBootstrap"/>,
          <FaWordpress key="FaWordpress"/>,
          <FaReact key="FaReact"/>,
          <SiNextdotjs key="SiNextdotjs"/>,
          <FaPhp key="FaPhp"/>,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer - Geecon Global',
        stage: '2020 - 2023',
      },
      {
        title: 'Intern - GVI Centre of Excellence',
        stage: '2019 - 2020',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development Certified - SCTPL Mumbai with 86.7%',
        stage: '2018',
      },
      {
        title: 'Computer Science Degree - University of Mumbai',
        stage: '2017',
      },
    ],
  },
];

const About = () => {

  const [index,setIndex] = useState(0);

  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <ParticlesContainer />
    <Circles />
    <motion.div variants={fadeIn('right',0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col xl:flex-row items-center">
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 variants={fadeIn('right',0.2)} initial="hidden" animate="show" exit="hidden" className="h2 my-4">I build <span className="text-accent">things</span> for the web.</motion.h2>
        <motion.p variants={fadeIn('right',0.4)} initial="hidden" animate="show" exit="hidden" className="my-4 mx-auto xl:mx-0 md-6 xl:md-12 px-2 xl:px-0 ">
Greetings! I&apos;m Vijay, and I derive immense joy from crafting digital entities that come alive on the internet. My journey into web development commenced in 2018 when I ventured into tweaking custom themes. Little did I know that piecing together a bespoke reblog button would become a pivotal lesson, offering insights into the realms of HTML and CSS!</motion.p>
        <motion.div variants={fadeIn('right',0.6)} initial="hidden" animate="show" exit="hidden" className="md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex-1 flex xl:gap-x-6 my-4">
            <div className="relative after:w-[1px] after:bg-white/10 after:h-full after:absolute after:right-0 after:top-0">
              <div className="text-2xl xl:text-4xl font-extrabold md-2 text-accent"><CountUp start={0} end={3} duration={5}/>+</div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
            </div>
            <div className="relative after:w-[1px] after:bg-white/10 after:h-full after:absolute after:right-0 after:top-0">
              <div className="text-2xl xl:text-4xl font-extrabold md-2 text-accent"><CountUp start={0} end={100} duration={5}/>+</div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
            </div>
            <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold md-2 text-accent"><CountUp start={0} end={100} duration={5}/>+</div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Delivered Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div variants={fadeIn('left',0.6)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex mx-auto gap-x-4 xl:gap-x-8 xl:mx-0 md-4">
          {aboutData.map((item,itemIndex)=>{
            return(
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:bg-white after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            )
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start my-2">
          {aboutData[index].info.map((item,itemIndex)=>{
            return <div key={item.id} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
              {item.icons?.map((icon,iconIndex)=>{
                return <div key={iconIndex} className="text-2xl text-white">{icon}</div>
              })}
              </div>
            </div>
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
