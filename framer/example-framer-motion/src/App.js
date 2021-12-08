import "./App.css";
import List from "./components/Reorder";
import Visible from "./components/Visible";

function App() {
  return (
    <div className="App">
      <Visible isVisible={false} />
      <List />
    </div>
  );
}

export default App;
