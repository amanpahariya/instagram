import Header from "./components/Header/Header";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import HomePage from "./components/HomePage/HomePage";
import React, {useEffect, useState} from "react";

const App = () => {
    const [width, setWidth] = useState(null);
    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
    })
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    return (
        <>
            {width > 650 ? <Header/> : ""}
            <div className="container">
                <HomePage/>
            </div>
        </>
    );
}

export default App;
