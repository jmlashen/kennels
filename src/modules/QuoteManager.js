export const getAllQuotes = () => {
  return fetch('https://type.fit/api/quotes')
  .then(res => res.json())
}