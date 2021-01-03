import React from 'react'
import logo from './logo.svg';
import './App.css';
import CommentLists from './components/CommentLists'
import CommentBox2 from './components/CommentBox2'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // 初始化，方便测试
      comments: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment){
    let res = [...this.state.comments, comment];
    this.setState({
      comments: res
    })
  }
  render(){
    const { comments } = this.state
    return (
      <div>
        app.js
        <CommentLists comments={comments} />
        <CommentBox2 commentsLength = {comments.length} addComment={this.addComment}/>
      </div>
    )
  }
}

export default App;
