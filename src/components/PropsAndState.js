    import React, {useState} from "react"
    import "./PropsAndState.css"
    import { newDate } from "./Date"
    import { QuoteCard } from "./quotes/QuoteCard"
    

export const PropsAndState = ({ myUser }) => {
    let [countClicks, setCountClicks] = useState(0)
    //setCountClicks is a taco based on the varible
    let [saveNow, setSaveNow] =useState(false)
    

    const handleClick = () => {
            //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  const handleChange = (event) => {
      let newSaveNow = saveNow;
      newSaveNow = true;
      setSaveNow(newSaveNow);

  }

  const current = new Date(Date.now());
  const date = current.toDateString();
  



  return (
    <>
      <h3>Welcome, {myUser.name} and {myUser.pet} </h3>
         <QuoteCard />
      <p>Today is beautiful</p>
      <p>today's date {newDate}</p>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>

      <div>
          <textarea style={{ width: '100%'}} type="text" name="notes" placeholder='notes'onChange={handleChange}/>
          <button style={{ width: '100%' }} id="save" disabled={saveNow ? false : true}>Save Note</button>
      </div>
    </>
  )
}
