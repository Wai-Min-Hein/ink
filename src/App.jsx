import About from "./components/About";
import Artwork from "./components/Artwork";
import BlogComponent from "./components/BlogComponent";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Team from "./components/Team";

const App = () => {
  return (
    <main className="w-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Artwork/>
      <Team/>
      <BlogComponent/>
    </main>
  );
};

export default App;
