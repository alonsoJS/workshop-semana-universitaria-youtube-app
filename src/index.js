import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './pages/search_page';
import PlayVideoPage from './pages/play_video_page';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/main.scss';

function App () {
  return (
    <Router>
      <Route path="/" exact component={SearchPage} />
      <Route path="/watch/:id" component={PlayVideoPage} />
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
