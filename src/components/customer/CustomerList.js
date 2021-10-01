import { CustomerCard } from "./Customer";
import { useEffect, useState} from "react";
import { GetAllCustomers } from "../../modules/CustomerManager";
import { deleteCustomer } from "../../modules/CustomerManager";


export const CustomerList = () => {
    //this is invoked
    const [customer, setCustomer] = useState([]);
  const GetCustomers = () => { //this function gets all the animals from the animal manager. this allows to call getAnimals anytime so we dont have to use useEffect everytime
    
    //      varible, function
    return GetAllCustomers().then(customersFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(customersFromAPI);
      setCustomer(customersFromAPI)
      //         from api
      // no need to copy state here cause we're wiping out our array 
    });
  };
  const handleDeleteCustomer = id => {
  deleteCustomer(id)
  .then(() => GetAllCustomers().then(setCustomer));
};


  useEffect(() => { //this is number 4 
      //happens after the return/fetch data from the database and changes the state. on load of this component what do I need to happen. If I need to get data, it will only get that data on this first load. it wont continulously get data. 

    GetCustomers(); //this changes the state and then re-renders
  }, []); //empty array only runs after the first render

    // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {customer.map(customer =>
        <CustomerCard
          key={customer.id}
          customer={customer}
          handleDeleteCustomer={handleDeleteCustomer} />)}
    </div>
  );
      }
//once this is returned now we run useEffect

//th
