import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to meMy Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to meMy Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to meMy Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to meMy Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
  ];

  const currentBlog = blogs.filter((blog) => blog.id == id);
  const { title, img, para } = currentBlog[0];

  return (
    <section className="w-screen overflow-hidden">
      <div className=" container mx-auto">
        <h1>{title}</h1>

        <img
          src={img}
          alt=""
          className="w-screen object-cover rounded-md mt-8"
        />

        <p className="text-lg mt-4">{para}</p>
      </div>
    </section>
  );
};

export default BlogDetails;
