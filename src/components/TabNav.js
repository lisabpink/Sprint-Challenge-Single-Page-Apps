import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/
const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("heart", "Home Page");
const characterLabel = createLabel("child", "Characters");
const locationLabel = createLabel("map marker", "Locations"); 
const episodesLabel = createLabel("play circle", "Episodes");

const panes = [
  {
    menuItem: (
      <Menu.Item key="home" as={NavLink} to={`/`} content={welcomeLabel} />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="characters"
        as={NavLink}
        to={`/characters`}
        content={characterLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="locations"
        as={NavLink}
        to={`/locations`}
        content={locationLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="episodes"
        as={NavLink}
        to={`/episodes`}
        content={episodesLabel} 
      />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;


  


export default TabNav;
