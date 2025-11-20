import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import DisplayTweet from './DisplayTweet';
import MakeTweet from './MakeTweet';
import TrendsList from './TrendsList';

import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import UserCard from './UserCard';

function LandingPage() {
	const user = useSelector((state) => state.user.value);
	const [tweetsData, setTweetsData] = useState([]);

	const fetchAllTweet = () => {
		fetch('http://localhost:3000/tweets')
			.then((response) => response.json())
			.then((data) => {
				console.log(data.data);
				setTweetsData(data.data);
			});
	};

	useEffect(() => {
		fetchAllTweet();
	}, []);

	const displayTweets = tweetsData.map((data, i) => {
		return <DisplayTweet _id={data._id} key={i} firstname={data.author.firstname} username={data.author.username} hours={data.date} tweet={data.message} nbOfLikes={data.nbOfLikes} />;
	});

	return (
		<main className="pa-0 inline-grid h-screen w-full grid-cols-4 bg-[#15202b]">
			<div className="flex h-full w-full flex-col justify-between border-e p-2">
				<FontAwesomeIcon icon={faTwitter} rotation={180} size="2xl" style={{color: '#ffffff'}} className="ms-4" />
				<UserCard username={user.username} />
			</div>
			<div className="col-span-2 flex h-full w-full flex-col">
				<div className="flex h-full w-full flex-col">
					<MakeTweet fetchAllTweet={fetchAllTweet} />
					{displayTweets}
				</div>
			</div>
			<div className="flex h-full w-full flex-col justify-start gap-2 border-s p-2 text-white">
				<span className="text-lg font-bold">Trends</span>
				<TrendsList />
			</div>
		</main>
	);
}

export default LandingPage;
