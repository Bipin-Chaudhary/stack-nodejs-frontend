import StackList from "./components/Stack/StackList";
import Button from "./components/Button/Button";


const DUMMY_STACK = [1,2,3,4,5];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to Stack NodeJS App
        </p>
      </header>
      <div>
        <StackList stack={DUMMY_STACK} />
      </div>
      <Button />
    </div>
  );
}

export default App;
