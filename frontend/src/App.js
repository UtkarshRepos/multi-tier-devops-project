import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  // useEffect(() => {
  //   fetch("http://backend:5000/")   // use service name "backend"
  //   // fetch("http://localhost:5000")

  //     .then((res) => res.text())
  //     .then((data) => setMessage(data))
  //     .catch((err) => setMessage("Error connecting to backend: " + err));
  // }, []);
  const backendURL = window.location.hostname === "localhost"
  ? "http://localhost:5000"
  : "http://backend:5000";

useEffect(() => {
  fetch(`${backendURL}/`)
    .then(res => res.text())
    .then(data => setMessage(data))
    .catch(err => setMessage("Error connecting to backend: " + err));
}, []);


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend React App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
