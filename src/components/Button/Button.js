import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import { getStylesByType } from "../../utils";

import sizes from "./sizes";
import types from "./types";

const Button = styled.button.attrs({
  children: props => (
    <React.Fragment>
      {props.icon && <Icon {...props} />}
      {props.text}
    </React.Fragment>
  )
})`
  border: none;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  padding: 0;
  position: relative;
  transition: 0.05s;
  cursor: pointer;

  & ${Icon} {
    position: absolute;
  }
`
  .extend`${props => getStylesByType(props.size, sizes)}`
  .extend`${props => getStylesByType(props.type, types)}`
  .extend`${props => props.disabled && types.disabled}`;



export default Button;
