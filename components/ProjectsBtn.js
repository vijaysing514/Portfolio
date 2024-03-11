import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {

  const handleDownloadResume = () => {
  // Replace the fileUrl with the actual URL of your resume PDF
  const fileUrl = '/vijay-singh.pdf';
  window.open(fileUrl, '_blank');
};
  
  return <div className="mx-auto xl:mx-0 ">
    <a
    href="#"
    onClick={handleDownloadResume}
    className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group"
  >
    <Image
      src="/rounded-text.png"
      width={141}
      height={148}
      alt=""
      className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
    />
    <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
  </a>
  </div>;
};

export default ProjectsBtn;
