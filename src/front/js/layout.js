import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "/workspaces/Danielh-Autentication-con-Python-Flask-y-React.-DanielH/src/front/js/component/navbar.js";
import { Footer } from "/workspaces/Danielh-Autentication-con-Python-Flask-y-React.-DanielH/src/front/js/component/footer.js";
import { Signup } from "/workspaces/Danielh-Autentication-con-Python-Flask-y-React.-DanielH/src/front/js/pages/Signup.jsx";
import { Login } from "/workspaces/Danielh-Autentication-con-Python-Flask-y-React.-DanielH/src/front/js/pages/Login.jsx";
import { Private } from "/workspaces/Danielh-Autentication-con-Python-Flask-y-React.-DanielH/src/front/js/pages/Private.jsx";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <div style={{minHeight: "100vh"}}>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Signup />} path="/signup" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Private />} path="/private" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Single />} path="/single/:theid" />
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                    </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);