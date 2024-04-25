import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import Organization from "./components/organization/Organization";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<><Header/><Body/></>}></Route>
          <Route path="/organization/:id" element={<Organization/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
