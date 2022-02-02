// import Home from "./pages/Home/Home"
import Watch from "./pages/Watch/Watch";
// import Login from "./pages/Login/Login"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
    <Outlet/>
    </>
  );
}

export default App;
