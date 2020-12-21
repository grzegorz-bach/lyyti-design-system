import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleCheck1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-check-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-check-1_svg__a"
      d="M9.5 16l-2 2v-4H7A6.519 6.519 0 01.5 7.5c0-3.575 2.925-7 6.5-7h8c3.575 0 6.5 3.425 6.5 7A6.45 6.45 0 0121 10"
    />,
    <circle
      className="messages-bubble-check-1_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="messages-bubble-check-1_svg__a"
      d="M20.174 15.755l-2.905 3.874a.751.751 0 01-1.131.08l-1.5-1.5"
    />
  );

export default SvgMessagesBubbleCheck1;