import React, { Component } from 'react'

export class Comments extends Component {
    render() {
        const {comments} = this.props;
        return (
            <div className="comment">
                {comments.map((comment, index) => {
                    return <p>{comment.text} x</p>
                })}
            </div>
        )
    }
}

export default Comments
