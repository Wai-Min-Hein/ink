import { IoEarthOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GrMapLocation } from "react-icons/gr";

const ContactUs = () => {
  return (
    <section className="container mx-auto w-screen flex items-center justify-between gap-4">
      <div className="basis-1/2">
        <div className="">
          <p>Contact us</p>
          <h1>Get in touch</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            eos nesciunt dicta architecto consequuntur fuga voluptates quibusdam
            cumque sapiente doloribus, nisi minima voluptatem iure pariatur.
          </p>
        </div>

        <div className="flex items-start justify-between">
          <div className="basis-1/2">
            <div className="flex items-start justify-start gap-2 basis-2/5 mb-6">
              <LuPhoneCall size={52} />
              <div className="">
                <h6>Phone</h6>
                <p>09876543212</p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-2">
              <GrMapLocation size={52} />
              <div className="">
                <h6>Address</h6>
                <p>99 Roving St., Big City, PKU 23456</p>
              </div>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="flex items-start justify-start gap-2 basis-2/5 mb-6">
              <IoEarthOutline size={52} />
              <div className="">
                <h6>Website</h6>
                <p>https://inktattoo.vercel.app/</p>
              </div>
            </div>

            <div className="flex items-start justify-start gap-2">
              <SlEnvolopeLetter size={52} />
              <div className="">
                <h6>Email</h6>
                <p>info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>



        <div className="">
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

        <div className="border border-white w-2/3 h-4/5 rounded-md py-20 shadow-md grid place-items-center">

            <h1 className="pb-6 border-b bprder-white">Thank you</h1>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
