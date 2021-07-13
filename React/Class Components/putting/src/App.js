import logo from './logo.svg';
import './App.css';
import PersonAge from './components/PersonAge';

function App() {
  return (
    <div className="App">
      <PersonAge firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonAge firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />

    </div>
  );
}

export default App;
