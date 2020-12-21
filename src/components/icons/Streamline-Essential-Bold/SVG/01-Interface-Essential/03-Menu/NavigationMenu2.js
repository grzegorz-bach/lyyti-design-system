import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenu2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={6} y={3} width={18} height={4} rx={1.5} ry={1.5} />,
    <rect x={3} y={10} width={18} height={4} rx={1.5} ry={1.5} />,
    <rect y={17} width={18} height={4} rx={1.5} ry={1.5} />
  );

export default SvgNavigationMenu2;