import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.jsx';
import PostIndex from './components/postsIndex.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={PostIndex} />
    </Route>

);
