import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="pt-16">
          <Outlet />
        </div>
    </div>
  )
}

export default Home