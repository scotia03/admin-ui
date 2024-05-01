import { useState } from "react"; 
import Home from "./pages/home2/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs,userInputs } from "./Formsource";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route 
                path="new" 
                element={<New inputs={userInputs} title="Add New User" />}
              >
              </Route>
              <Route path="products">
                <Route index element={<list />}></Route>
                <Route path=":productId" element={<Single />}></Route>
                <Route 
                  path="new"
                  element={<new inputs={productInputs} title="Add New Product" />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
