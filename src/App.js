import React from "react";
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import { Route, Routes } from "react-router-dom";

const App = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;