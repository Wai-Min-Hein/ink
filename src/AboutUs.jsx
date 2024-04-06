import { useMediaQuery } from "react-responsive";
import About from "./components/About";
import Team from "./components/Team";
import Whyus from "./components/Whyus";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import Loader from "./components/Loader";



import bg from "/images/hero-image.png";
import { useEffect } from "react";


import { useSelector, useDispatch } from 'react-redux'
import { fetchFail, fetchStart, fetchSuccess } from "./FetchingSlice/FetchingSlice";
import axios from "axios";

const AboutUs = () => {
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
 
  const {loading} = useSelector(state => state.fetch)


  const dispatch = useDispatch()

  const fetchArtworks = async () => {
    fetchStart()

    try {
    const res = await axios.get('https://fakestoreapi.com/products')
    const data = res.data

    data && dispatch(fetchSuccess())

    console.log(data)

      
    } catch (error) {

      dispatch(fetchFail())

      console.log(error)
      
    }
  }

  useEffect(() => {
    fetchArtworks()
  }, [])

  return (
    <>

    {loading ? <Loader />: (
      <main className="">
      

      <section
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className={`relative h-[40vh] object-cover bg-center bg-cover z-20 `}
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
      {lg? (
          <div className="flex flex-col overflow-hidden">
          <ContainerScroll titleComponent={
          
          <></>
        }
        >
        <About />
  
  
        </ContainerScroll>
        </div>
        ): <About/>}
      <Team/>
    </main>
    )}
    

    </>
  );
};

export default AboutUs;
