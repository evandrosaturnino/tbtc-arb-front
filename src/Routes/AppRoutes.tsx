/* eslint-disable react/display-name */
import { memo } from 'react';
import { Navigate, Route } from 'react-router-dom';
import RoutesNotFound from './RoutesNotFound';
import { PublicRoutes } from './Routes';
import AuthGuard from './guard/AuthGuard';
import AppLayout from '../Layout/AppLayout';
import Home from '../pages/Home';
import Minting from '../pages/TbtcComponent';
import Explore from '../pages/Explore';
import Loyalty from '../pages/Loyalty';

// import AppLayout from '../layouts/AppLayout';

const AppRoutes = memo(() => {
	return (
		<RoutesNotFound>
			<Route path='*' element={<Navigate to={PublicRoutes.Home} />} />

			{/* Public Routes */}
			{/* EJEMPLO:
			<Route path={`/${PublicRoutes.Login}`} element={<Login />} />
			<Route
				path={`/${PublicRoutes.ResetPassword}`}
				element={<ResetPassword />}
			/>
			
			*/}
			<Route
				path={PublicRoutes.Home}
				element={<AppLayout component={<Home />} />}
			/>
			<Route
				path={PublicRoutes.Minting}
				element={<AppLayout component={<Minting />} headerTitle="tBTC | Minting" />}
			/>
			<Route
				path={PublicRoutes.Explore}
				element={<AppLayout component={<Explore />} />}
			/>
			<Route
				path={PublicRoutes.Loyalty}
				element={<AppLayout component={<Loyalty />} headerTitle="Loyalty Program" />}
			/>

			{/* Private Routes */}
			<Route element={<AuthGuard />}>
				{/* EJEMPLO: 
				<Route
					path={PrivateRoutes.Home}
					element={<AppLayout component={<Home />} />}
				/>
				<Route
					path={PrivateRoutes.Users}
					element={<AppLayout component={<Users />} />}
				/>
				*/}
			</Route>
		</RoutesNotFound>
	);
});

export default AppRoutes;
