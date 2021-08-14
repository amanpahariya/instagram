import Header from "./components/Header/Header";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import HomePage from "./components/HomePage/HomePage";
import React, {useEffect, useState} from "react";
import Footer from "./components/Footer/Footer";

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
            <Header/>
            <div className="container">
                <HomePage/>
            </div>
            {
                width <= 650
                    ? <Footer/>
                    : <></>
            }
        </>
    );
}

export default App;
