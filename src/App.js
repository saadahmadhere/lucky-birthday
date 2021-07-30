import { useState } from "react";

function App() {

  let sum = 0;
  
  const [date, setDate] = useState('');
  const [num, setNum] = useState(0);
  const [islucky, setIsLucky] = useState(false);
  const [checkButtonPressed, setCheckButtonPressed] = useState(false);

  const handleClick = (e) =>{

    e.preventDefault();
    const dateArray = date.split("-");
   
    dateArray.map(item => {
      for(let i=0; i< item.length; i++){
        sum = sum + Number(item[i])
      }
      
      if(sum % Number(num) === 0){
        setIsLucky(true)
      }
  
      return 0;
    })
    setCheckButtonPressed(true)
  }

  const dateHandler = (e) =>{
    setDate(e.target.value)
  }

  const numHandler = (e) =>{
    setNum(e.target.value)
  }

  return (
    <div className="App">
      <div className="top-section">
           <div className="pageTitle">
               <h1>Is Your Birthday Lucky?</h1>
               <a href="#mainSection">scroll down to checkout</a>
            </div>
      </div>


      <div id="mainSection" className="bottom-section">

               <h1>Enter Your Birthdate and lucky number to continue...</h1>
               <form onSubmit={handleClick}>
                 <label htmlFor="dateInput">Select your Birth date</label>
                 <input type="date" id="dateInput" onChange={dateHandler} required/>
                 <label htmlFor="luckyNum">Enter your lucky number </label>
                 <input type="number" id="luckyNum" onChange={numHandler} required/>
                 <button type="submit">Check</button>
                 {checkButtonPressed ? islucky 
                                       ?<h1>lucky</h1> 
                                       :<h1>Not lucky</h1>
                                     :null}
               </form>
      </div>
    </div>
  );
}

export default App;
