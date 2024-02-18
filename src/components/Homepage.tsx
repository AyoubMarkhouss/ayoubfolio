import React from "react";
import Image from "next/image";
import Typing from "./Typing";
const Homepage = () => {
  return (
    <main
      className=" h-[calc(100vh_-_80px)] flex items-center justify-center"
      id="Home"
    >
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[600px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <div className="flex justify-center items-center  ">
        <div className="flex justify-center items-center text-2xl">
          <Image
            alt="me"
            src="/ayoubpng.png"
            height={2500}
            width={2500}
            className="h-[520px] w-[400px] absolute "
          />
          <div className="flex pt-[340px] z-50">
            <p className="pr-2">Développeur </p>
            <Typing />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
