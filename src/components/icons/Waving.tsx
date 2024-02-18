import Image from "next/image";
import React from "react";

const Waving = ({ className }: { className?: string }) => {
  return (
    <Image
      alt="wave"
      src="/waving-hand.png"
      width={1000}
      height={1000}
      className="w-[40px]"
    />
  );
};

export default Waving;
