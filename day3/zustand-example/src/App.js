import "./App.css";
import DeletedUsers from "./components/DeletedUsers";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Form />
      <Users />
      <DeletedUsers />
    </div>
  );
}

export default App;
