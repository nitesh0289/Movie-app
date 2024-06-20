import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../layouts/Main";
import Video from "../pages/video";
import Home from "../pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
