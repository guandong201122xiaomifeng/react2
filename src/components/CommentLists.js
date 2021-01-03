import React from 'react'

// class CommentLists extends React.Component {
//     render () {
//         return (<div className="comment-list-component">
//         <label>评论列表</label>
//         <ul className="list-group mb-3">
//             {
//             this.props.comments.map((item, index) => {
//                 return <li key={index} className="list-group-item">{item}</li>
//             })
//             }
//         </ul>
//     </div>)
//     }
// }

function CommentLists(props){
    return (<div className="comment-list-component">
        <label>评论列表</label>
        <ul className="list-group mb-3">
            {
            props.comments.map((item, index) => {
                return <li key={index} className="list-group-item">{item}</li>
            })
            }
        </ul>
    </div>)
}
export default CommentLists
