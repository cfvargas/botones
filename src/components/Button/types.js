import { css } from "styled-components";
import { colors } from "../../colors";
import Icon from "../Icon";

function principalType({ bgColor, textColor, hoverBgColor, activeTextColor }) {
  return css`
    background-color: ${bgColor};
    color: ${textColor};
    &:hover,
    &:active {
      background-color: ${hoverBgColor};
    }
    &:active {
      color: ${activeTextColor};
    }
  `;
}

function funnelType({
  bgColor,
  borderColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  activeTextColor
}) {
  return css`
    background-color: ${bgColor};
    border: 3px solid ${borderColor};
    color: ${textColor};
    &:hover,
    &:active {
      background-color: ${hoverBgColor};
      color: ${hoverTextColor};
    }
    &:active {
      color: ${activeTextColor};
    }
  `;
}

function specialType({
  bgColor,
  borderColor,
  textColor,
  hoverTextColor,
  activeBgColor,
  activeTextColor
}) {
  return css`
    background-color: ${bgColor};
    border: 3px solid ${borderColor};
    color: ${textColor};
    padding-right: 0;

    &:hover,
    &:active {
      color: ${hoverTextColor};
    }
    &:active {
      background-color: ${activeBgColor};
      color: ${activeTextColor};
    }
  `;
}

function IconStyles({ hoverColor, activeColor }) {
  return css`
    &:hover ${Icon} path {
      fill: ${hoverColor};
    }
    &:active ${Icon} path {
      fill: ${activeColor};
    }
  `;
}

const primary = css`
  ${principalType({
    bgColor: colors.green,
    textColor: colors.white,
    hoverBg: colors.darkGreen,
    activeTextColor: colors.pushColor
  })};

  ${IconStyles({
    hoverColor: colors.white,
    activeColor: colors.pushColor
  })};
`;

const secondary = css`
  ${principalType({
    bgColor: colors.blue,
    textColor: colors.white,
    hoverBgColor: colors.hoverBlue,
    activeTextColor: colors.pushColor
  })};

  ${IconStyles({
    hoverColor: colors.white,
    activeColor: colors.pushColor
  })};
`;

const funnel = css`
  ${funnelType({
    bgColor: colors.white,
    borderColor: colors.darkBlue,
    textColor: colors.darkBlue,
    hoverBgColor: colors.darkBlue,
    hoverTextColor: colors.white,
    activeTextColor: colors.pushColor
  })};

  ${IconStyles({
    hoverColor: colors.white,
    activeColor: colors.pushColor
  })};
`;

const funnelSecondary = css`
  ${funnelType({
    bgColor: colors.darkBlue,
    borderColor: colors.white,
    textColor: colors.white,
    hoverBgColor: colors.white,
    hoverTextColor: colors.darkBlue,
    activeTextColor: colors.gray
  })};

  ${IconStyles({
    hoverColor: colors.darkBlue,
    activeColor: colors.gray
  })};
`;

const specialPrimary = css`
  ${specialType({
    bgColor: colors.white,
    borderColor: colors.green,
    textColor: colors.green,
    hoverTextColor: colors.white,
    activeBgColor: colors.green,
    activeTextColor: colors.green
  })};

  ${IconStyles({
    hoverColor: colors.green,
    activeColor: colors.white
  })};
`;

const specialSecondary = css`
  ${specialType({
    bgColor: colors.white,
    borderColor: colors.hoverBlue,
    textColor: colors.hoverBlue,
    hoverTextColor: colors.white,
    activeBgColor: colors.hoverBlue,
    activeTextColor: colors.hoverBlue
  })};

  ${IconStyles({
    hoverColor: colors.hoverBlue,
    activeColor: colors.white
  })};
`;

const specialFunnelSecondary = css`
  background-color: ${colors.blue};
  border: 3px solid ${colors.white};
  color: ${colors.white};
  padding-right: 0;

  &:hover,
  &:active {
    color: ${colors.blue};
  }
  &:active {
    background-color: ${colors.white};
    color: ${colors.white};
  }

  ${IconStyles({
    hoverColor: colors.white,
    activeColor: colors.blue
  })};
`;

const disabled = css`
  background-color: ${colors.gray};
  color: ${colors.white};
  padding-right: 0;

  &:hover {
    background-color: ${colors.gray};
    color: ${colors.white};
  }

  & ${Icon} path {
    fill: ${colors.gray};
  }
`;

export default {
  primary,
  secondary,
  funnel,
  disabled,
  "funnel-secondary": funnelSecondary,
  "special-primary": specialPrimary,
  "special-secondary": specialSecondary,
  "special-funnel-secondary": specialFunnelSecondary
};
