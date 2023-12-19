import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={configureStore({})}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
