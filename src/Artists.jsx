import { useEffect, useState } from "react";
import Team from "./components/Team";
import Whyus from "./components/Whyus";
import bg from "/images/hero-image.png";
import Loader from "./components/Loader";

import axios from "axios";


import { useSelector, useDispatch } from "react-redux";
import {
  dataFetchFailure,
  dataFetchStart,
  dataFetchSuccess,
} from "./userSlice/dataFetchSlice";

const Artists = () => {
  
 


  const { loading } = useSelector((state) => state.dataFetch);


  const dispatch = useDispatch();
 
  useEffect(() => {
    const getData = async () => {
      dispatch(dataFetchStart());
      console.log('team fetch start')


      try {
        const res = await axios.get(
          "https://render-2pmo.onrender.com/api/artist"
        );
        dispatch(dataFetchSuccess());

        console.log('team fetch success')
      } catch (error) {
        dispatch(dataFetchFailure("Cannot get data"));
        console.log('team fetch fail')

      }
    };

    getData();
  }, []);

  



  return (
    <>
      {loading ? <Loader />:(
          <main className="">
          <section
            style={{
              backgroundImage: `url(${bg})`,
            }}
            className={`relative  h-[40vh] object-cover bg-center bg-cover z-20 `}
          >
            <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-40 w-full h-full"></div>
  
            <div className="relative z-40 grid place-items-center h-full">
              <div className="">
                <h1>Contact Us</h1>
                <p className="text-center">Home/ Team</p>
              </div>
            </div>
          </section>
  
          <Team />
  
          <Whyus />
        </main>
      )}

    
    </>
  );
};

export default Artists;
