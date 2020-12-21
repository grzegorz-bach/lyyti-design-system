import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="upload-box_svg__a" d="M17 14l-5-5-5 5M12 9v10.5" />,
    <path
      className="upload-box_svg__a"
      d="M22.629 4.572A6.22 6.22 0 0123 6.5v16a1 1 0 01-1 1H2a1 1 0 01-1-1v-16a6.22 6.22 0 01.371-1.928l1.258-3.144A1.6 1.6 0 014 .5h16a1.6 1.6 0 011.371.928zM12 6V.5M1.034 6h21.932"
    />
  );

export default SvgUploadBox;