import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to='/'>Instragam</Link>
                </h1>
                {this.props.children}
            </div>
        )
    }
})

export default Main;