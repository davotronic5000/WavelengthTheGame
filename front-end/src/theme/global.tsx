import React, { ComponentType } from "react";
import { Global } from "@emotion/core";
import css from "@emotion/css/macro";
import emotionNormalize from "emotion-normalize";
import { Theme, theme } from "theme";
import { ThemeProvider } from "emotion-theming";

const GlobalPage: ComponentType = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={css`
                    ${emotionNormalize}
                `}
            />
            <Global
                styles={(theme: Theme) => ({
                    "*": { boxSizing: "border-box" },
                    html: {
                        fontFamily: "'Cabin', sans-serif",
                        color: theme.colors.dark,
                    },
                })}
            />
            {children}
        </ThemeProvider>
    );
};

export default GlobalPage;
