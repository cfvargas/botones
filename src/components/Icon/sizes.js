import { css } from 'styled-components'

const small = css`
  height: 10px;
  right: 10px;
  top: calc(50% - (10px / 2));
  width: 15px;
`

const medium = css`
  height: 14px;
  right: 15px;
  top: calc(50% - (14px / 2));
  width: 17px;
`

const large = css`
  height: 16px;
  right: 20px;
  top: calc(50% - (16px / 2));
  width: 20px;
`

export default {
  small,
  medium,
  large
}
