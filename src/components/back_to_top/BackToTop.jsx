import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  function handleScrollPage() {
    const position = window.pageYOffset;
    if (position > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    // trong useEffect thường được sử lý những thứ gọi là side effect
    console.log("Mounted");
    window.addEventListener("scroll", handleScrollPage);
    return () => {
      window.removeEventListener("scroll", handleScrollPage);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    show && (
      <button onClick={scrollToTop} style={{ position: "fixed", bottom: "10px", right: "10px" }}>
        Scroll To Top
      </button>
    )
  );
}

export default BackToTop;
