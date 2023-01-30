import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allContacts } from '../contactData';
const ContactInfo = () => {
	const { number } = useParams();
	const [userData, setUserData] = useState({});

	useEffect(() => {
		allContacts.map(value => {
			if (value.contactNumber == number) {
				setUserData({
					name: value.firstName + ' ' + value.LastName,
					sendTo: value.contactNumber,
					message: ''
				});
			}
		});
	}, []);

	const sendMessage = async () => {
		const url = 'http://localhost:4000/sendmessage';
		console.log(url);
		const data = await axios.post(url, { ...userData });
		if (data.data.status) {
			alert(`${data.data.body} message sent to ${userData.name}`);
		} else {
			alert('failed');
		}
	};

	return (
		<div>
			<h1>
				{userData.name}
			</h1>
			<input type="number" value={userData.sendTo} />
			<textarea
				type="text"
				value={userData.message}
				onChange={e => setUserData({ ...userData, message: e.target.value })}
			/>
			<button onClick={() => sendMessage()}>Send Message</button>
		</div>
	);
};

export default ContactInfo;
