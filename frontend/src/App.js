import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Components
import Home from "./Componnents/Home/Home"
import SignupSignIn from "./Componnents/Authentication/Authentication";
import Adminsidebar from "./Componnents/Sidebars/Admin_sidebar";
import Studentsidebar from "./Componnents/Sidebars/Student_sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup-signin" element={<SignupSignIn />}></Route>
        <Route exact path="/collage" element={<Adminsidebar />}></Route>
        <Route exact path="/student" element={<Studentsidebar />}></Route>
      </Routes>
    </>
  );
}

export default App;
