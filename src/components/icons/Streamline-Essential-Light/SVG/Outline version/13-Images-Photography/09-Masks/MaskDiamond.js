import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23.5c-.827 0-1.5-.673-1.5-1.5V2C.5 1.173 1.173.5 2 .5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zm0-22a.5.5 0 00-.5.5v20a.5.5 0 00.5.5h20a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2z" />,
    <path d="M12.001 20.78a.927.927 0 01-.716-.334l-6.83-7.741a1.086 1.086 0 01-.008-1.402l6.846-7.759a.93.93 0 011.418.006l6.833 7.744c.345.411.347.999.008 1.402l-6.846 7.759a.93.93 0 01-.705.325zm-6.795-8.824c-.019.023-.017.068.008.097l6.787 7.692 6.793-7.701c.019-.023.017-.068-.008-.098l-6.787-7.692-6.793 7.702z" />
  );

export default SvgMaskDiamond;