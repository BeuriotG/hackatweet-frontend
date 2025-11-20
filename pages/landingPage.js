import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';

import LandingPage from '../components/LandingPage/LandingPage';

function LandingPageRoute() {
	const token = useSelector((state) => state.user.value.token);
	const router = useRouter();

	useEffect(() => {
		if (!token) {
			router.push('/');
		}
	}, [token]);

	return <>{token && <LandingPage />}</>;
}

export default LandingPageRoute;
