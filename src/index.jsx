import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searcBar.jsx';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList.jsx';
import VideoDetail from './components/videoDetail.jsx';

const API_KEY = 'notmykey';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };

        this.videoSearch('react dom');

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log(videos[0]);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar  onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={(selectedVideo) => {
                    this.setState({ selectedVideo })
                } }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

