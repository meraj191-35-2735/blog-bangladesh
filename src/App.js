import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="px-5">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
