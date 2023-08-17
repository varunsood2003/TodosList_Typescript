import "./App.css";
import AddTodos from "./Components/AddTodos";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <main>
        <Navbar/>
        <AddTodos/>
        <Todos/>
      </main>
    </>
  );
}

export default App;
