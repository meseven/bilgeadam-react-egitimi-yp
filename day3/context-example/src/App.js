import "./App.css";
import DeletedUsers from "./components/DeletedUsers";
import Form from "./components/Form";
import Users from "./components/Users";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Form />
        <Users />
        <DeletedUsers />
      </UserContextProvider>
    </div>
  );
}

export default App;
