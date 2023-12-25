import Link from "next/link";
import {RiYoutubeLine,RiInstagramLine,RiFacebookLine,RiGitlabLine,RiLinkedinLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex justify-center items-center text-lg gap-x-5">
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiLinkedinLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiGitlabLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiYoutubeLine />
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
