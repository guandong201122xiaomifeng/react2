import React from 'react'

// class NameCard extends React.Component {
//     render(){
//         const { name, number, isHuman, tags=[] } = this.props
//         return <div className="alert alert-success">
//             namecard
//             <h4 className="alert-heading">{name}</h4>
//             <ul>
//                 <li>电话：{ number }</li>
//                 <li>{isHuman? '人类': '外来生物'}</li>
//                 <br/>
//                 <p>
//                     {
//                         tags.map((tag, index) => (
//                             <span
//                             className="badge badge-pill badge-primary"
//                             key={index}
//                             >{tag}</span>
//                         ))
//                     }
//                 </p>
//             </ul>
//         </div>
//     }
// }

// 函数式写法

const NameCard = (props) => {
    const { name, number, isHuman, tags=[] } = props
    // name等props属性不允许修改，得是纯函数
    return (<div className="alert alert-success">
        namecard
        <h4 className="alert-heading">{name}</h4>
        <ul>
            <li>电话：{ number }</li>
            <li>{isHuman? '人类': '外来生物'}</li>
            <br/>
            <p>
                {
                    tags.map((tag, index) => (
                        <span
                        className="badge badge-pill badge-primary"
                        key={index}
                        >{tag}</span>
                    ))
                }
            </p>
        </ul>
    </div>)
}

export default NameCard
