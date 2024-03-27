import About from "./components/About";
import Artwork from "./components/Artwork";
import BlogComponent from "./components/BlogComponent";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Whyus from "./components/Whyus";
import Team from "./components/Team";

const App = () => {
  return (
    <main className="w-screen overflow-hidden">
      <Hero />
      <About/>
      <Service/>
      <Whyus/>
      <Artwork/>
      <Team/>
      <BlogComponent/>
    </main>
  );
};

export default App;
