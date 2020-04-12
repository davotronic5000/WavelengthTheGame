import styled, { CreateStyled } from "@emotion/styled/macro";
import colors from "./colors";

export const theme = { colors };

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
