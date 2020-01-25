import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/reduxStore";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

export let rerenderTree = state => {
  debugger;
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};
rerenderTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
