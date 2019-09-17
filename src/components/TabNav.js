import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

function TabNav() {
  return (
    <Menu>
      <NavLink exact to="/" activeClassName="nav-links">
        Home Page
      </NavLink>
      <i className="right angle icon divider"></i>
      <NavLink exact to="/characters" activeClassName="nav-links">
        Characters
      </NavLink>
      <i className="right angle icon divider"></i>
      <NavLink exact to="/locations" activeClassName="nav-links">
        Locations
      </NavLink>
      <i className="right angle icon divider"></i>
      <NavLink exact to="/episodes" activeClassName="nav-links">
        Episodes
      </NavLink>
    </Menu>
  );
}

export default TabNav;
