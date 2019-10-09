import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from '@sentry/browser';
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({dsn: "https://78e5fe556aea46aa840267f7ffeb7382@sentry.io/1770027"});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
