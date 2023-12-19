import {useEffect, useState} from 'react';

function handleError(error) {
	if (error) {
		alert(error.message);
	}
}


function initializePub() {
    // Create a publisher
const apiKey = '47830111';
const sessionId = '2_MX40NzgzMDExMX5-MTcwMjQ3MjIzNTQxNX5ydzhkVzg0MEZ5aHpQbHlCODVkLzIwSmZ-fn4';
const token = 'T1==cGFydG5lcl9pZD00NzgzMDExMSZzaWc9ZjdhYmM1NTQ1MGRmOGIyZTc0OWEzMmM2MWY1OTAyODE3NjE3NjdlMzpzZXNzaW9uX2lkPTJfTVg0ME56Z3pNREV4TVg1LU1UY3dNalEzTWpJek5UUXhOWDV5ZHpoa1Z6ZzBNRVo1YUhwUWJIbENPRFZrTHpJd1NtWi1mbjQmY3JlYXRlX3RpbWU9MTcwMjQ3MjI1MCZub25jZT0wLjE0MDY2NzEzMjI5NDQwMDQyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE3MDUwNjQyNDkmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
    const OT = window.OT;
    const session = OT.initSession(apiKey, sessionId);
    const publisher = OT.initPublisher('publisher', {
        insertMode: 'replace',
        width: '500px',
        height: '500px',
    }, handleError);

    // Connect to the session
    session.connect(token, error => {
        // If the connection is successful, publish to the session
        if (error) {
            handleError(error);
        } else {
            session.publish(publisher, handleError);
        }
    });
}


export default function Publish() {
    useEffect(() => {
        initializePub();
    });

    return (
        <div>
            <p>Publish</p>
            <div style={{backgroundColor: 'red', height: ''}} id='publisher'></div>
        </div>
    );
}

