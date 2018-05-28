import React from 'react';
import AppBar from 'material-ui/AppBar';

const AppBarExampleIcon = props => (
  <div>
    <AppBar
      title="Basket Match!"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={props.style}
    />
    {props.children}
  </div>
);

export default AppBarExampleIcon;
