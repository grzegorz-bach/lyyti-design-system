import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 19.5A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h16.5A2.252 2.252 0 0121 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h9a.75.75 0 010 1.5h-9z" />,
    <path d="M6.375 15.75a2.628 2.628 0 01-2.625-2.625A2.629 2.629 0 016.375 10.5c.392 0 .776.089 1.125.255V6.331c0-.97.618-1.828 1.539-2.135l4.536-1.261c.206-.069.44-.107.676-.107A2.247 2.247 0 0116.5 5.081V8.25a.75.75 0 01-1.5 0V5.081a.752.752 0 00-.751-.75.73.73 0 00-.236.039L9.477 5.631c-.273.091-.477.382-.477.7v6.794a2.628 2.628 0 01-2.625 2.625zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125S7.5 13.745 7.5 13.125 6.995 12 6.375 12zM15.75 24a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121v-.879c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.879A2.26 2.26 0 0124 17.25v4.5A2.252 2.252 0 0121.75 24h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zM21 15v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25L21 15z" />,
    <circle cx={18.75} cy={19.529} r={1.125} />
  );

export default SvgPlaylistLock;