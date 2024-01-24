/** @format */

import "./App.css";
import Header from "./Componants/Header";
import UserInput from "./Componants/UserInput";
import Table from "./Componants/Table.js";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(null);
  function handleResults(data) {
    setResult(data)
  }

  return (
    <div className='App'>
      <Header />
      <UserInput handleResults={handleResults} />
      <Table result = {result}/>
    </div>
  );
}

export default App;
