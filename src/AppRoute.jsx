import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Artists from "./Artists";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import BlogDetails from "./components/BlogDetails";
import ArtistDetail from "./components/ArtistDetail";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/team" element={<Artists />} />
      <Route path="/team/:id" element={<ArtistDetail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoute;
