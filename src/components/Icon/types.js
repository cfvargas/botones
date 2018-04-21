import { css } from "styled-components";
import { colors } from "../../colors";

function addFill(color) {
  return css`
    & path {
      fill: ${color};
    }
  `;
}

const primary = css`${addFill(colors.white)}`;
const secondary = css`${addFill(colors.white)}`;
const funnel = css`${addFill(colors.darkBlue)}`;
const funnelSecondary = css`${addFill(colors.white)}`;
const specialPrimary = css`${addFill(colors.white)}`;
const specialFunnelSecondary = css`${addFill(colors.white)}`;

export default {
  primary,
  secondary,
  funnel,
  "funnel-secondary": funnelSecondary,
  "special-primary": specialPrimary,
  "special-funnel-secondary": specialFunnelSecondary
};
