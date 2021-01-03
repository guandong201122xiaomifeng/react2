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


console.log('React', React)
console.log('ReactDOM', ReactDOM)
ReactDOM.render(
  <React.StrictMode>
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
