import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import PostIndex from './components/postsIndex.jsx';
import PostNew from './components/postNew.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={PostIndex} />
        <Route path="posts/new" component={PostNew} />
    </Route>

);
