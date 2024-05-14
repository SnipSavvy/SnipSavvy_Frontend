// LoadingSpinner.jsx
import React from "react";
import Image from "next/image";
const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-75">
      <Image
        height={200}
        width={200}
        src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
        alt="Loading"
      />
    </div>
  );
};

export default LoadingSpinner;
