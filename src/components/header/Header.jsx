import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const screenHeight = window.innerHeight;

  function handleNavBar() {
    const currentScrollY = window.scrollY;
    setIsVisible(
      currentScrollY < screenHeight ||
        lastScrollY > currentScrollY ||
        currentScrollY < 10
    );

    setLastScrollY(currentScrollY);
  }

  function handleMouseMove(e) {
    if (isVisible) return;

    const mouseY = e.clientY;
    if (mouseY < 40) {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavBar, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent ">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-2 px-4 sm:px-4 sm:py-1 flex gap-8 items-center  bg-white/50 backdrop-blur-2xl mx-auto justify-between "
          >
            <h1 className="hidden sm:block text-2xl tracking-tighter font-bold pl-2 text-black ">
              Michael Madlos
            </h1>

            <h1 className="sm:hidden text-2xl tracking-tighter font-extrabold text-black ">
              MM
            </h1>

            <div className="flex gap-4 ">
              <a
                href="https://www.linkedin.com/in/michaelmadlos/"
                className="flex items-center font-semibold text-sm sm:font-medium sm:px-4 sm:py-2 hover:text-emerald-500"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MMadlos"
                className="flex items-center font-semibold text-sm sm:font-medium sm:px-4 sm:py-2 hover:text-emerald-500"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
