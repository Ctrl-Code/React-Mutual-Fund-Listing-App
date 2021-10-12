import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import store from "./Redux/store";
import { Provider } from 'react-redux';

import Login from "./Pages/Login/Login";
import Listing from "./Pages/Listing/Listing";
import Signup from "./Pages/SignUp/SignUp";
import Details from "./Pages/Details/Details";

function App() {

    return (<Provider store={store}>
        <Router>
            <Switch>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/listing">
                    <Listing />
                </Route>

                <Route exact path="/signup">
                    <Signup />
                </Route>

                <Route exact path="/edit">
                    <Signup />
                </Route>

                <Route exact path="/details"
                    render={state => <Details {...state} />} />

                <Route path="/">
                    <Redirect to="/login" />
                </Route>

            </Switch>
        </Router >
    </Provider >);
}

export default App;
