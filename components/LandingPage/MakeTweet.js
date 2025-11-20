import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Button} from '@/components/ui/button.tsx';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {Input} from '@/components/ui/input.tsx';

export default function MakeTweet(props) {
	const [inputTweet, setInputTweet] = useState('');
	const token = useSelector((state) => state.user.value.token);

	const fetchAllTweets = () => {
		props.fetchAllTweet();
	};
	const handleClick = async () => {
		try {
			const response = await fetch('http://localhost:3000/tweets/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({message: inputTweet, token}),
			});
			const data = await response.json();
			if (!data.result) {
				console.error(data.error);
			} else {
				console.log('done');
				fetchAllTweets();
			}
		} catch (err) {
			console.error(`Une erreur s'est produite lors de l'envoi du tweet ${err}`);
		}
		setInputTweet('');
	};

	return (
		<Card className="h-1/4 w-full rounded-none bg-inherit text-white">
			<CardHeader>
				<CardTitle>Home</CardTitle>
			</CardHeader>
			<CardContent>
				<Input type="text" placeholder="What's up?" maxLength={280} value={inputTweet} onChange={(e) => setInputTweet(e.target.value)} />
			</CardContent>
			<CardFooter className="flex justify-end gap-x-4">
				<span>{inputTweet.length} / 280</span>
				<Button variant="secondary" className="bg-sky-400" onClick={() => handleClick()}>
					Tweet
				</Button>
			</CardFooter>
		</Card>
	);
}
