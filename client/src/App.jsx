import Main from "./pages/main/Main";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Event from "./pages/event/Event"
import Eventview from "./pages/event/Eventview"
import Location from "./pages/location/Location"
import Give from "./pages/give/Give"

import About from "./pages/about/About"
import Sermon from "./pages/sermon/Sermon"
import Kids from "./pages/ministries/Kids"
import Moms from "./pages/ministries/Moms"
import Youth from "./pages/ministries/Youth"
import Serve from "./pages/ministries/Serve"
import Allsermons from "./pages/sermon/Allsermon"
import Groups from "./pages/groups/Groups"
import GroupViewPublic from "./pages/groups/GroupViewPublic"
import LocationViewPublic from "./pages/location/LocationViewPublic"

// Admin REgisteration
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

// Admin Dashboard
import Auth from "./pages/admin/auth/Auth"

import Dashboard from './pages/admin/dashboard/Dashboard'
import AboutAdmin from './pages/admin/about/AboutAdmin'
import CreateAbout from './pages/admin/about/CreateAbout'
import AboutUpdate from "./pages/admin/about/AboutUpdate"
import EventAdmin from "./pages/admin/event/EventAdmin"
import EventUpdate from "./pages/admin/event/EventUpdate"
import EventView from "./pages/admin/event/EventView"
import AddEvent from "./pages/admin/event/AddEvent"
import GroupAdmin from "./pages/admin/groups/GroupAdmin"
import GroupUpdate from "./pages/admin/groups/GroupUpdate"
import AddGroup from "./pages/admin/groups/AddGroup"


import Users from "./pages/admin/users/Users"
import UsersView from "./pages/admin/users/UsersView"
import UsersUpdate from "./pages/admin/users/UsersUpdate"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
          <Main /> 
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/location">
          <Location /> 
          </Route>
          <Route path="/location-view/:_id">
          <LocationViewPublic /> 
          </Route>          
          <Route path="/give">
          < Give/> 
          </Route>
          <Route path="/kids">
          < Kids/> 
          </Route>
          <Route path="/moms">
          < Moms/> 
          </Route>
          <Route path="/youth">
          < Youth/> 
          </Route>
          <Route path="/serve">
          < Serve/> 
          </Route>
          <Route path="/about">
          < About/> 
          </Route>
          <Route path="/sermon">
          < Sermon/> 
          </Route>
          <Route path="/allSermons">
          < Allsermons/> 
          </Route>
          <Route path="/groups">
          < Groups/> 
          </Route>



          <Route path="/event">
          < Event/> 
          </Route>
          <Route path="/event-view/:_id">
          < Eventview/> 
          </Route>          
          <Route path="/signup">
          < Signup/> 
          </Route>
          <Route path="/login">
          < Login/> 
          </Route>

{/* Admin Dashboard routing*/}

           <Route  path="/admin/dashboard">
          < Dashboard/> 
          </Route>
          <Route  path="/admin/about">
          <AboutAdmin /> 
          </Route>
          <Route path="/create-About">
          < CreateAbout/> 
          </Route>
          <Route path="/update-About/:_id">
          < AboutUpdate/> 
          </Route>    
          <Route path="/admin/event">
          < EventAdmin/> 
          </Route>
          <Route path="/admin/add-event">
          < AddEvent/> 
          </Route>          
          <Route path="/admin/event-update/:_id">
          < EventUpdate/> 
          </Route>
          <Route path="/admin/event-view/:_id">
          < EventView/> 
          </Route>                    
          <Route path="/admin/groups">
          < GroupAdmin/> 
          </Route>
         <Route path="/admin/add-group">
          < AddGroup/> 
          </Route>            
         <Route path="/groupupdate/:_id">
          < GroupUpdate/> 
          </Route>
         <Route path="/groupview/:_id">
          < GroupViewPublic/> 
          </Route>
         <Route path="/admin/users">
          < Users/> 
          </Route>
         <Route path="/admin/users-view/:_id">
          < UsersView/>           
          </Route>
         <Route path="/admin/users-update/:_id">
          < UsersUpdate/>           
          </Route>                       
</Switch>
 </Router>


</>
  );
}

export default App;
