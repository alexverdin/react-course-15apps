import "./App.css";
import Header from "./components/Header";

const age = 18;

function App() {
  return (
    <>
      <Header />
      <h2>{"Hello World".toLowerCase()}</h2>
      <p>Age: {age}</p>
    </>
  );
}

export default App;
