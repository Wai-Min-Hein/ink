import { MdMenu, MdClose } from "react-icons/md";

import axios from "axios";

import { Link } from "react-router-dom";
// import logo from "/images/white-logo.png";
import logo from "../public/images/golden-logo.png";
import { useEffect, useState } from "react";

import { TextInput, Button, Group, Box, Table } from "@mantine/core";
import Loader from "./components/Loader";

import { useSelector, useDispatch } from "react-redux";
import {
  dataFetchFailure,
  dataFetchStart,
  dataFetchSuccess,
} from "./userSlice/dataFetchSlice";
import {  logOutFailure, logOutStart, logOutSuccess } from "./userSlice/userSlice";

const AdminArtists = () => {
  const { loading } = useSelector((state) => state.dataFetch);


  const dispatch = useDispatch();

  const handleLogout=async () => {
    dispatch(logOutStart())
    try {

      const res = await axios.post('https://render-2pmo.onrender.com/api/auth/logout')

      if(res.data) dispatch(logOutSuccess())

      
    } catch (error) {
      console.log(error)
      dispatch(logOutFailure(error.message))

      
    }
  }

  const [artists, setArtists] = useState([]);

  const [nav, SetNav] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    img: "",
    fb: "",
    viber: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    dispatch(dataFetchStart());

    e.preventDefault();
    const id = formData?._id;
    if (id) {
      try {
        const res = await axios.put(
          "https://render-2pmo.onrender.com/api/artist",
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
        console.log("Cannot create new artists");
        dispatch(dataFetchStart(error.message));
      }
    } else {
      try {
        const res = await axios.post(
          "https://render-2pmo.onrender.com/api/artist",
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
        console.log("Cannot create new artists");
        dispatch(dataFetchStart(error.message));
      }
    }
  };

  const handleEdit = (id) => {
    const currentArtist = artists.filter((artist) => artist._id == id)[0];

    setFormData({ ...currentArtist });
  };

  const handleDelete = async (id) => {
    dispatch(dataFetchStart());

    try {
      const res = await axios.post(
        "https://render-2pmo.onrender.com/api/artist/delete",
        { id }
      );

      dispatch(dataFetchSuccess());
    } catch (error) {
      dispatch(dataFetchFailure("Cannot delete data"));
      console.log("object");
    }
  };

  const rows = artists.map((element) => (
    <Table.Tr key={element._id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>
        <img
          src={element.img}
          alt="Artist image"
          className="w-16 h-16 object-cover"
        />
      </Table.Td>
      <Table.Td>{element.fb}</Table.Td>
      <Table.Td>{element.viber}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
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
        const res = await axios.get(
          "https://render-2pmo.onrender.com/api/artist"
        );
        dispatch(dataFetchSuccess());
        setArtists(res.data.data);
      } catch (error) {
        dispatch(dataFetchFailure("Cannot get data"));
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://render-2pmo.onrender.com/api/artist"
        );
        setArtists(res.data.data);
      } catch (error) {
        console.log("Cannot create new");
      }
    };

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
            <h1 className="text-center">Add New Artist</h1>

            <Box maw={340} mx="auto">
              <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                  withAsterisk
                  label="Name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  //  {...form.getInputProps("name")}
                />

                <TextInput
                  withAsterisk
                  label="Position"
                  required
                  placeholder="Position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />

                <TextInput
                  withAsterisk
                  label="Image"
                  required
                  placeholder="Artist's Image Link"
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
                <TextInput
                  withAsterisk
                  label="Facebook"
                  placeholder="Artist's Facebook Link"
                  value={formData.fb}
                  onChange={(e) =>
                    setFormData({ ...formData, fb: e.target.value })
                  }
                />

                <TextInput
                  withAsterisk
                  label="Viber"
                  placeholder="Artist's Viber Number"
                  value={formData.vb}
                  onChange={(e) =>
                    setFormData({ ...formData, vb: e.target.value })
                  }
                />

                <TextInput
                  withAsterisk
                  label="Phone"
                  placeholder="Artist's Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <Group justify="flex-end" mt="md">
                  <Button type="submit">Submit</Button>
                </Group>
              </form>
            </Box>
          </div>

          <Table.ScrollContainer minWidth={500}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Artist`s name</Table.Th>
                  <Table.Th>Artist`s position</Table.Th>
                  <Table.Th>Artist`s image</Table.Th>
                  <Table.Th>Artist`s facebook Link</Table.Th>
                  <Table.Th>Artist`s viber number</Table.Th>
                  <Table.Th>Artist`s phone number</Table.Th>
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

export default AdminArtists;
