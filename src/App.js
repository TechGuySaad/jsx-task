import Greeting from "./Greeting";


function App() {
  const name = "Saad Rahman"
  return (
    <div className="App" style = {{backgroundColor : "yellow"}}>
      <Greeting name = {name} color = "red"></Greeting>
      <Greeting name = {name} color = "green"></Greeting>
    </div>
  );
}

export default App;
