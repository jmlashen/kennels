import { LocationCard } from "./Location";
import { useEffect, useState } from "react";
import { GetAllLocations, deleteLocation } from "../../modules/LocationManager";


export const LocationList = () => {

    const [location, setLocation] = useState([]);
    const GetLocations = () => {
        return GetAllLocations().then(locationsFromAPI => {

            console.log(locationsFromAPI);
            setLocation(locationsFromAPI)

        });
    };

    const handleDeleteLocation = id => {
        deleteLocation(id)
        .then(() => GetAllLocations().then(setLocation));
      };

    useEffect(() => {
        GetLocations();
    }, []);


    return (
        <div className="container-cards">
          {location.map(location =>
            <LocationCard
              key={location.id}
              location={location}
              handleDeleteLocation={handleDeleteLocation} />)}
        </div>
      );
          }