import { useState } from "react";
import Footer from "./footer";
import Lucky from "./lucky";
import UnLucky from "./unLucky";

function App() {

  let sum = 0;
  
  const [date, setDate] = useState('');
  const [num, setNum] = useState(0);
  const [islucky, setIsLucky] = useState(false);
  const [checkButtonPressed, setCheckButtonPressed] = useState(false);
  const [crossClicked, setCrossClicked] = useState("");

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

  const crossHandler = () =>{
    setCrossClicked("none")
  }

  return (
    <div className="App">
      <div id="topSection">
           <div className="pageTitle">
               <h1>Is Your Birthday Lucky?</h1>
               <a href="#mainSection">scroll down to checkout</a>
            </div>
      </div>


      <div id="mainSection">

               <div className="alert" style= {{display: `${crossClicked}`}}>
                  <span className="closebtn" onClick={crossHandler} >&times;</span> 
                  <strong>Privacy Notice!</strong> We are not storing your data.
               </div>

               <h1>Enter Your Birthdate and lucky number to continue...</h1>

               <form onSubmit={handleClick}>
                 <label htmlFor="dateInput">Select your Birth date</label>
                 <input type="date" id="dateInput" onChange={dateHandler} required/>
                 <label htmlFor="luckyNum">Enter your lucky number </label>
                 <input type="number" id="luckyNum" onChange={numHandler} required/>
                 <button type="submit">Check</button>
                 {checkButtonPressed ? islucky 
                                       ?<Lucky/>
                                       :<UnLucky/>
                                     :null}
               </form>

               <Footer pressed= {() => setCrossClicked("")}/>

      </div>
    </div>
  );
}

export default App;
