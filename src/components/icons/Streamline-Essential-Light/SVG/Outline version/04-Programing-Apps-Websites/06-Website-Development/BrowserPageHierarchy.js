import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22.5A2.503 2.503 0 010 20V4c0-1.379 1.121-2.5 2.5-2.5h19C22.878 1.5 24 2.621 24 4v16c0 1.378-1.122 2.5-2.5 2.5h-19zM1 20c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V7.5H1V20zM23 6.5V4c0-.827-.673-1.5-1.5-1.5h-19C1.673 2.5 1 3.173 1 4v2.5h22z" />,
    <circle cx={4} cy={4.5} r={0.75} />,
    <circle cx={7} cy={4.5} r={0.75} />,
    <circle cx={10} cy={4.5} r={0.75} />,
    <path d="M17 19.5a1 1 0 01-1-1v-2a1 1 0 011-1V13a.5.5 0 00-.5-.5h-2.771a1.996 1.996 0 01-1.229.935V15.5h.5a1 1 0 011 1v2a1 1 0 01-1 1h-2c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h.5v-2.065a1.996 1.996 0 01-1.229-.935H7.5a.5.5 0 00-.5.5v2.5c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1H5c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h1V13c0-.827.673-1.5 1.5-1.5H10c0-1.103.897-2 2-2s2 .897 2 2h2.5c.827 0 1.5.673 1.5 1.5v2.5h1a1 1 0 011 1v2a1 1 0 01-1 1h-2zm0-1h2v-2h-2v2zm-6 0h2v-2h-2v2zm-6 0h2v-2H5v2zm7-8c-.551 0-1 .449-1 1s.449 1 1 1a1.001 1.001 0 000-2z" />
  );

export default SvgBrowserPageHierarchy;