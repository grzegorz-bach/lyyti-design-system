import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.5C5.659 23.5.5 18.341.5 12S5.659.5 12 .5 23.5 5.659 23.5 12 18.341 23.5 12 23.5zm0-22C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M12 18.5a.5.5 0 01-.5-.5v-5.5H6a.5.5 0 010-1h5.5V6a.5.5 0 011 0v5.5H18a.5.5 0 010 1h-5.5V18a.5.5 0 01-.5.5z" />
  );

export default SvgAddCircle;