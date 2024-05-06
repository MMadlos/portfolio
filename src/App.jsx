import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ProjectList from "./components/projects/ProjectList";

function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <ProjectList />
      <Footer />
    </>
  );
}

export default App;
