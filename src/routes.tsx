import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/buy";
import Explore from "./pages/explore";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/buy" element={<Buy />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
