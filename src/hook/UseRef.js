import React, { useRef } from 'react';

function CompUseRef() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` 指向已挂载到 DOM 上的文本输入元素
      inputEl.current.focus();
    };
    let oldRef
    function getOldRef(){
        console.log(oldRef)
        oldRef.focus()
    }
    return (
      <div>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        <div></div>
        <input ref={input => {oldRef = input}} type="text" />
        <button onClick={getOldRef}>getOldRef</button>
      </div>
    );
  }
  export default CompUseRef