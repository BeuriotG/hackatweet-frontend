import {useState} from 'react';

import {Button} from '@/components/ui/button.tsx';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {Input} from '@/components/ui/input.tsx';

export default function MakeTweet() {
	const [inputTweet, setInputTweet] = useState('');
	const handleCLick = () => {
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
				<Button variant="secondary" className="bg-sky-400" onClick={() => handleCLick()}>
					Tweet
				</Button>
			</CardFooter>
		</Card>
	);
}
