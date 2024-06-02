"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const goToBtn = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = (): void => {
    const heightToHidden = 20;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (hasMounted) {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }
  }, [hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-20 right-20 w-16 h-16 bg-[#045aa6] text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-opacity duration-70000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={goToBtn}
        >
          <FaArrowUp className="text-3xl" />
        </div>
      )}
    </>
  );
};

export default GoToTop;
