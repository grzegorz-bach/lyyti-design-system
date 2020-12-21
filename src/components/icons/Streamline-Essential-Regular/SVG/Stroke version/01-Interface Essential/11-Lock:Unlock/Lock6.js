import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock6 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-6_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="lock-6_svg__a"
      x={3.75}
      y={9.75}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-6_svg__a"
      d="M6.75 9.75V6a5.25 5.25 0 0110.5 0v3.75"
    />,
    <circle className="lock-6_svg__a" cx={12} cy={16.5} r={2.25} />
  );

export default SvgLock6;