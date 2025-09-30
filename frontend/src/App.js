import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  // Use environment variable for backend URL, fallback to localhost if not set
  const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${backendURL}/`)
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Error connecting to backend: " + err));
  }, [backendURL]);  // add backendURL to dependency array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend React App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
