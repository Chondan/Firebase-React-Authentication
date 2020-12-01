import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { getFullPath } from '../utils';

export default function Dashboard() {
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	const handleLogout = async () => {
		setError('');
		try {
			await logout();
			history.push(getFullPath('/login'));
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Profile</h2>
					{error && <Alert variat="danger">{error}</Alert>}
					<strong>Email: </strong> {currentUser.email}
					<Link className="btn btn-primary w-100 mt-3" to={getFullPath('/update-profile')}>Update Profile</Link>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				<Button variant="link" onClick={handleLogout}>Log Out</Button>
			</div>
		</>
	);
}