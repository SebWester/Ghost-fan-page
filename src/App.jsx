import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Start/Start";
import AlbumPage from "./components/Main/AlbumPage/AlbumPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:name" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
