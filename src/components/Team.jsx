import { FaFacebook } from "react-icons/fa6";
import { SiViber } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

const Team = () => {
  const artists = [
    {
      id: 1,
      name: "Wai Yan",
      position: "Founder",
      img: "https://i.pinimg.com/236x/d3/d0/0f/d3d00fe65e0f381657a47c8beecfa1a3.jpg",
      fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      viber:
        "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      phone: "098765432123",
    },
    {
      id: 2,
      name: "Wai Yan",
      position: "Founder",
      img: "https://i.pinimg.com/236x/d3/d0/0f/d3d00fe65e0f381657a47c8beecfa1a3.jpg",
      fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      viber:
        "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      phone: "098765432123",
    },
    {
      id: 3,
      name: "Wai Yan",
      position: "Founder",
      img: "https://i.pinimg.com/236x/d3/d0/0f/d3d00fe65e0f381657a47c8beecfa1a3.jpg",
      fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      viber:
        "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      phone: "098765432123",
    },
  ];
  return (
    <section className="container mx-auto mt-20">
      <div className="text-center">
        <p>our team</p>
        <h1>Aweasome Artists</h1>
        <p className="w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore
          id quibusdam est, amet dolore nam voluptatem nihil temporibus,
          nesciunt quasi ex eligendi, sed natus cum voluptas soluta laudantium
          voluptatibus!
        </p>
      </div>

      <div className="flex items-center justify-between mt-8">
        {artists.map((artist) => (
          <div
            style={{
              backgroundImage: `url(${artist.img})`,
            }}
            className="object-cover w-full h-[30rem] rounded-md bg-center bg-cover bg-no-repeat basis-[30%]"
            key={artist.id}
          >
            <div className="flex flex-col items-center mt-[80%]">
              <h6>{artist.name}</h6>
              <p>{artist.position}</p>
              <div className="flex gap-4">
                <FaFacebook size={24}/>
                <SiViber size={24}/>
                <FiPhoneCall size={24}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid place-items-center mt-8">

      <button className="">View all Team</button>
      </div>

    </section>
  );
};

export default Team;
