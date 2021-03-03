import React from "react";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";

//import Navigator from "./components/Nav";


import UserState from "./context/User/UserState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <UserState>
     
     
      <div className="container p-7">
        <div className="row">
          <div className="col-md-7 list">
            <UsersList />
          </div>
          <div className="col-md-5 prof">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
