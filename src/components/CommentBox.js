// 受控组件
import React from 'react'

class CommentBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        console.log('event', event)
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        alert(this.state.value)
        // 阻止默认行为
        event.preventDefault()
    }
    render(){
        return <form onSubmit={(event) => {this.handleSubmit(event)}}>
            <div className = "form-group">
                <label>留言内容</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="请输入内容"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </div>
            <button
                type = "submit"
                className="btn btn-primary"
            >
                留言
            </button>
        </form>
    }
}
export default CommentBox
