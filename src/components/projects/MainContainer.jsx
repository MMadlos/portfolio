import { useState, useEffect } from "react";

const SIZE = 300;

export default function MainContainer({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function updateMousePosition(e) {
    const $main = document.querySelector("main").getBoundingClientRect();

    const x = e.clientX;
    const y = e.clientY - $main.top;

    setPosition({ x, y });
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const styles = {
    background: `radial-gradient(${SIZE}px at ${position.x}px ${position.y}px, rgba(51, 8, 94, 1)
    , #1E0E2E 100%)`,
  };

  return (
    <main className=" px-12  py-12 relative overflow-hidden" style={styles}>
      {children}
    </main>
  );
}
