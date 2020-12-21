import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChip8 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-8_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="computer-chip-8_svg__a" cx={12.001} cy={13.5} r={2.5} />,
    <circle className="computer-chip-8_svg__a" cx={12.001} cy={9.5} r={1.5} />,
    <rect
      className="computer-chip-8_svg__a"
      x={2.5}
      y={3.5}
      width={18.998}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="computer-chip-8_svg__a"
      d="M12 1.5v2M6.502 1.5v2M.5 12h2M.5 16.5h2M.5 7.5h2M23.5 12h-2M23.5 16.5h-2M23.5 7.5h-2M12 22.5v-2M6.502 22.5v-2M17.498 1.5v2M17.498 22.5v-2"
    />
  );

export default SvgComputerChip8;