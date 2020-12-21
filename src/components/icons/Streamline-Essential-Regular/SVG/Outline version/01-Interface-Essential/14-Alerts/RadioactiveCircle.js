import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioactiveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={12} r={1.125} />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M3.75 12.75A.75.75 0 013 12a9.023 9.023 0 014.499-7.795.752.752 0 011.025.275l2.439 4.223a.745.745 0 01-.275 1.024A2.63 2.63 0 009.375 12a.745.745 0 01-.22.531.744.744 0 01-.53.22H3.75zm4.194-1.5c.172-.93.66-1.773 1.379-2.387L7.619 5.912a7.515 7.515 0 00-3.081 5.338h3.406zM12 20.999a9.01 9.01 0 01-4.501-1.203.746.746 0 01-.349-.456.744.744 0 01.075-.569l2.439-4.223a.744.744 0 01.649-.375.76.76 0 01.375.1 2.623 2.623 0 002.624.001.748.748 0 011.025.274l2.438 4.222a.749.749 0 01-.274 1.025A9.001 9.001 0 0112 20.999zm-3.083-2.16c.963.433 2.021.66 3.082.66a7.543 7.543 0 003.082-.66l-1.704-2.95a4.112 4.112 0 01-1.377.235c-.475 0-.938-.079-1.379-.236l-1.704 2.951zM15.375 12.75a.75.75 0 01-.75-.75c0-.935-.503-1.806-1.313-2.274a.746.746 0 01-.274-1.025l2.438-4.221a.752.752 0 011.024-.275 9.019 9.019 0 014.501 7.794.75.75 0 01-.75.75h-4.876zm4.088-1.5a7.513 7.513 0 00-3.083-5.337l-1.703 2.949a4.13 4.13 0 011.378 2.388h3.408z" />
  );

export default SvgRadioactiveCircle;