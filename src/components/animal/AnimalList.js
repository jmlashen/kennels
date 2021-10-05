import React, { useEffect, useState } from 'react';
import { getAllAnimals } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';
import { deleteAnimal } from '../../modules/AnimalManager';
import { useHistory } from 'react-router';

export const AnimalList = () => {
  //this is invoked
  const [animals, setAnimals] = useState([]);
  const history = useHistory();
  const GetAnimals = () => { //this function gets all the animals from the animal manager. this allows to call getAnimals anytime so we dont have to use useEffect everytime

    


    //      varible, function
    return getAllAnimals().then(animalsFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(animalsFromAPI);
      setAnimals(animalsFromAPI)
      //         from api
      // no need to copy state here cause we're wiping out our array 
    });
  };

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
      .then(() => getAllAnimals().then(setAnimals));
  };


  useEffect(() => { //this is number 4 
    //happens after the return/fetch data from the database and changes the state. on load of this component what do I need to happen. If I need to get data, it will only get that data on this first load. it wont continulously get data. 

    GetAnimals(); //this changes the state and then re-renders
  }, []); //empty array only runs after the first render

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  //   return (
  //     <div className="container-cards">
  //       {animals.map(animal => <AnimalCard key={animal.id} animal={animal} handleDeleteAnimal={handleDeleteAnimal}/>)}
  //     </div>
  //   );
  // };

  // export const AnimalList = () => {

  // ...code omitted for brevity...

  return (
    //add this button above your display of animal cards
<>
<section className="section-content">
  
  <button type="button"
      className="btn"
      onClick={() => {history.push("/animals/create")}}>
      Admit Animal
  </button>

</section>



    <div className="container-cards">
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          handleDeleteAnimal={handleDeleteAnimal} />)}
    </div>
  </>
  );
};

//once this is returned now we run useEffect

//this is where render the actual cards
