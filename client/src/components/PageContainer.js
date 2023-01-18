import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Homepage from "./Homepage/Homepage";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Bills from "./Bills/Bills";
import Savings from "./Savings/Savings";
import Spending from "./Spending/Spending";

export default function PageContainer() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/bills" element={<Bills />} />
        <Route exact path="/savings" element={<Savings />} />
        <Route exact path="/spending" element={<Spending />} />
      </Routes>
      <Footer />
    </>
  );
}
