import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const pointContainerStyle = {
  display: 'flex',
  marginLeft: '-.5rem',
  marginRight: '-.5rem',
  marginBottom: '.5rem',
};

const pointButtonStyle = {
  width: '50%',
  paddingLeft: '.5rem',
  paddingRight: '.5rem',
};

const Match = props => (
  <div style={props.style}>
    <div style={pointContainerStyle}>
      <div style={pointButtonStyle}>
        <RaisedButton label="Jugador 1" secondary fullWidth/>
      </div>
      <div style={pointButtonStyle}>
        <RaisedButton label="Jugador 2" secondary fullWidth/>
      </div>
    </div>
    <RaisedButton label="Empezar partido" fullWidth primary/>
  </div>
);

export default Match;
