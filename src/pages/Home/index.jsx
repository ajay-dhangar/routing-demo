import React from "react";

function Home() {
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1 style={{ color: "blue" }}>Home Page</h1>
      <h3 style={{ color: "green" }}>Welcome to the Home Page</h3>
      <p style={{ color: "red" }}>This is a simple home page for the React Router tutorial.</p>
    </div>
  );
}

export default Home;
