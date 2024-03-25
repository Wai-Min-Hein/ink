import About from "./components/About";
import Team from "./components/Team";
import Whyus from "./components/Whyus";

import bg from "/images/hero-image.png";

const AboutUs = () => {
  return (
    <main className="w-screen overflow-hidden">
      

      <section
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className={`relative w-screen h-[40vh] object-cover bg-center bg-cover z-20 `}
      >
        <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-40 w-full h-full"></div>

        <div className="relative z-40 grid place-items-center h-full">
          <div className="">
            <h1>About Ink</h1>
            <p className="text-center">Home/ about</p>
          </div>
        </div>
      </section>
      <Whyus />
      {/* <Service/> */}
      <About/>
      <Team/>
    </main>
  );
};

export default AboutUs;
