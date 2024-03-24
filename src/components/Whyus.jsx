
const Whyus = () => {
  return (
    <section className="flex items-start justify-start gap-12  container mx-auto mt-20">
      <div className="photo flex-1 relative">
        <div className="relative z-10">
          <img
            src="/images/why-us.png"
            className="w-full h-[90vh] object-cover"
            alt=""
          />
        </div>

        <div className="absolute z-20 border border-white bg-black px-6 py-16 w-1/2 top-20 left-[-8rem]">
          <h6 className="text-center">
            <h1>
              {" "}
              1,250 <sup>+</sup>
            </h1>
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
          <div className="">
            <h6 className="mb-2">Experience</h6>
            <div className="p-[.2rem]  overflow-hidden bg-transparent relative z-10">
              <div className="bg-white w-[90%] h-full absolute z-20 top-0 left-0"></div>
            </div>
          </div>

          <div className="my-4">
            <h6 className="mb-2">Tattoo</h6>
            <div className="p-[.2rem]  overflow-hidden bg-transparent relative z-10">
              <div className="bg-white w-[82%] h-full absolute z-20 top-0 left-0"></div>
            </div>
          </div>

          <div className="">
            <h6 className="mb-2">Price</h6>
            <div className="p-[.2rem]  overflow-hidden bg-transparent relative z-10">
              <div className="bg-white w-[67%] h-full absolute z-20 top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
