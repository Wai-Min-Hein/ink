import bg from "/images/hero-image.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className={`relative w-screen h-screen object-cover bg-center bg-cover z-20 `}
    >
      <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-50 w-full h-full"></div>

      <div className="z-50 relative flex justify-center pt-[24vh]  container mx-auto">
        <div className="text-center">
          <p className="text-[1.05rem] md:text-[1.1rem] lg:text-xl font-[500] italic capitalize">
            We are here for you
          </p>
          <h1 className="uppercase text-xl ssm:text-3xl sm:text-[2.5rem] md:text-5xl lg:text-7xl font-semibold tracking-widest py-4">
            Ink Tattoo studio
          </h1>
          <p className=" sm:w-full px-3 sm:px-6 md:px-0 md:w-4/5 lg:w-2/3 mx-auto text-xl tracking-wider">
            Discover the artistry of Ink Studio. Where creativity thrives, and
            every tattoo is a masterpiece of self-expression.
          </p>

          <button className="inline-block mt-6 nBtn">See artworks</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
