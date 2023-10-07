import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import AuthContect from "./context/AuthContect";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContect>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthContect>
      </Router>
    </div>
  );
}

export default App;
