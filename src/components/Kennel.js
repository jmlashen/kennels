import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

const isAdmin = true;

//example of obecjt being passed

const myUser = {
    name: "jake",
    pet: "herman"
}

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews isAdmin={isAdmin} myUser={myUser}/>
    </>
)

//Now update your index.js by adding a root component of <Router /> which gets imported from the React Router package. Within <Router>, place the <Kennel /> child component. This tells React "I will be placing Routes in my Kennel component."


