import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Single from "./pages/Single/Single.jsx";
import Write from "./pages/Write/Write.jsx";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/write" element={<Write />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
