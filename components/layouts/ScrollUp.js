import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    });
  });

  return (
    <a
      id="scrollUp"
      href="#top"
      onClick={scrollUp}
      className={visible ? "visible" : ""}
    >
      <span className="text">top</span>
    </a>
  );
};

export default ScrollUp;
