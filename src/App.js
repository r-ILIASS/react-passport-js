import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";

import "./app.css";

function App() {
  const user = true;

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/post/:id"
          element={user ? <Post /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
