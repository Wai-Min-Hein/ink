import About from "./components/About";
import Artwork from "./components/Artwork";
import BlogComponent from "./components/BlogComponent";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Whyus from "./components/Whyus";
import Team from "./components/Team";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import axios from "axios";


import { useSelector, useDispatch } from "react-redux";
import {
  dataFetchFailure,
  dataFetchStart,
  dataFetchSuccess,
} from "./userSlice/dataFetchSlice";

const App = () => {
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });

  const [artists, setArtists] = useState([]);


  const { loading } = useSelector((state) => state.dataFetch);

  const dispatch = useDispatch();
 
  useEffect(() => {
    const getData = async () => {
      dispatch(dataFetchStart());

      try {
        const res = await axios.get(
          "https://render-2pmo.onrender.com/api/blog"
        );
        dispatch(dataFetchSuccess());
        setArtists(res.data.data);
      } catch (error) {
        dispatch(dataFetchFailure("Cannot get data"));
      }
    };

    getData();
  }, []);

  


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
