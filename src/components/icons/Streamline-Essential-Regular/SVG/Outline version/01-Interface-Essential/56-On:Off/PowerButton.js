import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 11.996a.75.75 0 01-.75-.75v-9.75a.75.75 0 011.5 0v9.75a.75.75 0 01-.75.75z" />,
    <path d="M12.008 23.245a9.772 9.772 0 01-9.2-6.501c-1.792-5.069.873-10.65 5.942-12.442a.752.752 0 01.5 1.414c-4.289 1.516-6.544 6.239-5.028 10.528a8.267 8.267 0 007.786 5.5c.933 0 1.855-.159 2.742-.472 4.289-1.517 6.544-6.24 5.028-10.528a8.214 8.214 0 00-5.028-5.028.744.744 0 01-.427-.384.752.752 0 01.928-1.03 9.71 9.71 0 015.942 5.942c1.792 5.069-.874 10.65-5.942 12.442a9.714 9.714 0 01-3.243.559c.001 0 0 0 0 0z" />
  );

export default SvgPowerButton;