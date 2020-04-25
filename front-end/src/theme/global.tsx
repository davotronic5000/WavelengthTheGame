import React, { ComponentType } from "react";
import { Global } from "@emotion/core";
import css from "@emotion/css/macro";
import emotionNormalize from "emotion-normalize";
import { Theme, theme } from "theme";
import { ThemeProvider } from "emotion-theming";
import Page from "page";

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
                        backgroundColor: theme.colors.greyLight,
                        fontFamily: theme.fonts.body,
                        fontWeight: theme.fontWeights.body,
                        fontSize: theme.fontSizes[2],
                        color: theme.colors.dark,
                    },
                })}
            />
            <Page>{children}</Page>
        </ThemeProvider>
    );
};

export default GlobalPage;
