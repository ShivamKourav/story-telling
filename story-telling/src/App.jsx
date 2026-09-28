import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Reveal from "./components/Reveal";
import Ending from "./components/Ending";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll />

      <main className="bg-black text-white">
        <Navbar />

        <div id="home">
          <Hero />
        </div>

        <div id="story">
          <Story />
        </div>

        <Reveal />

        <Ending />

        <Footer />
        
      </main>
    </>
  );
}

export default App;