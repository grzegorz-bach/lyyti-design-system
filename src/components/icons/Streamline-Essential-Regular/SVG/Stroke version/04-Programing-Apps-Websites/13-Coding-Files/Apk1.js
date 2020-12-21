import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApk1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".apk-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="apk-1_svg__a"
      x={0.738}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="apk-1_svg__a"
      d="M4.488 18v-6a1.5 1.5 0 013 0v6M4.488 15.004h3M10.488 18.004v-7.5M10.488 10.5h.75a2.25 2.25 0 010 4.5h-.75M16.488 18.004v-7.5M19.488 18.004l-3-3.75 3-3.75"
    />
  );

export default SvgApk1;