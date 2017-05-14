import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import WelcomeContainer from './containers/WelcomeContainer.jsx'
import MainContainer from './containers/MainContainer.jsx'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'


window.onload = () => {
  render(
    <HashRouter>
    <div>
      <Route path = "/welcome" component = {WelcomeContainer} />
      <Route path = "/app" component = {MainContainer} />
    </div>
    </HashRouter>,
    document.getElementById('app')
    )
}


// <Route path = "/welcome" component = {WelcomeContainer} />
// <Route path = "/commuity" component = {CommunityContainer} />
// <Route path = "/about" component = {AboutContainer} />
// <Route path = "/logout" component = {LogOutContainer} />

// <Route path = "/" component = {Footer} />





// window.onload = function () {
//   ReactDOM.render(
//     <MainContainer/>,
//     document.getElementById('app')
//   );
// };



