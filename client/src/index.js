import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import { store } from "./app/reducers";
import { Provider } from "react-redux";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
    ,
  </Provider>,
);
