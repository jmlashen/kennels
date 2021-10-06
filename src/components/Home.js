import React,{useState, useEffect} from "react";
import { PropsAndState } from './PropsAndState'
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "./../modules/AnimalManager"
import { QuoteCard } from "./quotes/QuoteCard";



export const Home = ({ isAdmin, myUser, }) => {
    
const [spotlightId, setSpotlightId] = useState(0);

const refreshSpotlightAnimal = () => {
    getRandomId().then(res => setSpotlightId(res));
};

useEffect(() => {
    refreshSpotlightAnimal();
}, []);
return (
<>


    {isAdmin ?
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
    <PropsAndState myUser={myUser} />
    <h1>Animal Spotlight</h1>
    <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
    {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
        
    }
    <QuoteCard/>
</>
)}
//Use this code for your homepage that will be displayed when navigating to the route of /.