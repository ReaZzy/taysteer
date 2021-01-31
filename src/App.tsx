import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {Navbar} from "./components/navbar/Navbar";
import {Homepage} from "./components/homepage/Homepage";

const App:React.FC<{}> = () => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path={"/"} render={()=><Homepage/>}/>
      </Switch>
    </div>
  );
}

export default App;
