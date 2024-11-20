
import Header from "./Components/Header.jsx"
import Homescreen from "./screens/Homescreen.jsx"
import { Outlet } from "react-router-dom"
export default function App() {
  return (
    <>
    {/* <Header/> */}
    <Outlet/>
    </>
  )
}