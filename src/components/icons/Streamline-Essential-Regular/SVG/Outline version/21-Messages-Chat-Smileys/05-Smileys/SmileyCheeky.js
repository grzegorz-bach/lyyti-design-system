import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCheeky = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M12 19.5a.75.75 0 010-1.5h.001a5.965 5.965 0 005.375-3.333.745.745 0 011.005-.339.747.747 0 01.377.433c.064.19.05.393-.039.573A7.457 7.457 0 0112 19.501zM5.25 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM14.25 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z" />
  );

export default SvgSmileyCheeky;