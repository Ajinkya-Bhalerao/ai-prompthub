import Image from "next/image";
import React from "react";
import line from "@/public/Assets/line.png";
import MarQuee from "react-fast-marquee";
type Props = {};

const rowOneImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
];

const rowTwoImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/five.png",
  },
];

const Hero = (props: Props) => {
  return (
    <div className="w-full md:mih-h-screen flex item-center justify-center">
      <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-5xl 2xl:text-8xl font-[500] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          Empower Tomorrow:
          <span className="text-[#64ff4b]"> Ai Image</span> <br />
          Your Gateway to <br /> AI Excellence!
        </h1>
        <div className="md:mt-5">
          <Image src={line} alt="" className="absolute hidden md:block" />
        </div>
        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[300px] rounded-[20px]"
                  width={200}
                  height={200}
                />
              ))}
            </MarQuee>
            <MarQuee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[300px] rounded-[20px]"
                  width={200}
                  height={200}
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
