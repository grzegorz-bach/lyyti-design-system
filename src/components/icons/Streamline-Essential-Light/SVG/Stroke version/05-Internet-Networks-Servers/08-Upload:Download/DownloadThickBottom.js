import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadThickBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-thick-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-thick-bottom_svg__a"
      d="M5.5 11.5c-.275 0-.341.159-.146.354l6.292 6.293a.5.5 0 00.709 0l6.311-6.275c.2-.193.13-.353-.145-.355L15.5 11.5v-10a1 1 0 00-1-1h-5a1 1 0 00-1 1V11a.5.5 0 01-.5.5zM23.5 18.5v4a1 1 0 01-1 1h-21a1 1 0 01-1-1v-4"
    />
  );

export default SvgDownloadThickBottom;