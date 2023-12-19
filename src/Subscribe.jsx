import {useEffect, useState} from 'react';

function handleError(error) {
	if (error) {
		alert(error.message);
	}
}

function initializeSub() {

const apiKey = '47830111';
const sessionId = '2_MX40NzgzMDExMX5-MTcwMjQ3MjIzNTQxNX5ydzhkVzg0MEZ5aHpQbHlCODVkLzIwSmZ-fn4';
const token = 'T1==cGFydG5lcl9pZD00NzgzMDExMSZzaWc9ZjdhYmM1NTQ1MGRmOGIyZTc0OWEzMmM2MWY1OTAyODE3NjE3NjdlMzpzZXNzaW9uX2lkPTJfTVg0ME56Z3pNREV4TVg1LU1UY3dNalEzTWpJek5UUXhOWDV5ZHpoa1Z6ZzBNRVo1YUhwUWJIbENPRFZrTHpJd1NtWi1mbjQmY3JlYXRlX3RpbWU9MTcwMjQ3MjI1MCZub25jZT0wLjE0MDY2NzEzMjI5NDQwMDQyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE3MDUwNjQyNDkmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
    const OT = window.OT;
    const session = OT.initSession(apiKey, sessionId);
	/* Subscribe to a newly created stream */
	session.on('streamCreated', event => {
		console.log('streamCreated', event);
		session.subscribe(event.stream, '_subscriber', {
			insertMode: 'append',
			width: '500px',
			height: '500px',
		}, handleError);
	});
	session.connect(token, error => {
		// If the connection is successful, publish to the session
		if (error) {
			handleError(error);
		} else {
			/* Session.publish(publisher, handleError); */
		}
	});
}

export default function Subscribe() {
	useEffect(() => {
		initializeSub();
	});

	return (
		<div>
			<p>Subscribe</p>
            <div style={{backgroundColor: 'red', height: '500px', width:"500px"}} id='_subscriber'></div>
		</div>
	);
}
