import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.269 19.252a.743.743 0 01-.53-.22L.52 14.811a1.784 1.784 0 01-.001-2.512L10.687 2.13a1.77 1.77 0 011.257-.518c.474 0 .92.183 1.255.517l5.448 5.448c.689.693.689 1.819.002 2.511L9.76 18.977a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.82-1.82-5.839-5.839-3.101 3.101a.281.281 0 00.001.394l4.218 4.22c.142.142.22.33.219.531s-.078.389-.22.53a.742.742 0 01-.529.219zm6.311-4.216l6.007-6.007a.28.28 0 00-.002-.393L12.14 3.191a.28.28 0 00-.394.001L5.742 9.196l5.838 5.84zM.75 22.25a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H.75zM12.75 22.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM17.25 22.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM21.75 22.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM8.25 22.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z" />
  );

export default SvgEraser;