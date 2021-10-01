const remoteURL = "http://localhost:5002"

export const getLocationById = (locationId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/locations/${locationId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const GetAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }