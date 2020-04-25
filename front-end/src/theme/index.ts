import styled, { CreateStyled } from "@emotion/styled/macro";

export const theme = {
    borders: {
        solid: "1px solid",
    },
    breakpoints: ["600px", "900px", "1200px", "1800px"],
    buttons: {
        primary: {
            fontSize: 2,
            fontWeight: "bold",
            bg: "primary",
            color: "greyLight",
            borderRadius: "default",
            border: "solid",
            borderColor: "primaryDark",
            cursor: "pointer",
            transition: "background-color .8s, border-color .8s",
            "&:hover": {
                bg: "primaryDark",
                borderColor: "dark",
            },
        },
        small: {
            variant: "buttons.primary",
            px: 2,
            py: 1,
            fontSize: 1,
        },
    },
    colors: {
        dark: "#493843",
        primaryDark: "#556869",
        primary: "#61988E",
        greyLight: "#CCDAD1",
        greyMedium: "#9CAEA9",
        greyDark: "#788585",
    },
    fonts: {
        body: "'Cabin', sans-serif",
        heading: "inherit",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
        body: 400,
        bold: 700,
        heading: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    radii: {
        default: 2,
    },
    space: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
};

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
