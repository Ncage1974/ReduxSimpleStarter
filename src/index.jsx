import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searcBar.jsx';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList.jsx';
import VideoDetail from './components/videoDetail.jsx';

const API_KEY = 'AIzaSyAYBJgAzqYi4BbcC62n0nS_LRaY7g07vL4';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };

        YTSearch({ key: API_KEY, term: 'React DOM' }, (videos) => {
            console.log(videos[0]);
            this.setState({ 
                            videos: videos, 
                            selectedVideo: videos[0]  });
        });

    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList  onVideoSelect={(selectedVideo)=>{
                                           this.setState({selectedVideo})}} 
                            videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

