import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M12 17c-5.277 0-8.269-4.688-8.299-4.735a.501.501 0 010-.53C3.731 11.688 6.723 7 12 7c5.289 0 8.27 4.688 8.299 4.735a.501.501 0 010 .53C20.27 12.312 17.289 17 12 17zm-7.266-5c.683.929 3.248 4 7.266 4s6.582-3.071 7.266-4c-.684-.929-3.248-4-7.266-4s-6.582 3.071-7.266 4z" />,
    <path d="M12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />,
    <circle cx={12} cy={12} r={0.75} />
  );

export default SvgViewCircle;