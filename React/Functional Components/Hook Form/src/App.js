// import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import ShowMe from "./components/Show";

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPasswd: "",
  });
  return (
    <div className="App">
      {/* <UserForm info={state} setInfo={setState}/>
      {/* <UserForm inputs={info} setInputs={info}/> */}
      
      <Form something={state} setSomething={setState}/>
      <ShowMe view={state}/>
      
    </div>
  );
}

export default App;
