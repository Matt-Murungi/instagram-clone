import React from 'react';
import './App.css';
import Post from './Post';
function App() {
  return (
    <div className="app">

      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo" />
      </div>
      <h1>Hello People, this is the Instagram Clone</h1>

    <Post />
      {/* Post */}

    </div>
  );
}

export default App;
