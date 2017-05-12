import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer.jsx'

window.onload = function () {
  ReactDOM.render(
    <HomeContainer/>,
    document.getElementById('app')
  );
};
