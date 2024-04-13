import {BrowserRouter, Route,Switch} from "react-router-dom";
import All from "./All"
import SermonPlaylist from "./SermonPlaylist"
function Allsermons() {
  return (
<div className="sermon">
<BrowserRouter>
<Switch>
    <Route path="/allSermons">
    < All/> 
    </Route>
    <Route path="/:sermonName">
    <SermonPlaylist/>
    </Route>
</Switch>
</BrowserRouter>
</div>
  );
}

export default Allsermons;
 