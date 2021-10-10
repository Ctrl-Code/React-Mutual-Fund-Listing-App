import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import store from "./Redux/store";
import { Provider } from 'react-redux';

import Login from "./Pages/Login";
import Listing from "./Pages/Listing";

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

                <Route path="/">
                    <Redirect to="/login" />
                </Route>

            </Switch>
        </Router >
    </Provider >);
}

export default App;
