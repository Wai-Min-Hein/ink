import { useParams } from "react-router-dom";
import bg from "/images/hero-image.png";
import BlogComponent from "./BlogComponent";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import {
  dataFetchFailure,
  dataFetchStart,
  dataFetchSuccess,
} from "../userSlice/dataFetchSlice";
import { LayoutGrid } from "./ui/layout-grid";

const ArtistDetail = () => {
  const { loading } = useSelector((state) => state.dataFetch);

  const dispatch = useDispatch();

  const { id } = useParams();

  const [artist, setArtist] = useState([]);

  useEffect(() => {
    dispatch(dataFetchStart());

    try {
      const getData = async () => {
        const res = await axios.get(
          `https://render-2pmo.onrender.com/api/artist/${id}`
        );
        setArtist(res.data.artistData);
        dispatch(dataFetchSuccess());
      };

      getData();
    } catch (error) {
      dispatch(dataFetchFailure("Cannot get data"));
    }
  }, []);

  const { artWorks } = artist;

  // Calculate the size of each chunk
  const chunkSize = Math.ceil(artWorks && artWorks.length / 3);

  // Split the array into chunks
  const chunkedArrays = [];
  if (artWorks) {
    for (let i = 0; i < artWorks.length; i += chunkSize) {
      const chunk = artWorks.slice(i, i + chunkSize);
      chunkedArrays.push(chunk);
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className=" ">
          <section
            style={{
              backgroundImage: `url(${bg})`,
            }}
            className={`relative  h-[40vh] object-cover bg-center bg-cover z-20 `}
          >
            <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-40 w-full h-full"></div>

            <div className="relative z-40 grid place-items-center h-full">
              <div className="">
                <h1>About of {artist.name}</h1>
                <p className="text-center">Home/ {artist.name}</p>
              </div>
            </div>
          </section>

          <section className="container mx-auto">
            <div className="text-center">
              <p>some of {artist.name} `s</p>
              <h1>Amazing Artworks</h1>
              <p className="w-3/4 mx-auto">
              Immerse yourself in our gallery of stunning tattoos, each a testament to our artists`s creativity, skill, and dedication to craft
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 min-h-[80vh] mt-20">
              {chunkedArrays?.map((array, index) => (
                <LayoutGrid key={index} cards={array} />
              ))}
            </div>
          </section>
          <BlogComponent />
        </main>
      )}
    </>
  );
};

export default ArtistDetail;
