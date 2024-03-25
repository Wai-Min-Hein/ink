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
    <section className="flex items-start justify-between container mx-auto mt-32 w-screen">
      <div className="basis-[35%]">
        <p>Checkout our</p>
        <h1>Blogs & News</h1>
        <p>
          My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie
          lies over the ocean. Oh, bring back my Bonnie to me.
        </p>
        <button>View all News</button>
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
            <div className="flex gap-3 items-center justify-start">
              <FaCalendarAlt />
              <p>September 12, 2022</p>
            </div>
            <h6 className="">{blog.title}</h6>
            <p>{blog.para}</p>

            <button  onClick={() => nav(`/blogs/${blog.id}`)}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogComponent;
