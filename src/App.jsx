import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Start/Start";
import AlbumPage from "./components/Main/AlbumPage/AlbumPage";
import SongPage from "./components/Main/SongPage/SongPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:name" element={<AlbumPage />} />
          <Route path="/:name/:track" element={<SongPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
