import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.499 18a.5.5 0 010-1h1.5c.551 0 1-.448 1-1v-1h-6.5c-.827 0-1.5-.673-1.5-1.5v-12c0-.827.673-1.5 1.5-1.5h18c.827 0 1.5.673 1.5 1.5v10a.5.5 0 01-1 0v-10a.5.5 0 00-.5-.5h-18a.5.5 0 00-.5.5V11h13.5a.5.5 0 010 1H.999v1.5a.5.5 0 00.5.5h11a.5.5 0 010 1h-3.5v1c0 .357-.093.699-.268 1h2.768a.5.5 0 010 1h-6z" />,
    <circle cx={17.499} cy={20.75} r={0.75} />,
    <path d="M17.499 19a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z" />,
    <path d="M12.443 23.997a1.43 1.43 0 01-1.281-2.094l5.055-9.635a1.45 1.45 0 012.556-.01l5.062 9.645c.233.443.214.982-.048 1.408-.267.43-.728.686-1.231.686H12.443zm5.055-11.5a.446.446 0 00-.396.238l-5.054 9.632a.426.426 0 00.014.419c.082.131.224.21.379.21h10.114c.157 0 .3-.079.383-.212a.424.424 0 00.013-.417l-5.056-9.635a.446.446 0 00-.397-.235z" />
  );

export default SvgMonitorWarning;