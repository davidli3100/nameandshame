import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import * as firebase from "firebase";
import theme from "./theme";
import "./static/fonts/fonts.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Index from "./Pages";
import Employer from "./Pages/employer";
import About from "./Pages/about";
import Report from "./Pages/report";
import SEO from "./Components/SEO";

const firebaseConfig = {
    apiKey: "AIzaSyDJHKDopfdDhZllZzDIS9XStEuZXbN8B0o",
    authDomain: "nameandshame-eedd0.firebaseapp.com",
    databaseURL: "https://nameandshame-eedd0.firebaseio.com",
    projectId: "nameandshame-eedd0",
    storageBucket: "nameandshame-eedd0.appspot.com",
    messagingSenderId: "95523201686",
    appId: "1:95523201686:web:32626e0520e0b8214598b7",
};

firebase.initializeApp(firebaseConfig);

function App() {
    return (
        <div className="App">
            <SEO />
            <ThemeProvider theme={theme}>
                <CSSReset />
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Index />
                        </Route>
                        <Route path="/employer/:id">
                            <Employer />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/report">
                            <Report />
                        </Route>
                        <Route path="/report/:id">
                            <Report />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
