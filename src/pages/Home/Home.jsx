import React from "react";
import Header from "components/Header/header";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <div>Home</div>
            <Outlet />
        </>
    )
}

export default Home