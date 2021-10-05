const remoteURL = "http://localhost:5002"

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals`)
  .then(res => res.json())
}

//this is where we all our database calls and return the result
export const deleteAnimal = (id) => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addAnimal = (newAnimal) => {
  return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
  }).then(response => response.json())
}

export const update = (editedAnimal) => {
  return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedAnimal)
  }).then(data => data.json());
}


