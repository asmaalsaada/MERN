import './App.css';
import {useState} from 'react';
import Box from './components/Box';
import Display from './components/Show';

function App() {
//useState always List
  const [sangJa, setSangJa] = useState({
    sangJaColor: "",
})//initial values

const [allSang, setAllSang ] = useState([]);
const changeHandler = (e)=>{//for forms
  setSangJa({
      ...sangJa,
      [e.target.name]: e.target.value//value from input field, see form hooks
  })
}
const submitHandler = (e)=>{//what happens on submit
  e.preventDefault()//prevent bubbling
  setAllSang([...allSang, sangJa])//spread pass formInfo
  setSangJa({
    sangJaColor: "",
  })//updates the state
}
  return (
    <div className="App">
      <Box submitHandler= {submitHandler} changeHandler={changeHandler} sangJa={sangJa}></Box>
      <Display allSang= {allSang} setAllSang={setAllSang}></Display>

    </div>
  );
}
export default App;
