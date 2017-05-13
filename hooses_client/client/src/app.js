import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer.jsx'

window.onload = function () {
  ReactDOM.render(
    <MainContainer/>,
    document.getElementById('app')
  );
};
