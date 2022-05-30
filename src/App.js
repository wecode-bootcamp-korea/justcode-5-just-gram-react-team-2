import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductAll from "./pages/ProductAll";
import Cmment from "./pages/cmmentList";

function App() {
  const [authenticate, setauthenticate] = useState(false);
  useEffect(() => {
    console.log("Aaaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setauthenticate={setauthenticate} />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/" element={<ProductAll />} /> */}
        {/* <Route path="/" element={<Cmment />} /> */}
      </Routes>
    </div>
  );
}

export default App;
