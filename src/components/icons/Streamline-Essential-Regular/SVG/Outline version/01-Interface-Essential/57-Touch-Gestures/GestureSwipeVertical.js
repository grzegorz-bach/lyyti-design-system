import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17 5.998a.75.75 0 01-.75-.75V2.559l-2.47 2.47a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.75-3.75a.75.75 0 01.245-.163l.024-.009a.712.712 0 01.522-.001l.032.012a.75.75 0 01.238.16l3.75 3.75c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47v2.689a.752.752 0 01-.751.751zM17 23.998a.767.767 0 01-.258-.046l-.017-.006a.748.748 0 01-.256-.167l-3.75-3.75a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47v-2.689a.75.75 0 011.5 0v2.689l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75a.74.74 0 01-.245.163l-.026.01a.742.742 0 01-.258.046zM14 13.498a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z" />,
    <path d="M3.266 16.498a.75.75 0 010-1.5H14.75c1.654 0 3-1.346 3-3s-1.346-3-3-3H3.25a.75.75 0 010-1.5h11.5c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5H3.266z" />
  );

export default SvgGestureSwipeVertical;