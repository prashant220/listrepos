import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Landing from "./component/Landing";
import Search from "./component/Search";
import RepoDetails from "./component/RepoDetails";
import Error from "./component/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/error" element={<Error />} />
        <Route path="/repository/*" element={<RepoDetails />} />
        <Route path="/search/:q" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
