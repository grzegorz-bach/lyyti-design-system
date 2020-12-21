import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRotate2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-rotate-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="phone-rotate-2_svg__a"
      x={7}
      y={3.5}
      width={10}
      height={17}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 12 12)"
    />,
    <path
      className="phone-rotate-2_svg__a"
      d="M12.353 19.425l7.072-7.072M6.5 23.498L9 21.5l-2.5-2.002M9 21.5c-3.462.654-7.5-1.5-8.5-5M17.5.502L15 2.5l2.5 2.002M15 2.5c3.462-.654 7.5 1.5 8.5 5"
    />
  );

export default SvgPhoneRotate2;