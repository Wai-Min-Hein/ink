import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Artists from "./Artists";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoute;
