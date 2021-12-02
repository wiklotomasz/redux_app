import React, { Component } from 'react'
import Photo from './Photo'

export class PhotoGrid extends Component {
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((item, i) => {
                    return <Photo {...this.props} key={item.id} i={item.id} post={item} />
                })}
            </div>
        )
    }
}

export default PhotoGrid
