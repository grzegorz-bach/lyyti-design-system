import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="common-file-text-share_svg__a"
      cx={13.5}
      cy={18}
      r={2.25}
    />,
    <circle
      className="common-file-text-share_svg__a"
      cx={21}
      cy={21}
      r={2.25}
    />,
    <circle
      className="common-file-text-share_svg__a"
      cx={21}
      cy={13.5}
      r={2.25}
    />,
    <path
      className="common-file-text-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M3.75 6.75h10.5M3.75 11.25h10.5M3.75 15.75H7.5M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V7.5"
    />
  );

export default SvgCommonFileTextShare;