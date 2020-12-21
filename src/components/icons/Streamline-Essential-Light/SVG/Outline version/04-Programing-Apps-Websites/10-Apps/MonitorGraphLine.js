import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraphLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5 22.504a.5.5 0 010-1h6v-1H2c-1.103 0-2-.897-2-2v-15c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v15c0 1.103-.897 2-2 2H12v1h7a.5.5 0 010 1H5zm-4-4c0 .552.449 1 1 1h20a1 1 0 001-1v-2H1v2zm22-3v-12c0-.551-.448-1-1-1H2c-.551 0-1 .449-1 1v8.293L5.896 6.9a.5.5 0 01.708 0l3.646 3.646 3.396-3.396a.5.5 0 11.708.707l-3.75 3.75a.5.5 0 01-.708 0L6.25 7.961 1 13.211v2.293h22z" />,
    <path d="M19.125 13.004a.5.5 0 01-.5-.5V12h-1a.5.5 0 010-1h2.031a.838.838 0 00.783-.529.832.832 0 00-.008-.644.834.834 0 00-.461-.45l-2.064-.825a1.835 1.835 0 01-1.156-1.708c0-1.016.825-1.842 1.841-1.843h.033v-.497a.5.5 0 011 0V5h1a.5.5 0 01.001 1h-1.456a.262.262 0 01-.096-.001L18.592 6c-.224 0-.435.088-.594.247s-.247.371-.247.595c0 .345.207.652.528.781l2.063.825a1.83 1.83 0 011.009.985c.194.452.2.953.017 1.41A1.835 1.835 0 0119.658 12h-.033v.504a.5.5 0 01-.5.5z" />
  );

export default SvgMonitorGraphLine;