import React, { useState, useEffect, useLayoutEffect } from 'react';
// useState 它让我们在函数组件中存储内部 state。
// 你不必使用多个 state 变量。State 变量可以很好地存储对象和数组，
// 因此，你仍然可以将相关数据分为一组。然而，不像 class 中的 this.setState，
// 更新 state 变量总是替换它而不是合并它。

function getInitCount(){
  // for(var i =0; i < 10000; i++){
  //   console.log(i)
  // }
  console.log('end')
  return 0
}

function Example(props) {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(getInitCount());
  useEffect(() => {
    console.log('count', count)
  })
  const [obj, setObj] = useState({a:1});
  const [num,setNum] = useState(20)
  const {id} = props
    // 相当于 componentDidMount 和 componentDidUpdate:
    // 当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You id:${id}, clicked ${count} times`;
        console.log('num', num)
        console.log('useEffect goes')
        return () => {
            console.log(`取消副作用 ${count}`)
        }
    },[count]); //只是在count变化的时候，才执行副作用
    useLayoutEffect(() => {
      console.log('useLayoutEffect goes')
    })
    useEffect(() => {
      console.log('obj.a', obj.a)
    },[obj])
  return (
    <div>
      <p>You clicked {count} times, obj.a {obj.a}</p>
      <button onClick={() => setObj({a:1})}>
      setObj
      </button>
      <button onClick={() => setNum(num - 1)}>
      setNum
      </button>
      {/* <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      <button onClick={() => setCount(preState => preState + 1)}>
        Click me preState setCount
      </button>
      <button onClick={() => setCount(count)}>
        no change setCount
      </button>
    </div>
  );
}
export default Example