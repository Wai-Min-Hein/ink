import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import {
  dataFetchFailure,
  dataFetchStart,
  dataFetchSuccess,
} from "../userSlice/dataFetchSlice";

const BlogDetails = () => {
  const { loading } = useSelector((state) => state.dataFetch);

  const dispatch = useDispatch();

  const [blog, setBlog] = useState({});


  const { id } = useParams();

  useEffect(() => {
    dispatch(dataFetchStart());

    try {
      const getData = async () => {
        const data = await axios.get(`https://render-2pmo.onrender.com/api/blog/${id}`);
        setBlog(data.data.data);
      };
      dispatch(dataFetchSuccess());

      getData();
    } catch (error) {
      dispatch(dataFetchFailure("Cannot get data"));
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="">
          <div className=" container mx-auto w-full md:w-3/4">
            <h1 className="my-4 leading-[1.2] tracking-wider text-[2.75rem] font-[500]">
              {blog.title}
            </h1>

            <img
              src={blog.img}
              alt=""
              className="w-full md:w-3/5 object-cover rounded-md mt-8"
            />

            

            <div className="" dangerouslySetInnerHTML={{__html: blog.para}}>
                
                </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogDetails;
