import React from "react";

function Linkedin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6 2a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V6a4 4 0 00-4-4H6zM4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm5 5a1 1 0 10-2 0v6a1 1 0 102 0v-6zm.5-3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 10c.34 0 .64.17.82.428A3.51 3.51 0 0114.5 10c2.16 0 3.5 1.926 3.5 3.571V17a1 1 0 11-2 0V13.57c0-.768-.66-1.571-1.5-1.571-.524 0-1.103.285-1.5.963V17a1 1 0 11-2 0V11a1 1 0 011-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Linkedin;
