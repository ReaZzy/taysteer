import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {Navbar} from "./components/navbar/Navbar";
import {Homepage} from "./components/homepage/Homepage";
import { Suspense } from 'react';
import { Preloader } from './components/Preloader/Preloader';

const Profile = React.lazy(()=> import("./components/profile/Profile"))

const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route path={"/profile"} render={()=><Suspense fallback={<Preloader/>}><Profile/></Suspense>}/>
          <Route exact path={"/"} render={()=><Homepage/>}/>
      </Switch>
    </div>
  );
}

export default App;
