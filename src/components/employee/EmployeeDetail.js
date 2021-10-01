import React, { useState, useEffect } from 'react';
import './EmployeeDetail.css';
import { useParams, useHistory } from "react-router-dom"
import { getEmployeeById } from '../../modules/EmployeeManager';





export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", location: "", jobtitle: "", favoritedog: ""});

  const {employeeId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          location: employee.location,
          jobtitle: employee.jobtitle,
          favoritedog: employee.favoritedog
        });
      });
  }, [employeeId]);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">{employee.location}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="employee__jobtitle">Job Title: {employee.jobtitle}</div>
      <div className="employee__favoritedog">Favorite Dog Breed: {employee.favoritedog}</div>
    </section>
  );
}

