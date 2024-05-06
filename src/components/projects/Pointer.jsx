import { useState, useEffect } from "react";

const SIZE = 384;

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function updateMousePosition(e) {
    // Sacar posición inicial de main
    const $main = document.querySelector("main").getBoundingClientRect();

    const x = e.clientX - SIZE / 2;
    const y = e.clientY - $main.top - SIZE / 2;

    setPosition({ x, y });
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const { x, y } = position;

  const positions = {
    x: `${x}px`,
    y: `${y}px`,
  };

  return (
    <div
      className={`transition size-96 bg-[#8214ef] rounded-full absolute blur-3xl opacity-20`}
      style={{ left: positions.x, top: positions.y }}
    ></div>
  );
}

/*
background: radial-gradient(600px at 1016px 2212px, rgba(29, 78, 216, 0.15), transparent 80%);
*/
