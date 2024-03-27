import { FaFacebook } from "react-icons/fa6";
import { SiViber } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

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
      artWorks: [
        {
          img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
      ],
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
      artWorks: [
        {
          img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
      ],
      
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
      artWorks: [
        {
          img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
      ],
      
    },
    {
      id: 4,
      name: "Wai Yan",
      position: "Founder",
      img: "https://i.pinimg.com/236x/d3/d0/0f/d3d00fe65e0f381657a47c8beecfa1a3.jpg",
      fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      viber:
        "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
      phone: "098765432123",
      artWorks: [
        {
          img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
        {
          img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
          title: 'CAUCASIAN GUY WITH FULL TATTOO'
        },
      ],
      
    },
  ];

  const location = useLocation();

  const nav = useNavigate()

  const pathname  = location.pathname

  const homeRoute = pathname == '/'

  


  const limitedArtist = pathname == '/' ? artists.slice(0, 3): artists
  return (
    <section className="container mx-auto mt-20">
      <div className="text-center">
        <p>our team</p>
        <h1>Aweasome Artists</h1>
        <p className="w-3/4 mx-auto">
        Meet our team of skilled artisans, each bringing a unique flair and passion to their craft, ensuring your tattoo vision is brought to life with unparalleled expertise
        </p>
      </div>

      <div className="flex items-center justify-between mt-8 flex-wrap gap-y-6">
        {limitedArtist.map((artist) => (
          <div
          onClick={() => nav(`/team/${artist.id}`)}
            style={{
              backgroundImage: `url(${artist.img})`,
            }}
            className="object-cover w-full h-[30rem] rounded-md bg-center bg-cover bg-no-repeat basis-[30%] cursor-pointer"
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
        {
          homeRoute && 
      <button onClick={() => nav('/team')} className="">View all Team</button>
        }

      </div>

    </section>
  );
};

export default Team;
