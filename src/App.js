import React from 'react';
import { Signup, Dashboard, Login, PrivateRoute, ForgotPassword, UpdateProfile } from './components';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getFullPath } from './utils';

const App = () => {
	return (
		<Container 
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "180vh" }}
		>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<AuthProvider>
						<Switch>
							<PrivateRoute exact path={getFullPath('/')} component={Dashboard}/>
							<Route path={getFullPath('/signup')} component={Signup} />
							<Route path={getFullPath('/login')} component={Login} />
							<Route path={getFullPath('/forgot-password')} component={ForgotPassword} />
							<Route path={getFullPath('/update-profile')} component={UpdateProfile} />
							<Redirect to={getFullPath('/')} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;