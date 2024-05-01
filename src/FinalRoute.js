import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DarkPage from "./pages/DarkPage";
import { ThemeProvider } from "./Contexts/ThemeContext";
import Admin from "./Admin";
import Settings from "./Settings";
import Category from "./Category";
import AdminLinks from "./AdminLinks";
import ForgotPassword from "./ForgotPassword";
import Header from "./Header";
import Aceis from "./Aceis";
import BasicPage from "./BasicPage";
import NewDrug from "./NewDrug";
import "./Admin.css";
import Trash from "./Trash";
import Account from "./Account";
import Setting from "./Setting";
import Reports from "./Reports";
import { useLocation } from "react-router-dom";
// import Routes from "./Routes";
function FinalRoute() {

  const context = useContext(ThemeProvider);
  console.log(context, "cc");
  const user = useLocation();
  console.log("sdfasdf", user);

  return (
    <div className="App">
      {user?.pathname === "/" ? null : <Header />}
      <Routes> 
        <Route
          exact
          path="/"
           element={context.dark_theme ? <DarkPage/> : <LandingPage/>}
        />
        {/* <Route path="/" exact element={<Header/>} /> */}
        <Route path="/admin" exact element={<Admin/>} />
        <Route path="/basic-page" element={<BasicPage />} />
        <Route path="/admin-links" element={<AdminLinks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ad-drugs" element={<NewDrug />} />
        <Route path="/aceis" element={<Aceis />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/category" element={<Category />} />
        <Route path="/account" element={<Account />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default FinalRoute;
