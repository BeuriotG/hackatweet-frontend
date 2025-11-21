import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useRouter} from 'next/router';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../reducers/user';

export function AuthInComponent() {
	const dispatch = useDispatch();
	const router = useRouter();

	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({username: signInUsername, password: signInPassword}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					dispatch(login({username: signInUsername, token: data.userData.token}));

					setSignInUsername('');
					setSignInPassword('');

					// redirect to the LP
					router.push('/landingPage');
				} else {
					setErrorMessage(data.error);
				}
			});
	};

	const onKeyPressHandler = (e) => {
		if (e.key === 'Enter') {
			handleConnection();
		}
	};

	// -------------------------------------------------------------------------------------
	// -------------------------------------------------------------------------------------
	// -------------------------------------------------------------------------------------
	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					<Button variant="default">Me connecter</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Connexion</DialogTitle>
						<DialogDescription className="italic text-red-600">{errorMessage}</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="setSignInUsername">Username</Label>
							<Input id="setSignInUsername" name="username" onChange={(e) => setSignInUsername(e.target.value)} />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="setSignInPassword">Password</Label>
							<Input id="setSignInPassword" type="password" name="password" onChange={(e) => setSignInPassword(e.target.value)} onKeyDown={onKeyPressHandler} />
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Retour</Button>
						</DialogClose>
						<Button type="submit" onClick={() => handleConnection()}>
							Connexion
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
export default AuthInComponent;
