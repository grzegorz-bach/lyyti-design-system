import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-check_svg__a"
      d="M18.5 11.5v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-check_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-check_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-check_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12"
    />,
    <circle className="playlist-check_svg__a" cx={18.5} cy={18.5} r={5} />,
    <path
      className="playlist-check_svg__a"
      d="M16.5 19l1.083 1.083a.5.5 0 00.76-.063L20.5 17"
    />
  );

export default SvgPlaylistCheck;