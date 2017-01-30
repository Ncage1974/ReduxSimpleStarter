import React, { Component } from 'react';

class PostIndex extends Component {
    componentWillMount() {
        console.log('this would be a good time to call an action creator to fetch a post')
    }

    render() {
        return (
            <div>List of blog posts</div>
        )
    }
}

export default PostIndex;