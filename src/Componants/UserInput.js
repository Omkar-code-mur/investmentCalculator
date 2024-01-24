/** @format */
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../Utils/investment";
export default function UserInput({ handleResults }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  // function handleSubmit() {
  //   
  //   handleResults(result);
  // }

  async function handleInputValue(e) {
   setUserInput((prev) => {
      
    let temp = {...prev,
      [e.target.name]: Number(e.target.value),
      }
      let result = calculateInvestmentResults(temp);
      handleResults(result)
      return temp;
    });
    
    

    
  }

  return (
    <form id='user-input' name='f'>
      <div className='input-group'>
        <p>
          <label> Initial Investment</label>
          <input
            name='initialInvestment'
            type='number'
            onChange={handleInputValue}
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            name='annualInvestment'
            type='number'
            onChange={handleInputValue}
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label> Expected Return</label>
          <input
            name='expectedReturn'
            type='number'
            onChange={handleInputValue}
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            name='duration'
            type='number'
            onChange={handleInputValue}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </form>
  );
}
