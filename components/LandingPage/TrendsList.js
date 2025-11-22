import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {useEffect, useState} from 'react';

export default function TrendsList() {
	const [datatrends, setDatatrends] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/tweets')
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					setDatatrends(data.uniqueHashtagsArray);
				}
			});
	}, []);

	// console.log(datatrends);

	const displaydatatrends = datatrends.map((d, i) => {
		return (
			<div key={i} className="mb-1 flex flex-col px-2">
				<span className="italic text-blue-500">{d}</span>
				{/* <span>{d.numbers} Tweets</span> */}
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
