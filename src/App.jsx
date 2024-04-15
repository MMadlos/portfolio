import "./App.css";

import About from "./components/about/About";
import Projects from "./components/Z_Archived/Projects";

function App() {
  return (
    <div className="sm:flex sm:flex-row sm:h-dvh sm:overflow-y-hidden">
      {/* <About /> */}
      <Projects />
    </div>
  );
}

export default App;
