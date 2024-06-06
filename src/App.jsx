import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Mylist from "./pages/mylist/Mylist";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./Formsource";
import "./Style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {darMode} =useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) =>{
    return currentUser ? children : <Navigate to="/login/" />;
  };

  const NotRequireAuth = ({ children }) =>{
    return currentUser ? <Navigate to="/login/" /> : children;
  };

  return (
    <div className={darMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<NotRequireAuth><Login /></NotRequireAuth>}></Route>
            <Route index element={<RequireAuth><Home /></RequireAuth>}></Route>
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>}></Route>
              <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>}></Route>
              <Route
                path="new"
                element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>}
              />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List /></RequireAuth>}></Route>
              <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>}></Route>
              <Route
                path="new"
                element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>}
              />
            </Route>
            <Route path="categories">
              <Route index element={<RequireAuth><Mylist /></RequireAuth>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;