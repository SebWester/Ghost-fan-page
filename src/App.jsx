import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Start/Start";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
