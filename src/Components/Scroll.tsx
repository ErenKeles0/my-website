import { useState, useEffect, useRef } from "react";
import { FaAnglesDown } from "react-icons/fa6";
export default function Scroll() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionCount, setSectionCount] = useState(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sayfa açıldığında kaç section var bul
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    setSectionCount(sections.length);
  }, []);

  // Scroll takip + 3sn içinde hizalama
  useEffect(() => {
    const handleScroll = () => {
      const currentIndex = Math.round(window.scrollY / window.innerHeight);
      setSectionIndex(currentIndex);

      // Timer reset
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        // Scroll durduktan 3sn sonra en yakın section’a kaydır
        const snapIndex = Math.round(window.scrollY / window.innerHeight);
        const newY = snapIndex * window.innerHeight;

        window.scrollTo({
          top: newY,
          behavior: "smooth",
        });
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Buton → bir sonraki section
  const scrollToSection = () => {
    const nextIndex = sectionIndex + 1;
    const newY = nextIndex * window.innerHeight;

    window.scrollTo({
      top: newY,
      behavior: "smooth",
    });
  };

  const isLastSection = sectionIndex >= sectionCount - 1;

  return (
    <div
    onClick={scrollToSection}
    style={{
        position: "fixed",
        bottom: "2.5dvh",        
        left: "50%",
        transform: "translateX(-50%)",
        padding: "1dvh 2dvw",    
        background: "none",
        color: "white", 
        cursor: "pointer",
        zIndex: 9999,
        opacity: isLastSection ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: isLastSection ? "none" : "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}
    >
      <FaAnglesDown />
    </div>
  );
}
