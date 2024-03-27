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
            <span>
              {" "}
              1,250 <sup>+</sup>
            </span>
            <span className="block">SATISFY CUSTOMERS</span>
          </h6>
        </div>
      </div>
      <div className="content  basis-1/2">
        <p className="text-xl italic font-[500]">Why Choose us</p>
        <h1 className="my-4 leading-[1.2] tracking-wider text-5xl font-[500]">
          ALWAYS PROVIDE SATISFACTORY WORK
        </h1>
        <p className="text-md text-[1.2rem] tracking-wide leading-tight">
          Exceptional artistry, personalized service, and a dedication to
          exceeding your tattoo expectations define our commitment From design
          to execution, we maintain the highest standards of artistry and
          hygiene for your safety and satisfaction.
          <br />
          <br />
          We go above and beyond to ensure your satisfaction, providing a
          welcoming atmosphere and attentive service from start to finish.Your
          vision is our priority. We collaborate closely with you to ensure your
          tattoo reflects your unique style and personality.
        </p>

        <div className="mt-6">
          <div className="">
            <h6 className="mb-2 text-lg font-[500] tracking-widest">
              Experience
            </h6>
            <div className="p-[.2rem]  overflow-hidden bg-transparent relative z-10">
              <div className="bg-white w-[90%] h-full absolute z-20 top-0 left-0"></div>
            </div>
          </div>

          <div className="my-4">
            <h6 className="mb-2 text-lg font-[500] tracking-widest">Tattoo</h6>
            <div className="p-[.2rem]  overflow-hidden bg-transparent relative z-10">
              <div className="bg-white w-[82%] h-full absolute z-20 top-0 left-0"></div>
            </div>
          </div>

          <div className="">
            <h6 className="mb-2 text-lg font-[500] tracking-widest">Price</h6>
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
