import React from "react";
import {ResourcePath} from "../../constants/ResourcePath";
import "../pages.css";

function HomePage() {
    return (
        <div>
            <img className="main-banner" src={ResourcePath.MAIN_BANNER} alt="home" />
        </div>
    );
}

export default HomePage;