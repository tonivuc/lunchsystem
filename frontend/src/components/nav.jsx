import React from "react";
import {
  Link
} from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1>Lunch wish system</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Lunch wishes</Link> |{" "}
        <Link to="/expenses">Order checklist</Link>
        
      </nav>
    </div>
  );
}
