import React, { Component } from 'react'
import { useParams } from 'react-router'
import Photo from './Photo'

export class Single extends Component {
    render() {
        const index = this.props.posts.findIndex((post) => {
            return post.code === this.props.params.postId
        });

        const item = this.props.posts[index];

        return (
            <div className="single-photo">
                <Photo {...this.props} key={item.id} i={item.id} post={item} />
            </div>
        )
    }
}

export default Single
