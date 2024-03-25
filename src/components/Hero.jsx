import bg from "/images/hero-image.png";


const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className={`relative w-screen h-screen object-cover bg-center bg-cover z-20 `}
    >
      <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-40 w-full h-full"></div>


      <div className="z-50 relative flex justify-center pt-[20vh]  container mx-auto">
        <div className="text-center">
        <p>We are here for you</p>
        <h1 className="uppercase">Ink Tattoo studio</h1>
        <p className="w-2/3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis possimus id corrupti? Obcaecati, asperiores aperiam in omnis quod impedit corrupti corporis, itaque quae.</p>
        
        <button className="inline-block">About us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
