import { IoEarthOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GrMapLocation } from "react-icons/gr";

const ContactUs = () => {
  return (
    <section className="container mx-auto w-screen flex items-center justify-between gap-4 mt-6">
      <div className="basis-1/2">
        <div className="">
          <p className="text-xl italic font-[500] capitalize">Contact us</p>
          <h1 className="my-4 leading-[1.2] tracking-wider text-5xl font-[500]">
            Get in touch
          </h1>
          <p className="text-md text-[1.2rem] tracking-wide leading-tight">
            Ready to start your tattoo journey? Reach out for appointments,
            questions, or consultations. We are here to make your vision a
            reality.
          </p>
        </div>

        <div className="flex items-start justify-between mt-8">
          <div className="basis-1/2">
            <div className="flex items-start justify-start gap-2 basis-2/5 mb-6">
              <LuPhoneCall size={52} />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Phone</h6>
                <p className="text-lg tracking-normal">09876543212</p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-2">
              <GrMapLocation size={52} />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Address</h6>
                <p className="text-lg tracking-normal">
                  99 Roving St., Big City, PKU 23456
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="flex items-start justify-start gap-2 basis-2/5 mb-6">
              <IoEarthOutline size={52} />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Website</h6>
                <p className="text-lg tracking-normal">
                  https://inktattoo.vercel.app/
                </p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-2">
              <SlEnvolopeLetter size={52} />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Email</h6>
                <p className="text-lg tracking-normal">info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between border-b-2 border-dashed py-5">
            <h6>Mon - Fri</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-b-2 border-dashed py-5">
            <h6>Saturday</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-5">
            <h6>Sunday</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 mx-auto grid place-items-center">
        <div className="border border-white w-3/5 h-4/5 rounded-md py-20 shadow-md">
          <h1 className="pb-6 border-b bprder-white px-8 text-4xl">
            Thank for intresting
          </h1>

          <div className="px-8 text-xl">
            <p>We will be in touch.</p>
            <p>Shortly!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
