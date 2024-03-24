const Whyus = () => {
  return (
    <section className="flex items-start justify-start gap-12  container mx-auto">
      <div className="photo flex-1 relative">
        <div className="relative z-10">
          <img
            src="/images/why-us.png"
            className="w-full h-[95vh] object-cover"
            alt=""
          />
        </div>

        <div className="absolute z-20 border border-white bg-black px-6 py-16 w-1/2 top-20 left-[-8rem]">
          <h6 className="text-center">
           <h1> 1,250 <sup>+</sup></h1> 
            <h6 className="block">SATISFY CUSTOMERS</h6>
          </h6>
        </div>
      </div>
      <div className="content  basis-1/2">
        <p>Why Choose us</p>
        <h1 className="my-4 leading-[1.2]">ALWAYS PROVIDE SATISFACTORY WORK</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde velit
          eum tempore voluptate harum accusantium inventore cupiditate ipsa sem
          malesuada dignissim facere.
        </p>

        <div className="mt-6">
          <div className="flex items-center justify-start gap-4">
            <div className="">
              <img src="/images/about-logo1.png" className="h-14 " alt="" />
            </div>
            <div className="">
              <h3 className="text-md tracking-wide">
                IMPECCABLE TATTOO QUALITY
              </h3>
              <p>Nunc et erat sed orci ultrices egestas a sit amet odio.</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 my-6">
            <div className="">
              <img src="/images/about-logo2.png" className="h-14 " alt="" />
            </div>
            <div className="">
              <h3 className="text-md tracking-wide">
                IMPECCABLE TATTOO QUALITY
              </h3>
              <p>Nunc et erat sed orci ultrices egestas a sit amet odio.</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-4">
            <div className="">
              <img src="/images/about-logo3.png" className="h-14 " alt="" />
            </div>
            <div className="">
              <h3 className="text-md tracking-wide">
                IMPECCABLE TATTOO QUALITY
              </h3>
              <p>Nunc et erat sed orci ultrices egestas a sit amet odio.</p>
            </div>
          </div>
        </div>
        <button className="mt-12">More About Us</button>
      </div>
    </section>
  );
};

export default Whyus;
