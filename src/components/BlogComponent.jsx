import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogComponent = () => {
  const nav = useNavigate();

  const blogs = [
    {
      id: 1,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
  ];

  const selectedBlogs = blogs.slice(0, 2);
  return (
    <section className="flex items-start justify-between container mx-auto mt-32 w-screen gap-4">
      <div className="basis-[35%]">
        <p className="text-xl italic font-[500] capitalize">Checkout our</p>
        <h1 className="my-4 leading-[1.2] tracking-wider text-5xl font-[500]">
          Blogs & News
        </h1>
        <p className="text-md text-[1.2rem] tracking-normal leading-tight">
          Delve into our insights, trends, and tips curated by our experts. Stay
          informed, inspired, and connected with the latest in the tattoo world
        </p>
        <button className="nBtn mt-4">View all News</button>
      </div>
      <div className="photo flex-1 flex items-center justify-between">
        {selectedBlogs.map((blog) => (
          <div className="basis-[49%]" key={blog.id}>
            <div className="">
              <img
                src={blog.img}
                className="w-full h-60 object-cover mb-4 rounded-md"
                alt=""
              />
            </div>
            <h6 className="my-4 text-lg font-[500] px-4 tracking-wider">
              {blog.title}
            </h6>

            <div className="flex gap-3 items-center justify-start px-4">
              <FaCalendarAlt />
              <p className="tracking-wide">September 12, 2022</p>
            </div>
            <p className="text-lg font-normal tracking-wide leading-tight px-4 py-4">
              {blog.para}
            </p>

            <div className="px-4">

            <button className="px-4 border border-white rounded-sm py-2" onClick={() => nav(`/blogs/${blog.id}`)}>Read More</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogComponent;
