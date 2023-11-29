import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import { store } from "./app/reducers";
import { Provider } from "react-redux";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import "./shared/config/i18n/i18n"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
