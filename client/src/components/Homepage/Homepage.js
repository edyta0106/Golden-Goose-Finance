import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Link to="/"></Link>

      <div>Homepage</div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </>
  );
}
