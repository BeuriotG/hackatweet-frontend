import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {useEffect, useState} from 'react';

export default function TrendsList() {
	// const [datatrends, setDatatrends] = useState([]);

	const datatrends = [
		{title: '#hackatweet', nbOfTweets: 2},
		{title: '#lacapsule', nbOfTweets: 1},
		{title: '#fullstack', nbOfTweets: 5},
	];

	// TODO route
	useEffect(() => {
		fetch('http://localhost:3000/tweets')
			.then((response) => response.json())
			.then((data) => {
				console.log(data.uniqueHashtagsArray);
				for (let i = 0; i < data.uniqueHashtagsArray.length; i++) {
					const num = 1;
					const element = data.uniqueHashtagsArray[i];
					const obj = {title: element, nbOfTweets: num};

					// setDatatrends(obj);
				}
				// for (let i = 0; i < data.uniqueHashtagsArray; i++) {
				// 	console.log(tr);
				// }
			});
	}, []);

	// console.log(datatrends);

	const displaydatatrends = datatrends.map((d, i) => {
		return (
			<div key={i} className="flex flex-col p-2">
				<span>{d.title}</span>
				<span>{d.nbOfTweets} Tweets</span>
			</div>
		);
	});

	return (
		<Card className="h-full border border-teal-300 bg-gradient-to-tl from-gray-50 to-teal-50 hover:border-teal-500">
			<CardHeader>
				<CardTitle className="text-lg font-bold">Trends</CardTitle>
			</CardHeader>
			<CardContent>{displaydatatrends}</CardContent>
		</Card>
	);
}
