import './App.css';
import PersonCards from './components/PersonCard.js'; 

function App() {
  return (
    <div className="App">
      {/* <PersonCards /> */}
      <PersonCards firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonCards firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <PersonCards firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <PersonCards firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />

    </div>
  );
}

export default App;
