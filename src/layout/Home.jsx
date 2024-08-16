import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="pt-20 px-10">
          <Outlet />
        </div>
    </div>
  )
}

export default Home