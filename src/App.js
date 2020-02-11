import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainerRout from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route
          path="/profile/:userId"
          render={() => <ProfileContainerRout />}
        />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/settings" component={Settings} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
