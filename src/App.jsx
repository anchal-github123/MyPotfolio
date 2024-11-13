import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skil from "./Components/Skil";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
export const App=()=>{
  return(<>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" Component={Home}></Route>
    <Route path="/About" Component={About}></Route>
    <Route path="/Skil" Component={Skil}></Route>
    <Route path="/Projects" Component={Projects}></Route>
</Routes>
<Contact></Contact>
    
  </>)
}