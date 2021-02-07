import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Navbar} from "./components/navbar/Navbar";
import {Homepage} from "./components/homepage/Homepage";
import {Suspense} from 'react';
import {Preloader} from './components/Preloader/Preloader';

const Profile = React.lazy(() => import("./components/profile/Profile"))
const Login = React.lazy(() => import("./components/auth/login/Login"))
const Top = React.lazy(() => import("./components/top/Top"))
const Users = React.lazy(() => import("./components/users/Users"))
const SignUp = React.lazy(() => import("./components/auth/signup/SignUp"))
const Error = React.lazy(() => import("./components/404/Error"))
const Recipe = React.lazy(() => import("./components/recipe/Recipe"))
const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <Navbar/>
            <Preloader/>
            <div className="content">
                <Switch>
                    <Route path={"/login"} render={() => <Suspense fallback={<Preloader/>}><Login/></Suspense>}/>
                    <Route path={"/signup"} render={() => <Suspense fallback={<Preloader/>}><SignUp/></Suspense>}/>
                    <Route path={"/profile/:id?"}
                           render={() => <Suspense fallback={<Preloader/>}><Profile/></Suspense>}/>
                    <Route path={"/top/users"} render={() => <Suspense fallback={<Preloader/>}><Users/></Suspense>}/>
                    <Route path={"/recipe/:id"} render={() => <Suspense fallback={<Preloader/>}><Recipe/></Suspense>}/>
                    <Route path={"/top"} render={() => <Suspense fallback={<Preloader/>}><Top/></Suspense>}/>
                    <Route exact path={"/"} render={() => <Homepage/>}/>
                    <Route exact path={"*"} render={() => <Suspense fallback={<Preloader/>}><Error/></Suspense>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
