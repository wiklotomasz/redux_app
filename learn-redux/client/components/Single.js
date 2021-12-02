import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments';

export class Single extends Component {
    render() {
        const {postId} = this.props.params;
        const postIndex = this.props.posts.findIndex((post) => {
            return post.code === postId
        });

        const post = this.props.posts[postIndex];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo {...this.props} key={post.id} i={post.id} post={post} />
                <Comments {...this.props} comments={postComments} />
            </div>
        )
    }
}

export default Single
