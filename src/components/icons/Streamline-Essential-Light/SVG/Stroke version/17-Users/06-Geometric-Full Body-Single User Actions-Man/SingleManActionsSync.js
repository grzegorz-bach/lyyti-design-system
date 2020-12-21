import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-sync_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-sync_svg__cls-1"
      d="M19 15.5h4.5V11M23.158 15.5a6 6 0 10-.968 5.742M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-sync_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-sync_svg__cls-1"
      d="M10.013 11.845A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsSync;