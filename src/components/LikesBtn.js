import React from 'react'
class LikesBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        // this.increaseLikes = this.increaseLikes.bind(this)
    }
    increaseLikes(){
        // 看行不行，先用alert来测试一下
        // alert('1234')
        console.log('this', this) //this undefined
        
        // setState的参数就是要当作state的
        this.setState({
            likes: ++this.state.likes
        })
    }
    render(){
        return (
            <div className="likes-button-component"
            >
                {/* dom的事件绑定是 onclick="functionName" 
                    oBtn.addEventListener('click',function(){console.log('function 里的 this',this)})
                    中的this指向的是oBtn

                    react则有些区别，
                    驼峰+变量： onClick={ this.increaseLikes }
                    而且触发点击事件的时候，this.increaseLikes方法里的this是undefined,获取不到实例上的属性
                    所以要指定this为实例,this.increaseLikes = this.increaseLikes.bind(this)

                    或者用箭头函数

                */}
                {/* onClick={ this.increaseLikes } */}
                <button
                    onClick={ () => {this.increaseLikes()} }
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                >
                    👍{this.state.likes}
                </button>
            </div>
        )
        return <button>点赞1</button>
    }
}

// const LikesBtn = (props) => {
//     return <button>点赞</button>
// }

export default LikesBtn
