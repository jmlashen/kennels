import { EmployeeCard } from "./Employee";
import { useEffect, useState } from "react";
import { deleteEmployee, GetAllEmployees } from "../../modules/EmployeeManager";



export const EmployeeList = () => {

    const [employee, setEmployee] = useState([]);
    const GetEmployees = () => {
        return GetAllEmployees().then(employeesFromAPI => {

            console.log(employeesFromAPI);
            setEmployee(employeesFromAPI)

        });
    };

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => GetAllEmployees().then(setEmployee));
      };
      

    useEffect(() => {
        GetEmployees();
    }, []);


    return (
        <div className="container-cards">
          {employee.map(employee =>
            <EmployeeCard
              key={employee.id}
              employee={employee}
              handleDeleteEmployee={handleDeleteEmployee} />)}
        </div>
      );
          }