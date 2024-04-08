import {BrowserRouter, Route,Switch} from "react-router-dom";
import All from "./All"
import SermonStructure from "./SermonStructure"
function Allsermons() {
  return (
<div className="sermon">
<BrowserRouter>
<Switch>
    <Route path="/allSermons">
    < All/> 
    </Route>
    <Route path="/:sermonName">
    <SermonStructure/>
    </Route>
</Switch>
</BrowserRouter>
</div>
  );
}

export default Allsermons;
 