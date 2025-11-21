import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {useSelector} from 'react-redux';

import {faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export function DisplayTweet(props) {
	const user = useSelector((state) => state.user.value);

	console.log(props._id);

	const fetchAllTweets = () => {
		props.fetchAllTweet();
	};

	const deleteTweet = () => {
		fetch('http://localhost:3000/tweets', {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({tweetId: props._id, token: user.token}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					fetchAllTweets();
				}
			});
	};

	const likeTweet = () => {
		fetch('http://localhost:3000/tweets/like', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({tweetId: props._id}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					fetchAllTweets();
				}
			});
	};

	return (
		<Card className="h-[200px] w-full rounded-xl border border-teal-300 bg-gray-400 bg-gradient-to-bl from-pink-50 to-gray-50 hover:border-teal-500">
			<CardHeader className="flex flex-row justify-between">
				<CardTitle className="align-center">
					{props.firstname} @{props.username} <span className="text-sm font-extralight text-gray-400">{props.hours}</span>
				</CardTitle>
				{props.canRemove && <FontAwesomeIcon className="cursor-pointer text-red-600 transition-colors duration-200 hover:text-red-400" icon={faTrashCan} onClick={() => deleteTweet()} />}
			</CardHeader>
			<CardContent>{props.tweet}</CardContent>
			<CardFooter>
				<FontAwesomeIcon className="cursor-pointer transition-colors duration-200 hover:text-teal-300" icon={faHeart} onClick={() => likeTweet()} /> {props.nbOfLikes}
			</CardFooter>
		</Card>
	);
}

export default DisplayTweet;
