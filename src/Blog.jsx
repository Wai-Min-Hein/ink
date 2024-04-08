import { FaCalendarAlt } from "react-icons/fa";

import bg from "/images/hero-image.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";

import { useSelector, useDispatch } from "react-redux";
import {
  dataFetchFailure,
  dataFetchStart,
  dataFetchSuccess,
} from "./userSlice/dataFetchSlice";

const Blog = () => {
  const { loading } = useSelector((state) => state.dataFetch);

  const dispatch = useDispatch();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    dispatch(dataFetchStart());

    try {
      const getData = async () => {
        const data = await axios.get(
          "https://render-2pmo.onrender.com/api/blog"
        );
        setBlogs(data.data.data);
      };
      dispatch(dataFetchSuccess());

      getData();
    } catch (error) {
      dispatch(dataFetchFailure("Cannot get data"));
    }
  }, []);

  const nav = useNavigate();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                <h1>Our Services</h1>
                <p className="text-center">Home/ Blogs</p>
              </div>
            </div>
          </section>

          <section className="container mx-auto mt-16">
            <div className="text-center pb-16">
              <p className="text-[1.05rem] md:text-[1.1rem] lg:text-xl font-[500] italic capitalize">
                Check out ours
              </p>
              <h1 className="uppercase text-xl ssm:text-3xl sm:text-[2.5rem] md:text-5xl lg:text-7xl font-semibold tracking-widest py-4">
                Blogs & News
              </h1>

              <p className="w-3/4 mx-auto text-md text-[1.2rem] tracking-normal leading-tight sm:w-full px-3 sm:px-6 md:px-0 md:w-4/5 lg:w-2/3">
                Delve into our insights, trends, and tips curated by our
                experts. Stay informed, inspired, and connected with the latest
                in the tattoo world
              </p>
            </div>

            <div className="photo flex-1 flex items-center justify-between flex-wrap gap-8">
              {blogs.map((blog) => (
                <div
                  className="basis-[95%] mx-auto ssm:mx-0 ssm:basis-[46%] lg:basis-[30%]"
                  key={blog._id}
                >
                  <div className="">
                    <img
                      src={blog.img}
                      className="w-full h-80 object-cover mb-4 rounded-md"
                      alt=""
                    />
                  </div>
                  <h6 className="my-4 text-lg font-[500] md:px-4 tracking-wider">
                    {blog.title}
                  </h6>

                  <div className="flex gap-3 items-center justify-start md:px-4">
                    <FaCalendarAlt />
                    <p className="tracking-wide">September 12, 2022</p>
                  </div>
                  <p className="text-lg font-normal tracking-wide leading-tight md:px-4 py-4"></p>

                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: blog.para.slice(0, 100),
                    }}
                  ></div>

                  <div className="px-4">
                    <button
                      className="px-4 border border-white rounded-sm py-2"
                      onClick={() => nav(`/blogs/${blog._id}`)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Blog;
