import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./style/Global";
import "antd/dist/antd.css";
import "@progress/kendo-theme-default/dist/all.css";
import { initializeApp } from "firebase/app";
import "react-slick/dist/react-slick";

export const firebaseConfig = {
  apiKey: "AIzaSyCXE-B4mSt23IiZRFYA0pUG-WzxzCpWFPo",
  authDomain: "e-commerce-bb0b3.firebaseapp.com",
  projectId: "e-commerce-bb0b3",
  storageBucket: "e-commerce-bb0b3.appspot.com",
  messagingSenderId: "1084219582064",
  appId: "1:1084219582064:web:6df89fce749f91ddd5b6b5",
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
