import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Homepage from "./Homepage/Homepage";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";

export default function PageContainer() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
