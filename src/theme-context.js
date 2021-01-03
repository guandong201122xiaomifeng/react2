import React from 'react'

const ThemeContext = React.createContext()
// 提供了两个组件ThemeContext.Provider ThemeContext.Consumer
//                            提供者     消费者
console.log('ThemeContext', ThemeContext)
export default ThemeContext
