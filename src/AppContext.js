import React from 'react'
import logo from './logo.svg';
import './App.css';
import ThemeContext from './theme-context'
import ThemeBar from './components/ThemeBar'

const themes = {
    light: {
        className: 'btn btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        className: 'btn btn-light',
        bgColor: '#222222',
        color: '#fff'
    }
}
class AppContext extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            theme:'light'
        }
        this.changeTheme = this.changeTheme.bind(this)
    }
    changeTheme(theme){
        this.setState({
            theme: theme
        })
    }
    render(){
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className = "app-context">
                    context test
                    <header className = "App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to react</h1>
                        <button onClick={() => {this.changeTheme('light')}}>浅色主题</button>
                        <button onClick={() => {this.changeTheme('dark')}}>深色主题</button>
                    </header>
                    <ThemeBar/>
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default AppContext
