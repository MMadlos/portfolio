import { useState, useEffect } from "react";

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
    background: `radial-gradient(40vh at ${position.x}px ${position.y}px, rgba(51, 8, 94, 0.75)
    , transparent 100%),
    #1E0E2E`,
  };

  return (
    <main className=" px-12 py-20 relative overflow-hidden" style={styles}>
      {children}
    </main>
  );
}
