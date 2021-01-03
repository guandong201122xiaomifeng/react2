import React from 'react'

class DigitalClock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date()
        }
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentDidUpdate(currentProps, currentState){
        // 接受两个参数，当前的props, 当前的state
        console.log('componentDidUpdate', currentProps, currentState)
    }
    componentWillUnmount(){
        console.log('componentWillMount')
        clearInterval(this.timer)
    }
    render(){
        return <div
            className="digital-clock-component jumbotron"
        >
            <h1>{this.state.time.toLocaleTimeString()}</h1>
        </div>
    }
}

export default DigitalClock
