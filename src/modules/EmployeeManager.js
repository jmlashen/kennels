const remoteURL = "http://localhost:5002"

export const getEmployeeById = (employeeId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/employees/${employeeId}`)
  .then(res => res.json())
}

export const GetAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then(res => res.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  
  
//   ?_expand=location&_expand=customer`