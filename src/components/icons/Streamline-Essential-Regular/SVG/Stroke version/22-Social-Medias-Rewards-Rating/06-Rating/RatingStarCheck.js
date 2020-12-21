import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-check_svg__a"
      d="M22.732 10.112l.278-.275a.805.805 0 00-.5-1.374l-6.44-.638L12.729 1.2a.819.819 0 00-1.458 0L7.925 7.825l-6.44.638a.805.805 0 00-.5 1.374l5.3 5.253-1.956 7.138a.813.813 0 001.151.935l3.737-1.851"
    />,
    <circle className="rating-star-check_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="rating-star-check_svg__a"
      d="M19.924 15.506l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5"
    />
  );

export default SvgRatingStarCheck;