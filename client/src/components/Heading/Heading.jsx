import React from "react";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div>
      <h1>Simple Ecommerce</h1>
      <Link to="/">Home</Link>
      <Link to="contactus">ContactUs</Link>
    </div>
  );
}
