import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import AppBar from './AppBar';
import Match from './Match';

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
};

const containerStyle = {
  marginRight: '.5rem',
  marginLeft: '.5rem',
};

const matchStyle = {
  marginBottom: '1rem',
};

const App = () => (
  <MuiThemeProvider>
    <div style={pageStyle}>
      <AppBar />
      <div style={containerStyle}>
        <Match style={matchStyle} />
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
