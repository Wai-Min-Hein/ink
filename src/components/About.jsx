const About = () => {
  return (
    <section className="flex items-start justify-start gap-12  container mx-auto mt-32 w-screen h-screen">
      <div className="content  basis-[37%]">
        <p>About Ink</p>
        <h1 className="my-4 leading-[1.2]">WE ARE THE COOLEST TATTOO STUDIO</h1>
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
      <div className="photo flex-1 relative">
        <div className="relative z-10">
          <img
            src="/images/about-image.png"
            className="w-4/5 h-screen object-cover"
            alt=""
          />
        </div>

        <div className="absolute z-20 border border-white bg-black px-8 py-6 w-1/2 top-20 right-0">
          <h6 className="text-center">Working Hours</h6>

          <div className="flex flex-col gap-5 mt-8">
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-dashed pb-2">
              <h6>Monday</h6>
              <p>09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
