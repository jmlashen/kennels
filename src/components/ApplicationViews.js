import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"
import { LocationCard } from "./location/Location"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalCard />
            </Route>
             
             {/* Render the animal list when http://localhost:3000/animals */}
             <Route path="/customers">
              <CustomerCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/employees">
              <EmployeeCard />
            </Route>

             {/* Render the animal list when http://localhost:3000/animals */}
             <Route path="/locations">
              <LocationCard />
            </Route>
        </>
    )
}

//exact is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route.The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new Link element in your application with a new URL, then you must create a matching Route element