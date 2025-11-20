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
			<div className="flex w-1/2 content-center items-center gap-4 self-center text-white">
				<h3 className="">
					Welcome,&nbsp;<span className="font-bold">{username}</span>
				</h3>
				<Button variant="default" onClick={() => handleLogout()}>
					Logout
				</Button>
			</div>
		</>
	);
}
