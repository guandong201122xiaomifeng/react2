import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContext from './AppContext'
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome'
import WelcomeRender from './Welcome-render'
import 'bootstrap/dist/css/bootstrap.min.css'
import NameCard from './components/NameCard'
import LikesBtn from './components/LikesBtn'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentBoxFei from './components/CommentBoxFei'
import CompUseState from './hook/UseState'
import {HashRouter as Router, Route} from 'react-router-dom'
import Normal from './hook/Normal'
import UseReducer from './hook/UseReducer'
import CompUseRef from './hook/UseRef'

console.log('React', React)
console.log('ReactDOM', ReactDOM)
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact render={() => <Normal/>}/>
      <Route path='/app' exact render={() => <App/>}/>
      <Route path='/UseRef' exact render={() => <CompUseRef/>}/>
      <Route path='/UseReducer' exact render={() => <UseReducer/>}/>
      <Route path='/useState' exact render={() => <CompUseState id='CompUseState'/>}/>
    </Router>
    <AppContext />
    {/* <App /> */}
    {/* <Welcome /> */}
    {/* <WelcomeRender /> */}
    {/* <NameCard name="xiaoming" isHuman tags={['帅','体贴','善良']}/> */}
    {/* <LikesBtn /> */}
    {/* <DigitalClock a="1"/> */}
    {/* <CommentBox /> */}
    {/* <CommentBoxFei /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
