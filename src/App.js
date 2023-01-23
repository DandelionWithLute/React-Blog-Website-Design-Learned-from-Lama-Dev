import Write from "./pages/write/Write"
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single"
import Settings from "./pages/setting/Settings"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
    <><TopBar /></>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/post/:postId" element={<Single />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
