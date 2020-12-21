import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentXylophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24A1.5 1.5 0 010 22.501v-21C0 1.1.157.723.44.44A1.49 1.49 0 011.878.049l21 5.478A1.5 1.5 0 0124 6.979v10.043a1.502 1.502 0 01-1.122 1.45l-2.25.587a.501.501 0 01-.253-.968l2.25-.587a.5.5 0 00.375-.483V6.979a.5.5 0 00-.374-.484L19 5.549v9.442a.5.5 0 01-1 0V5.288l-5-1.304V6.5a.5.5 0 01-1 0V3.723L7 2.419v19.162l5-1.305V16.5a.5.5 0 011 0v3.516l2.32-.605a.502.502 0 01.61.357.5.5 0 01-.357.61L1.878 23.951A1.514 1.514 0 011.5 24zm0-22.999A.497.497 0 001 1.5v21a.5.5 0 00.626.483L6 21.842V2.158L1.626 1.017a.484.484 0 00-.126-.016z" />,
    <path d="M21.5 24a.497.497 0 01-.392-.189l-7.35-9.285A3.48 3.48 0 0112 15c-1.93 0-3.5-1.57-3.5-3.5S10.07 8 12 8s3.5 1.57 3.5 3.5a3.51 3.51 0 01-.961 2.402l7.353 9.288a.502.502 0 01-.392.81zM12 9a2.502 2.502 0 00-2.5 2.5c0 1.378 1.121 2.5 2.5 2.5 1.378 0 2.5-1.122 2.5-2.5S13.378 9 12 9z" />,
    <circle cx={3.5} cy={3.5} r={0.75} />,
    <circle cx={9.5} cy={4.961} r={0.75} />,
    <circle cx={15.5} cy={6.417} r={0.75} />,
    <circle cx={21} cy={7.75} r={0.75} />,
    <circle cx={3.5} cy={20.5} r={0.75} />,
    <circle cx={9.5} cy={19.039} r={0.75} />,
    <circle cx={21} cy={16.25} r={0.75} />
  );

export default SvgInstrumentXylophone;