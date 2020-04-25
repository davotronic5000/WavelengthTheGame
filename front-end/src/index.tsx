import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";
import { theme } from "theme";
import * as serviceWorker from "./serviceWorker";
import GlobalPage from "theme/global";
import ViewController from "view-controller";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalPage>
                <ViewController />
            </GlobalPage>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
