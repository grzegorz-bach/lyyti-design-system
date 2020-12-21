import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-laptop_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-laptop_svg__cls-1"
      d="M21.75 12.75v6h-10.5v-6a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM11.25 18.75h10.5l1.171 3.513a.75.75 0 01-.712.987H10.791a.75.75 0 01-.712-.987z"
    />,
    <circle
      className="single-man-actions-laptop_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-laptop_svg__cls-1"
      d="M9.75 9.826a5.25 5.25 0 00-9 3.674v2.25H3l.75 7.5h3M6 8.25v6"
    />
  );

export default SvgSingleManActionsLaptop;