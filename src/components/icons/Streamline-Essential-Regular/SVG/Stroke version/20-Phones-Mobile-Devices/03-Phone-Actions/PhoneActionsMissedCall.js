import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsMissedCall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-missed-call_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-missed-call_svg__a"
      d="M12.37 22.54l.01.007a4.5 4.5 0 005.6-.615l.629-.629a1.5 1.5 0 000-2.122l-2.653-2.651a1.5 1.5 0 00-2.122 0 1.5 1.5 0 01-2.121 0l-4.242-4.243a1.5 1.5 0 010-2.121 1.5 1.5 0 000-2.122L4.819 5.393a1.5 1.5 0 00-2.121 0l-.63.629a4.5 4.5 0 00-.614 5.6l.006.01A40.606 40.606 0 0012.37 22.54zM23.25 2.25l-6 6-7.5-7.5"
    />,
    <path className="phone-actions-missed-call_svg__a" d="M9.75 5.25V.75h4.5" />
  );

export default SvgPhoneActionsMissedCall;