import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { AnimalForm } from './animal/AnimalForm'
import { Login } from "./auth/Login"
import { useState } from "react"
import { Register } from "./auth/Register"
import { CustomerDetail } from "./customer/CustomerDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalEditForm } from "./animal/AnimalEditForm"


export const ApplicationViews = ({ isAdmin, myUser }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  }

  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home isAdmin={isAdmin} myUser={myUser} />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        { isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
      </Route>

      <Route exact path="/animals/:animalId(\d+)/edit">
        {isAuthenticated ? <AnimalEditForm /> :
        
      <Redirect to="/login" /> }
            
      </Route>

        



      {/* Render the animal list when http://localhost:3000/customers */}
      <Route exact path="/customers">
        <CustomerList />
      </Route>

      {/* Render the animal list when http://localhost:3000/employees */}
      <Route exact path="/employees">
        <EmployeeList />
      </Route>

      {/* Render the animal list when http://localhost:3000/locations */}
      <Route exact path="/locations">
        <LocationList />
      </Route>

      <Route path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>

      <Route path="/customers/:customerId(\d+)">
        <CustomerDetail />
      </Route>

      <Route path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>

      <Route path="/employees/:employeeId(\d+)">
        <EmployeeDetail />
      </Route>


      <Route path="/animals/create">
        <AnimalForm />
      </Route>

      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>


      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
    </>
  )
}

//exact is needed on the first route, otherwise it will also match the other routes, and the Home will render for every route.The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new Link element in your application with a new URL, then you must create a matching Route element