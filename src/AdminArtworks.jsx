import { MdMenu, MdClose } from "react-icons/md";

import axios from "axios";
import { Select } from "@mantine/core";
import { Link } from "react-router-dom";
// import logo from "/images/white-logo.png";
import logo from "../public/images/golden-logo.png";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  dataFetchFailure,
  dataFetchStart,
  dataFetchSuccess,
} from "./userSlice/dataFetchSlice";

import { TextInput, Button, Group, Box, Table } from "@mantine/core";
import { useForm } from "@mantine/form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Loader from "./components/Loader";
import { logOut } from "./userSlice/userSlice";

const AdminArtworks = () => {
  const { loading } = useSelector((state) => state.dataFetch);

  const dispatch = useDispatch();

  const [nav, SetNav] = useState(false);

  const [formData, setFormData] = useState({
    img: "",
    artist: "",
  });

  const [artists, setArtists] = useState([]);
  const [artWorks, SetArtWorks] = useState([]);

  const handleSubmit = async (e) => {
    dispatch(dataFetchStart());

    e.preventDefault();
    const id = formData?._id
    if(id) {
      try {
        const res = await axios.put(
          "https://render-2pmo.onrender.com/api/artworks",
          formData
        );
        dispatch(dataFetchSuccess());
        setFormData({
          name: "",
          position: "",
          img: "",
          fb: "",
          viber: "",
          phone: "",
        });
      } catch (error) {
        console.log("Cannot create new artworkss");
        dispatch(dataFetchStart(error.message));
      }
    }
    else{
      try {
        const res = await axios.post(
          "https://render-2pmo.onrender.com/api/artworks",
          formData
        );
        dispatch(dataFetchSuccess());
        setFormData({
          name: "",
          position: "",
          img: "",
          fb: "",
          viber: "",
          phone: "",
        });
      } catch (error) {
        console.log("Cannot create new artworkss");
        dispatch(dataFetchStart(error.message));
      }
    }


    
  };

  const handleEdit = (id) => {
    const currentArtist = artWorks.filter((artWork) => artWork._id == id)[0];

    setFormData({ ...currentArtist });
  };

  const handleDelete = async (id) => {
    dispatch(dataFetchStart());

    try {
      const res = await axios.post(
        "https://render-2pmo.onrender.com/api/artworks/delete",
        { id }
      );

      console.log(id);

      dispatch(dataFetchSuccess());
    } catch (error) {
      dispatch(dataFetchFailure("Cannot delete data"));
      console.log("object");
    }
  };


  const handleLogout= () => {
    try {

      console.log('logout success')
      dispatch(logOut())
      
    } catch (error) {
      console.log('Error')
      
    }
  }

  const rows = artWorks.map((element) => (
    <Table.Tr key={element._id}>
      <Table.Td>{element.artist}</Table.Td>
      <Table.Td>
      <img
          src={element.img}
          alt="Artwork image"
          className="w-16 h-16 object-cover"
        />
      </Table.Td>
      <Table.Td>
        <div className="flex gap-2">
          <Button onClick={() => handleEdit(element._id)}>Edit</Button>
          <Button
            onClick={() => handleDelete(element._id)}
            className="!bg-red-500"
          >
            Delete
          </Button>
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  useEffect(() => {
    const getData = async () => {
      dispatch(dataFetchStart());
      try {
        const res = await axios.get("https://render-2pmo.onrender.com/api/artworks");
        dispatch(dataFetchSuccess());
        SetArtWorks(res.data);
      } catch (error) {
        dispatch(dataFetchFailure("Cannot get data"));
      }
    };

    const getAllArtists = async () => {
      dispatch(dataFetchStart());

      try {
        
     
      const res = await axios.get("https://render-2pmo.onrender.com/api/artist");
      const allArtistsData = res.data.data;
      dispatch(dataFetchSuccess());


      const artistNames = [...new Set(allArtistsData.map((item) => item.name))];
      setArtists(artistNames);
    } catch (error) {
      dispatch(dataFetchFailure("Cannot get data"));
        
    }

      
    };

    getAllArtists();

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://render-2pmo.onrender.com/api/artworks");
        SetArtWorks(res.data);
      } catch (error) {
        console.log('Cannot get data');
      }
    };

    const getAllArtists = async () => {

      try {
        
     
      const res = await axios.get("https://render-2pmo.onrender.com/api/artist");
      const allArtistsData = res.data.data;


      const artistNames = [...new Set(allArtistsData.map((item) => item.name))];
      setArtists(artistNames);
    } catch (error) {
      console.log('Cannot get data');
        
    }

      
    };

    getAllArtists();

    getData();
  }, [loading]);


  if (!formData.img?.includes("https://drive.google.com/thumbnail?id=")  ) {

 


  const fileIdIndex = formData.img.indexOf("/d/") + 3;
  const fileId = formData.img.substring(
    fileIdIndex,
    formData.img.indexOf("/", fileIdIndex)
  );
  const convertedLink = `https://drive.google.com/thumbnail?id=${fileId}`;

 formData.img.includes('https://drive.google.com') && setFormData({ ...formData, img: convertedLink });
} else {
  console.log("no drive img");
}

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <nav className="flex items-center justify-between sm:container sm:mx-auto px-4 md:px-8 lg:px-0 py-2 relative">
            <div className="flex items-center justify-start gap-3">
              <Link to={"/"}>
                <img src={logo} alt="" className="h-14  object-cover" />
              </Link>
              {/* <div className="">
          <h6>Ink Tattoo Stuido</h6>
        </div> */}
            </div>

            <div className="sm:flex items-center justify-between flex-1 hidden ">
              <ul className=" flex  items-center justify-center gap-6 lg:gap-12 flex-1 mx-auto text-[1.2] font-semibold leading-3 tracking-wider">
                <Link onClick={() => SetNav(false)} to={"/admin/artists"}>
                  <li className="cursor-pointer">Artists</li>
                </Link>

                

                <Link onClick={() => SetNav(false)} to={"/admin/artworks"}>
                  <li className="cursor-pointer">Art works</li>
                </Link>

                <Link onClick={() => SetNav(false)} to={"/admin/blogs"}>
                  <li className="cursor-pointer">Blogs</li>
                </Link>
              </ul>
              <div className="">
                <Link to={""}>
                  <button onClick={handleLogout} className="px-2 py-1 border border-white rounded-sm">
                    Log out
                  </button>
                </Link>
              </div>
            </div>
            <div className="block sm:hidden cursor-pointer">
              <MdMenu onClick={() => SetNav(true)} size={24} />
            </div>

            <div
              className={` sm:hidden  flex-col gap-y-6 justify-center flex-1 absolute top-0 right-0 overflow-auto z-50 bg-black w-full  py-8 ${
                nav ? "flex" : "hidden"
              }`}
            >
              <div className="text-right ml-auto pr-12">
                <MdClose
                  onClick={() => SetNav(false)}
                  size={24}
                  className="cursor-pointer"
                />
              </div>

              <ul className=" flex  flex-col items-center justify-center gap-6 lg:gap-12 flex-1 mx-auto text-[1.2] font-semibold leading-3 tracking-wider">
                <Link onClick={() => SetNav(false)} to={"/admin/artists"}>
                  <li className="cursor-pointer">Artists</li>
                </Link>

                <Link onClick={() => SetNav(false)} to={"/admin/blogs"}>
                  <li className="cursor-pointer">Blogs</li>
                </Link>

                <Link onClick={() => SetNav(false)} to={"/admin/artworks"}>
                  <li className="cursor-pointer">Art works</li>
                </Link>
              </ul>
              <div className="mx-auto">
                <Link to={""}>
                  <button onClick={handleLogout} className="px-2 py-1 border border-white rounded-sm">
                    Log out
                  </button>
                </Link>
              </div>
            </div>
          </nav>

          <div className="">
            <h1 className="text-center">Add New Artworks</h1>

            <Box maw={440} mx="auto">
              <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                  withAsterisk
                  label="Image"
                  required
                  placeholder="Artist's Image Link"
                  // {...form.getInputProps("img")}
                  value={formData.img}
                  onChange={(e) =>
                    setFormData({ ...formData, img: e.target.value })
                  }
                />

<div className={`${formData.img != "" ? "block" : "hidden"}`}>
                  <img
                    src={formData.img}
                    className="w-full h-32 object-cover mt-4 object-center"
                    alt="Image Link work, please enter correct image link"
                  />
                </div>
                <Select
                  className="mt-6"
                  onChange={(value) =>
                    setFormData({ ...formData, artist: value })
                  }
                  placeholder="Artist"
                  allowDeselect={false}
                  value={formData.artist}
                  defaultValue={artists[0]}
                  data={artists}
                />

                <Group justify="flex-end" mt="md">
                  <Button type="submit">Submit</Button>
                </Group>
              </form>
            </Box>
          </div>

          <Table.ScrollContainer className="mt-10" minWidth={500}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Artist</Table.Th>
                  <Table.Th>Artwork Image</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </main>
      )}
    </>
  );
};

export default AdminArtworks;
