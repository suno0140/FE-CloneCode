import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return scrollPosition;
};

export default useScrollPosition;
