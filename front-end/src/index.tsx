import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import GlobalPage from "theme/global";
import ViewController from "view-controller";
import { LocalPlayerContextProvider } from "local-state";

ReactDOM.render(
    <React.StrictMode>
        <LocalPlayerContextProvider>
            <GlobalPage>
                <ViewController />
            </GlobalPage>
        </LocalPlayerContextProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
