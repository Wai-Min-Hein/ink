import { useEffect, useState } from "react";
import ContactUs from "./components/ContactUs";
import bg from "/images/hero-image.png";
import Loader from "./components/Loader";

const Contact = () => {

  
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (

    <>

    {loader ? <Loader />:(
      <main  className="">
      <section
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className={`relative h-[40vh] object-cover bg-center bg-cover z-20 `}
      >
        <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-40 w-full h-full"></div>

        <div className="relative z-40 grid place-items-center h-full">
          <div className="">
            <h1>Contact Us</h1>
            <p className="text-center">Home/ Contact</p>
          </div>
        </div>
      </section>

      <ContactUs/>


    </main>
    )}
    

    </>
  )
}

export default Contact
