import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import internalImage from "./images/welcome.jpg";

function App() {
  const userName = "sumayya"; 

  console.log("React app started");

  const headingStyle = {
    color: "#0d6efd",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ width: "24rem" }}>
        <h2 style={headingStyle}>
          Welcome to React Learning, {userName}
        </h2>

        
        <img
          src={internalImage}
          alt="Internal"
          className="img-fluid mx-auto my-3"
          style={{ width: "150px" }}
        />

        
        <img
          src="https://i.pinimg.com/1200x/06/7c/10/067c105976b1322bba870ad3e6652a95.jpg"
          alt="External"
          className="img-fluid mx-auto my-3"
        />

        <p className="text-muted fw-semibold">
          This is your first card with images and styles!
        </p>
      </div>
    </div>
  );
}

export default App;
