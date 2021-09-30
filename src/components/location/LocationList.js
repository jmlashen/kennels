import { LocationCard } from "./Location";
import { useEffect, useState } from "react";
import { GetAllLocations } from "../../modules/LocationManager";


export const LocationList = () => {

    const [location, setLocation] = useState([]);
    const GetLocations = () => {
        return GetAllLocations().then(locationsFromAPI => {

            console.log(locationsFromAPI);
            setLocation(locationsFromAPI)

        });
    };

    useEffect(() => {
        GetLocations();
    }, []);


    return (
        <div className="container-cards">
            {location.map(location => <LocationCard key={location.id} location={location} />)}
        </div>
    );
};
