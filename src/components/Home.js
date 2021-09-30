import React from "react";
import { PropsAndState } from './PropsAndState'


export const Home = ({isAdmin, myUser, }) => (
    <>
        { isAdmin ?
      <p>You are an admin</p>
     
      :
      <p>You are not an admin</p>
      }

        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState myUser={myUser}/>
    </>
)

//Use this code for your homepage that will be displayed when navigating to the route of /.