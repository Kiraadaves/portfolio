import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
