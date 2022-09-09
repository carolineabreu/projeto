<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
>>>>>>> 3538f7cc9a6d96554db5aabcb5c026f6085e0e77
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
