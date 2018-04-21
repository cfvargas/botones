import React from "react";
import styled from "styled-components";
import { getStylesByType } from "../../utils";

import * as Icons from "./icons";

import sizes from "./sizes";
import types from "./types";

const toCamelCase = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`

const Icon = ({ icon, className }) => {
  const iconName = toCamelCase(icon)

  if (!Object.getOwnPropertyNames(Icons).includes(iconName)) return null

  const IconSvg = Icons[iconName];
  return <IconSvg className={className} />;
};

const IconWithStyles = styled(Icon)``
  .extend`${props => getStylesByType(props.size, sizes)}`
  .extend`${props => getStylesByType(props.type, types)}`;

IconWithStyles.defaultProps = {
  size: "medium",
  type: "funnel"
}

export default IconWithStyles;
