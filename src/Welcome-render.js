import React from 'react'
// import React, { Component } from 'react'

class WelcomeRender extends React.Component {
    render(){
        // return <h1>welcome render</h1>
        let test = React.createElement('h1',null,'welcome render')
        console.log('React.createElement test', test)
        return test
    }
}
// class WelcomeRender extends Component {
//     render(){
//         const test = <h1>456</h1>
//         console.log('test', test)
//         const isLogin = false
//         const todoList = ['Learn React', 'Learn Redux']
//         const obj = {a:1, b:2}
//         return <div className="container" htmlFor="abc">
//             {/* { obj } 如果是对象，会报错*/}
//             <h1>
//                 {[1, 2, 3]}
//                 {'456'}
//                 welcome render
//                 {5+6}
//             </h1>
//             { todoList.map(item => {
//                 return <li>{item}</li>
//             }) }
//             { <p>789</p> }
//             { isLogin? <p>您已经登录了</p>:  <p>请登录</p>}
//         </div>
//     }
// }
export default WelcomeRender;
