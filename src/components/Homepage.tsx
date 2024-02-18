import React from "react";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import Down from "./icons/Down";

const Homepage = () => {
  return (
    <>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>

      <main className=" h-[calc(100vh_-_80px)] grid grid-cols-6" id="Home">
        <div className="col-span-6 flex gap-4 sm:gap-7 flex-col justify-center items-center sm:items-start px-5 lg:pl-24 md:pl-10 pt-[170px] md:pt-0">
          <Chip
            color="success"
            variant="dot"
            classNames={{
              base: " border-small border-success shadow-pink-500/30 z-30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            Available for work
          </Chip>
          {/* <h1 className=" flex z-30 ">
            <Waving />
          </h1> */}
          <h1 className="text-6xl md:text-8xl z-30 ">I&apos;m Ayoub,</h1>
          <p className="text-3xl md:text-5xl z-30">Front-End Developer</p>
          <p className="text-xl text-center z-30">
            Turning ideas into real life products is my calling.
          </p>
          <Image
            alt="me"
            src="/ayoubpng.png"
            width={1000}
            height={1000}
            className="w-full sm:w-96  h-[500px] absolute top-12 right-0 lg:right-32 lg:top-32 md:right-10 md:top-32"
          />
          <Down className="w-10 sm:hidden" />
        </div>
        {/* <div className="col-span-2 flex justify-start items-center "></div> */}
      </main>
    </>
  );
};

export default Homepage;
