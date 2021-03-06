import React, { Component } from 'react'
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


export class Photo extends Component {
    render() {
        const {post, comments, i} = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo"/>
                    </Link>

                    <CSSTransitionGroup transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                        <span key={this.props.post.likes} className="likes-heart">{this.props.post.likes}</span>
                    </CSSTransitionGroup>

                    <figcaption>
                        <p>{post.caption}</p>
                        <div className="control-buttons">
                            <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {this.props.post.likes}</button>
                            <Link className="button" to={`view/${post.code}`}>
                                <span className="comment-count">
                                    <span className="speech-bubble" style={{marginRight: "10px"}}></span> 
                                    {comments[post.code] ? comments[post.code].length : 0}
                                </span>
                            </Link>
                        </div>
                    </figcaption>
                </div>
            </figure>
        )
    }
}

export default Photo
