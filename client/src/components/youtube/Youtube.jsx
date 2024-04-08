import {BrowserRouter, Route,Switch} from "react-router-dom";
import Sermon from "./Sermon"
import Allsermons from "./Allsermons"
import SermonStructure from "./SermonStructure"
function Youtube() {
  return (
<div className="sermon">
<BrowserRouter>
<Switch>
    <Route path="/allsermon">
    < Allsermons/> 
    </Route>
    <Route exact path="/sermon" >
    <Sermon />
    </Route>
    <Route path="/:sermonName">
    <SermonStructure/>
    </Route>
</Switch>
</BrowserRouter>
</div>
  );
}

export default Youtube;
 