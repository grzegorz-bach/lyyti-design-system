import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.997c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />,
    <path d="M8.126 18.002c-.456 0-.882-.244-1.112-.636a1.292 1.292 0 01-.075-1.147l1.301-2.986-2.329-2.074A1.236 1.236 0 016.743 9h2.686l1.411-3.268c.242-.452.686-.72 1.167-.72a1.297 1.297 0 011.158.72L14.574 9h2.666l.043-.001a1.238 1.238 0 01.806 2.157l-2.33 2.076 1.295 2.981c.135.322.136.673.005.99a1.275 1.275 0 01-1.187.795c-.226 0-.449-.059-.643-.171L12 16.007 8.765 17.83a1.267 1.267 0 01-.639.172zM6.738 10a.234.234 0 00-.163.411l2.601 2.316a.5.5 0 01.126.573l-1.443 3.312a.286.286 0 00.409.351l3.487-1.965a.503.503 0 01.49 0l3.479 1.961a.294.294 0 00.256.019.284.284 0 00.154-.373l-1.437-3.306a.498.498 0 01.126-.572l2.6-2.316a.234.234 0 00.003-.347.222.222 0 00-.159-.064h-3.022a.5.5 0 01-.459-.302l-1.529-3.545a.293.293 0 00-.254-.142.301.301 0 00-.265.157l-1.521 3.53a.498.498 0 01-.459.302h-3.02z" />
  );

export default SvgRatingStarCircle;