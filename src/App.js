// Cambios Daniel
import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { Login } from "./Screens/Login";
import { Menu } from "./Screens/Menu";
import M from "materialize-css";
export var HISTORY;
export var MATCH;
export var historyRefresher = function (r, child) {
    HISTORY = r.history;
    MATCH = r.match;
    return child;
};
export function toast(message) {
    M.toast({ html: message });
}
var view = (React.createElement(Router, null,
    React.createElement(Switch, null,
        React.createElement(Route, { exact: true, path: "/", render: function (a) { return historyRefresher(a, React.createElement(Redirect, { to: "/login" })); } }),
        React.createElement(Route, { exact: true, path: "/login", render: function (a) { return historyRefresher(a, React.createElement(Login, null)); } }),
        React.createElement(Route, { path: "/menu", render: function (a) {
                return historyRefresher(a, React.createElement(Menu, null));
            } }))));
render(view, document.getElementById("app"));
