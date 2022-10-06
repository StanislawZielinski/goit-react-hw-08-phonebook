import Home from "./pages/Home";
import Login from "./pages/Login";
import SharedLayout from "./pages/SharedLayout"
import './App.css';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <div className="style-app">
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
};
