const Artwork = () => {
  const artWorks = [
    {
      id: 1,
      img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/236x/c4/93/9d/c4939d5cf6251a0547927e219f62ffc2.jpg",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/236x/55/4c/1f/554c1f4907951081f314cbe101a4f50d.jpg",
    },
    {
      id: 9,
      img: "https://i.pinimg.com/236x/25/a0/fe/25a0feb0480de428f3b250ad60ae6c5e.jpg",
    },
    {
      id: 10,
      img: "https://i.pinimg.com/236x/ae/b0/63/aeb0635bbcb824d2a249dd0e3805c525.jpg",
    },
    {
      id: 11,
      img: "https://i.pinimg.com/236x/90/60/6d/90606d13aeb7ef53ab8f944062a27969.jpg",
    },
    {
      id: 12,
      img: "https://i.pinimg.com/236x/3a/dd/d4/3addd46f3713beef0c43a953279f2ce8.jpg",
    },
  ];
  // Calculate the size of each chunk
  const chunkSize = Math.ceil(artWorks.length / 3);

  // Split the array into chunks
  const chunkedArrays = [];
  for (let i = 0; i < artWorks.length; i += chunkSize) {
    const chunk = artWorks.slice(i, i + chunkSize);
    chunkedArrays.push(chunk);
  }

  return (
    <section className="container mx-auto">
      <div className="text-center">
        <p>some of our</p>
        <h1>Amazing Artworks</h1>
        <p className="w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempore
          id quibusdam est, amet dolore nam voluptatem nihil temporibus,
          nesciunt quasi ex eligendi, sed natus cum voluptas soluta laudantium
          voluptatibus!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 min-h-[130vh] mt-20">
        {chunkedArrays?.map((array, index) => (
          <div key={index} className="grid gap-4">
            {array.map((art, index) => (
              <div key={index} className="rounded-md overflow-hidden">
                <img
                  className=" w-full object-cover object-center"
                  src={art.img}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artwork;
