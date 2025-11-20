import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Home from '../components/Home';

function Index() {
	const token = useSelector((state) => state.user.value.token);
	const router = useRouter();

	useEffect(() => {
		if (token) {
			router.push('/landingPage');
		}
	}, []);

	return <>{!token && <Home />}</>;
}

export default Index;
