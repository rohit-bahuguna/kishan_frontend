import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allContacts } from '../contactData';

const Main = () => {
	const navigate = useNavigate();
	return (
		<div>
			<table style={{ width: '100%' }}>
				<tr>
					<th>Sr.No</th>
					<th>Name</th>
					<th>Contact Number</th>
				</tr>
				{allContacts.map((value, index) => {
					return (
						<tr onClick={() => navigate(`/contactinfo/${value.contactNumber}`)}>
							<td>
								{index + 1}
							</td>
							<td>
								{value.firstName}
							</td>
							<td>
								{value.contactNumber}
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default Main;
