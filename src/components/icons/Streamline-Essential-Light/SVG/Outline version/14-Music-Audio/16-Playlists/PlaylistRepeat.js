import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistRepeat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 19.25c-.827 0-1.5-.673-1.5-1.5v-16C0 .923.673.25 1.5.25h16c.827 0 1.5.673 1.5 1.5v10a.5.5 0 01-1 0v-10a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h10a.5.5 0 010 1h-10z" />,
    <path d="M5 15.25c-1.103 0-2-.897-2-2a2.002 2.002 0 013-1.732V7.5c0-.666.447-1.259 1.087-1.442l5-1.429A1.507 1.507 0 0114 6.072v6.178c0 1.103-.897 2-2 2s-2-.897-2-2a2.002 2.002 0 013-1.732V6.072a.502.502 0 00-.637-.482l-5 1.429A.503.503 0 007 7.5v5.75c0 1.103-.897 2-2 2zm0-3a1.001 1.001 0 000 2 1.001 1.001 0 000-2zm7-1a1.001 1.001 0 101 1c0-.551-.448-1-1-1zM16.5 22.25c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5h.793l-.646-.646a.5.5 0 01.708-.707l1.5 1.5a.496.496 0 01.109.545.477.477 0 01-.109.163l-1.499 1.499a.5.5 0 11-.708-.707l.646-.646H16.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5a.5.5 0 010 .999zM20 23.75a.5.5 0 01-.354-.146l-1.5-1.5a.496.496 0 01-.109-.545.477.477 0 01.109-.163l1.499-1.499a.5.5 0 11.708.708l-.646.646h.793c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5a.5.5 0 010-1c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5h-.793l.646.646a.5.5 0 01-.353.853z" />
  );

export default SvgPlaylistRepeat;