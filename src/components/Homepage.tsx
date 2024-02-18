import React from "react";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
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
        <div className="col-span-4 flex gap-4 flex-col justify-center pl-5 pt-44">
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
          <h1 className="text-6xl z-30">Ayoub Markhouss</h1>
          <p className="text-2xl z-30">Front-End Developer & Web Designer</p>
          <Image
            alt="me"
            src="/ayoubpng.png"
            width={1000}
            height={1000}
            className="w-full h-[500px] absolute top-7 right-0"
          />
        </div>
        {/* <div className="col-span-2 flex justify-start items-center "></div> */}
      </main>
    </>
  );
};

export default Homepage;
