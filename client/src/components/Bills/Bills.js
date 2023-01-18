import React from "react";
import { Link } from "react-router-dom";
import Form from "../ReusableForm/form"

export default function Bills() {
  return (
    <>
      <Link to="/bills"></Link>
      <Form />
    </>
  );
}
