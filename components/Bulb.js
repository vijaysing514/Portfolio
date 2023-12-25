import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -bottom-12 -left-36 rotate-12 mix-blend-color-dodge animate-pulse duration-75 w-[200px] z-10 xl:w-[260px]">
    <Image src={'/bulb.png'} width={260} height={200} alt="" className="w-full h-full" />
  </div>;
};

export default Bulb;
