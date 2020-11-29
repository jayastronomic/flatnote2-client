import "./styles/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/registrations/Login";

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <Login />} />
    </Router>
  );
}

export default App;
