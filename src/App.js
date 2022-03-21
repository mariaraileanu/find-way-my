import "./App.css";
import Panel from "./components/Panel";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "bootswatch/dist/slate/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Panel />
    </Router>
  );
}

export default App;
