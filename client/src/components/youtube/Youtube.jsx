import {BrowserRouter, Route,Switch} from "react-router-dom";
import SearchSermon from "./SearchSermon"
import Allsermons from "./Allsermons"
import SermonPlaylist from "./SermonPlaylist"
function Youtube() {
  return (
<div className="sermon">
<BrowserRouter>
<Switch>
    <Route path="/allsermon">
    < Allsermons/> 
    </Route>
    <Route exact path="/sermon" >
    <SearchSermon />
    </Route>
    <Route path="/:sermonName">
    <SermonPlaylist/>
    </Route>
</Switch>
</BrowserRouter>
</div>
  );
}

export default Youtube;
 