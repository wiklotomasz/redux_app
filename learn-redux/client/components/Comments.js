import React, { Component } from 'react'

export class Comments extends Component {
    constructor(props) {
        super(props);

        this.postId = this.props.params.postId;
        this.submitHandler = this.submitHandler.bind(this);
        this.removeCommentHandler = this.removeCommentHandler.bind(this);
    }

    renderComments(comments) {
        return comments.map((comment, index) => {
            return (
                <div className="comment" key={index}>
                    <p>
                        <strong>{comment.user}</strong>
                        {comment.text}
                        <button onClick={this.removeCommentHandler.bind(null, index)} className="remove-comment">&times;</button>
                    </p>
                </div>
            )
        })
    }

    removeCommentHandler(index) {
        this.props.removeComment(this.postId, index);
    }

    submitHandler(event) {
        event.preventDefault();
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        if (author && comment) {
            this.props.addComment(this.postId, author, comment);
            this.refs.commentForm.reset();
            this.refs.author.focus();
        }
    }

    render() {
        const {comments} = this.props;
        return (
            <div className="comments">
                {this.renderComments(comments)}
                <form ref="commentForm" onSubmit={this.submitHandler} className="comment-form">
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
}

export default Comments
