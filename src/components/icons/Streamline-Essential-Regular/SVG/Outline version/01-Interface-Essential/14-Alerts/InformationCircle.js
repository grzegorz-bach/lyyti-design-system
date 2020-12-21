import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInformationCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M13.5 17.25A2.252 2.252 0 0111.25 15v-3.75h-.75a.75.75 0 010-1.5h.75c.827 0 1.5.673 1.5 1.5V15c0 .414.336.75.75.75h.75a.75.75 0 010 1.5h-.75z" />,
    <circle cx={11.625} cy={7.125} r={1.125} />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />
  );

export default SvgInformationCircle;