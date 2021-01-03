// 非受控组件
// 不要用state来控制表单元素
import React from 'react'

class CommentBox extends React.Component {
    constructor(props){
        super(props)
    }
    handleSubmit(event){
        alert(this.textInput.value)
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
                    ref={(textInput) => {this.textInput = textInput}}
                />
                {/* ref={(textInput) => {this.textInput = textInput}}
                    this.textInput可以拿到dom节点
                */}
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
