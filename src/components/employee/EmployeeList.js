import { EmployeeCard } from "./Employee";
import { useEffect, useState } from "react";
import { GetAllEmployees } from "../../modules/EmployeeManager";


export const EmployeeList = () => {

    const [employee, setEmployee] = useState([]);
    const GetEmployees = () => {
        return GetAllEmployees().then(employeesFromAPI => {

            console.log(employeesFromAPI);
            setEmployee(employeesFromAPI)

        });
    };

    useEffect(() => {
        GetEmployees();
    }, []);


    return (
        <div className="container-cards">
            {employee.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    );
};