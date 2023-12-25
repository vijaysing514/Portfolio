import Image from "next/image";

const TopLeftImg = () => {
  return <div className="absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
    <Image src="/top-left-img.png" width={200} height={200} alt=""/>
  </div>
};

export default TopLeftImg;
