import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={21.5} r={0.75} />,
    <path d="M7.5 24A2.503 2.503 0 015 21.5v-19C5 1.121 6.121 0 7.5 0h9C17.878 0 19 1.121 19 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-9zM6 21.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V20H6v1.5zM18 19V5H6v14h12zm0-15V2.5c0-.827-.673-1.5-1.5-1.5h-9C6.673 1 6 1.673 6 2.5V4h12z" />,
    <path d="M10.5 3a.5.5 0 010-1h3a.5.5 0 010 1h-3zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />,
    <circle cx={12} cy={12} r={0.75} />
  );

export default SvgPhoneActionRecord;