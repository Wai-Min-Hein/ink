import About from "./components/About";
import Artwork from "./components/Artwork";
import BlogComponent from "./components/BlogComponent";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Whyus from "./components/Whyus";
import Team from "./components/Team";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Loader from "./components/Loader";
import axios from "axios";
import { fetchFail, fetchStart, fetchSuccess } from "./FetchingSlice/FetchingSlice";

const App = () => {
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
        <main className="relative z-20">
        <Hero />

        {lg ? (
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll titleComponent={<></>}>
              <About />
            </ContainerScroll>
          </div>
        ) : (
          <About />
        )}

        <Service />
        <Whyus />
        <Artwork />
        <Team />
        <BlogComponent />
      </main>
      )}

      
    </>
  );
};

export default App;
