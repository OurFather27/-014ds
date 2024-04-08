import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer"
import Home from "../../pages/home/Home"
import "./main.css"
export default function Main() {
  return (
    <>
      <Topbar />
<div className="border">
      <Home/>
      </div>
      <Footer/>
    </>
  );
}
