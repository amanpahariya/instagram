import Header from "./components/Header/Header";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import HomePage from "./components/HomePage/HomePage";
import React, {useEffect, useState} from "react";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StoryView from "./components/StoryView/StoryView";

const App = () => {

    const [width, setWidth] = useState(null);

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    });

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);


    return (
        <>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route exact path={'/stories/:id'} component={StoryView}/>
                </Switch>
                {
                    width <= 650
                        ? <Footer/>
                        : <></>
                }
            </BrowserRouter>
        </>
    );
}

export default App;
