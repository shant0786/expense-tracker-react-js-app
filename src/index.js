import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./components/context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalState>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </GlobalState>
);
