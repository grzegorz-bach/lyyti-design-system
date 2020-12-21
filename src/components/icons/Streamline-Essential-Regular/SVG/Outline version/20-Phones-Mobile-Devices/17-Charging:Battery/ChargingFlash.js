import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.25 18.75a.75.75 0 01-.75-.75v-4.5h-3a.756.756 0 01-.674-.42.754.754 0 01.082-.79l5.25-6.75a.755.755 0 01.835-.249A.75.75 0 0113.5 6v4.5h3c.284 0 .549.165.674.42a.756.756 0 01-.082.791l-5.25 6.75a.755.755 0 01-.592.289zm0-6.75a.75.75 0 01.75.75v3.064L14.966 12H12.75a.75.75 0 01-.75-.75V8.186L9.033 12h2.217z" />,
    <path d="M7.5 19.5C3.365 19.5 0 16.135 0 12s3.365-7.5 7.5-7.5a.75.75 0 010 1.5c-3.308 0-6 2.692-6 6s2.692 6 6 6a.75.75 0 010 1.5zM16.5 19.5a.75.75 0 010-1.5c3.308 0 6-2.692 6-6s-2.692-6-6-6a.75.75 0 010-1.5c4.135 0 7.5 3.365 7.5 7.5s-3.365 7.5-7.5 7.5z" />
  );

export default SvgChargingFlash;