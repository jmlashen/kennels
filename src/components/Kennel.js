import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import { useState } from "react"



export const Kennel = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
      }

const isAdmin = true;

//example of obecjt being passed

const myUser = {
    name: "jake",
    pet: "herman"
}



return (
    <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} isAdmin={isAdmin} myUser={myUser}/>
    </>
)
}








//Now update your index.js by adding a root component of <Router /> which gets imported from the React Router package. Within <Router>, place the <Kennel /> child component. This tells React "I will be placing Routes in my Kennel component."


