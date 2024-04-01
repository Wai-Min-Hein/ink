import About from "./components/About";
import Artwork from "./components/Artwork";
import BlogComponent from "./components/BlogComponent";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Whyus from "./components/Whyus";
import Team from "./components/Team";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <main className="">
      <Hero />

      {lg ? (
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll titleComponent={<></>}>
            <About />
          </ContainerScroll>
        </div>
      ) : (
        <About />
      )}

      <Service />
      <Whyus />
      <Artwork />
      <Team />
      <BlogComponent />
    </main>
  );
};

export default App;
