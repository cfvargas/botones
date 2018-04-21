import { css } from "styled-components";
import Icon from "../Icon";

const small = css`
  border-radius: 4px;
  font-size: 14px;
  height: 40px;
  width: 131px;

  &:hover ${Icon} {
    right: 5px;
  }

  @media screen and (max-width: 576px) {
    height: 42px;
  }

  ${props => props.icon && "padding-right: 17px;"};
`;

const medium = css`
  border-radius: 5px;
  font-size: 15px;
  height: 59px;
  width: 180px;

  &:hover ${Icon} {
    right: 12px;
  }

  @media screen and (max-width: 576px) {
    height: 50px;
  }

  ${props => props.icon && "padding-right: 24px;"};
`;

const large = css`
  border-radius: 6px;
  font-size: 18px;
  height: 77px;
  width: 234px;

  &:hover ${Icon} {
    right: 15px;
  }

  @media screen and (max-width: 576px) {
    height: 58px;
  }

  ${props => props.icon && "padding-right: 32px;"};
`;

export default {
  small,
  medium,
  large
}
