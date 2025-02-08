import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./sign-up";
import LandingPage from "./landing-page";
import LoginPage from "./login";
import LoggedIn from "./Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<LoggedIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
