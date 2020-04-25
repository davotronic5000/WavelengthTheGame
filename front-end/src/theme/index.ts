import styled, { CreateStyled } from "@emotion/styled/macro";
import colors from "./colors";

export const theme = {
    colors: {
        dark: "#493843",
        primaryDark: "#556869",
        primary: "#61988E",
        greyLight: "#CCDAD1",
        greyMedium: "#9CAEA9",
        greyDark: "#788585",
    },
};

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
