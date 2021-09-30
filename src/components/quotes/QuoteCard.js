import React, { useEffect, useState } from "react"
import { getAllQuotes } from "../../modules/QuoteManager"

export const QuoteCard = () => {
    
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({}) // {} placeholder value for the template properites below in the JSX template
    //added a second state because quotes job is to store the list of quote. quote value stores the selected quote
    
    const getQuotes = () => {
        return getAllQuotes().then(res => {
            setQuotes(res)
        })
    }
    
    const pickQuote = () => {
        const random = Math.floor(Math.random() *quotes.length);
        setQuote(quotes[random] || {})
    }

    useEffect(() => {
        getQuotes();
    }, []);

    useEffect(() => {
        pickQuote();
    }, [quotes]);
    //whenever quotes changes, run the effect

    return (
        <section className="quote">
            <h4>{quote.text}</h4> 
            <h6>{quote.author}</h6>
            <button onClick = {(pickQuote)}>New quote</button>
        </section>
    )
        //the {} placeholder accounts for reading the h4 and h6 properties as undefined and gives the a empty object to use

}

//effects run first - getQuotes gets called and pickQuote gets called
//when getquotes fetches data from api and resloves or .then
//then set quotes gets called which triggers useEffect which is the watching the quotes value on line 27
//the useEffect reruns pickquote with data in the quotes array on line 27 and 6 
//now we need line 17 to generate a random number based on the lenght of the quotes already********




