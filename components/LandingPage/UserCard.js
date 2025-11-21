import {Button} from '@/components/ui/button';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {logout} from '../../reducers/user';

export default function UserCard({username}) {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogout = () => {
		dispatch(logout());
		router.push('/');
	};
	return (
		<>
			<div className="flex w-full content-center items-center gap-4 self-center pl-4">
				<h3>
					Welcome,&nbsp;<span className="font-bold">{username}</span>
				</h3>
				<Button variant="link" className="italic transition-colors duration-200 hover:text-red-600 hover:no-underline" onClick={() => handleLogout()}>
					Logout
				</Button>
			</div>
		</>
	);
}
