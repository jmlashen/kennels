    import React, {useState} from "react"
    import "./PropsAndState.css"
    

export const PropsAndState = ({ yourName, day }) => {
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

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>Today is {day}</p>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>

      <div>
          <textarea style={{ width: '100%'}} type="text" name="notes" placeholder='notes'onChange={handleChange}/>
          <button style={{ width: '100%' }} id="save" disabled={saveNow ? false : true}>Save Note</button>
      </div>
    </>
  )
}
