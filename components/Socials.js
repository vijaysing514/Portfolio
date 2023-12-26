import Link from "next/link";
import {RiInstagramLine,RiFacebookLine,RiGitlabLine,RiLinkedinLine,RiWhatsappLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex justify-center items-center text-lg gap-x-5">
    <Link target="_blank" href={'https://www.linkedin.com/in/vijay-singh-71405a17a/'} className="hover:text-accent transition-all duration-300">
    <RiLinkedinLine />
    </Link>
    <Link target="_blank" href={'https://github.com/vijaysing514'} className="hover:text-accent transition-all duration-300">
    <RiGitlabLine />
    </Link>
    <Link target="_blank" href={'https://wa.me/919975760246?text=Hi%20Vijay'} className="hover:text-accent transition-all duration-300">
    <RiWhatsappLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiFacebookLine />
    </Link>
  </div>;
};

export default Socials;
