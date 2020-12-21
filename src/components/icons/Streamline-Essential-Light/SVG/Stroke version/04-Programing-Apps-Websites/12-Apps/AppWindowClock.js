import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-clock_svg__a"
      d="M.518 4.504h20M3.518 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.518 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.518 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-clock_svg__a"
      d="M8.518 16.5h-6a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2V10"
    />,
    <circle
      className="app-window-clock_svg__a"
      cx={17.518}
      cy={17.505}
      r={6}
    />,
    <path className="app-window-clock_svg__a" d="M19.518 17.505h-2v-3" />
  );

export default SvgAppWindowClock;