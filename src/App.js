import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import '@vonage/video-publisher/video-publisher.js';
import '@vonage/video-subscribers/video-subscribers.js';
import '@vonage/screen-share/screen-share.js';

function App() {
  // Get references to Web Components
  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded
  const apiKey = '47830111';
  const sessionId = '2_MX40NzgzMDExMX5-MTcwMjQ3MjIzNTQxNX5ydzhkVzg0MEZ5aHpQbHlCODVkLzIwSmZ-fn4';
  const token = 'T1==cGFydG5lcl9pZD00NzgzMDExMSZzaWc9ZjdhYmM1NTQ1MGRmOGIyZTc0OWEzMmM2MWY1OTAyODE3NjE3NjdlMzpzZXNzaW9uX2lkPTJfTVg0ME56Z3pNREV4TVg1LU1UY3dNalEzTWpJek5UUXhOWDV5ZHpoa1Z6ZzBNRVo1YUhwUWJIbENPRFZrTHpJd1NtWi1mbjQmY3JlYXRlX3RpbWU9MTcwMjQ3MjI1MCZub25jZT0wLjE0MDY2NzEzMjI5NDQwMDQyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE3MDUwNjQyNDkmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  useEffect(() => {
    const OT = window.OT;

    // Initialize an OpenTok Session object
    const session = OT.initSession(apiKey, sessionId);

    // Set session and token (and optionally properties) for Web Components
    publisher.current.session = session;
    publisher.current.token = token;
    publisher.current.properties = {
      fitMode: 'cover',
      height: '100%',
      resolution: '1920x1080',
      videoContentHint: 'detail',
      width: '100%',
    };
    subscribers.current.session = session;
    subscribers.current.token = token;
    screenshare.current.session = session;
    screenshare.current.token = token;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container">
        <section className="App-section-publisher">
          <fieldset>
            <legend>Publisher</legend>
            <video-publisher ref={publisher}></video-publisher>
          </fieldset>
          <button onClick={toggleVideo}>
              toggle Video
          </button>
          <button onClick={toggleAudio}>
              toggle Audio
          </button>
          <br/><br/>
          <screen-share start-text="start" stop-text="stop" width="300px" height="240px" ref={screenshare}></screen-share>
        </section>
        <section className="App-section-subscribers">
          <fieldset>
            <legend>Subscribers</legend>
            <video-subscribers ref={subscribers}></video-subscribers>
          </fieldset>
        </section>
      </div>
    </div>
  );
}

export default App;
