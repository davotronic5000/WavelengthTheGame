import React, { Fragment, ComponentType } from "react";
import { Global } from "@emotion/core";
import css from "@emotion/css/macro";
import emotionNormalize from "emotion-normalize";
import { Theme } from "theme";

const GlobalPage: ComponentType = ({ children }) => {
    return (
        <Fragment>
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
                        color: theme.colors.text,
                    },
                })}
            />
            {children}
        </Fragment>
    );
};

export default GlobalPage;
