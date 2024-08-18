import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="pt-20 md:px-5">
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Home