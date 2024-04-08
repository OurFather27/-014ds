import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import "./ministries.css"
function Kids (){
	 return(
	 	<>
	 	<Topbar/>
	 	<div className="kids">
	 	hello kids
	 	</div>
	 	<iframe width='500' height='294' src="https://www.youtube.com/embed/YykjpeuMNEk?&theme=dark&autohide=2&modestbranding=1"frameborder="0"></iframe>

	 	<Footer/>
	 	</>
	 	)
}
export default Kids