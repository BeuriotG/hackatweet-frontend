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
				setTweetsData(data.data);
			});
	};

	useEffect(() => {
		fetchAllTweet();
	}, []);

	const displayTweets = tweetsData.map((data, i) => {
		let canRemove = false;
		if (user.token === data.author.token) {
			canRemove = true;
		}

		let alreadyLiked = false;
		if (user.token === data.author.token) {
			alreadyLiked = true;
		}

		return <DisplayTweet _id={data._id} key={i} firstname={data.author.firstname} username={data.author.username} hours={data.date} tweet={data.message} nbOfLikes={data.nbOfLikes} canRemove={canRemove} alreadyLikd={alreadyLiked} fetchAllTweet={fetchAllTweet} />;
	});

	return (
		<main className="relative flex min-h-screen gap-4 bg-gradient-to-tr from-pink-50 to-gray-50 font-sans">
			<div className="sticky top-0 flex h-screen w-1/4 flex-col justify-between p-2">
				<FontAwesomeIcon icon={faTwitter} rotation={180} size="2xl" className="ms-4 text-black" />
				<UserCard username={user.username} />
			</div>
			{/* <div className="flex "> */}
			<div className="flex w-2/4 flex-col">
				<div className="flex flex-col">
					<MakeTweet fetchAllTweet={fetchAllTweet} />
					<div className="flex flex-col-reverse gap-4">{displayTweets}</div>
				</div>
			</div>
			<div className="sticky top-[54] mt-[54] flex h-[80vh] w-1/4 flex-col justify-start gap-2 px-2">
				<TrendsList />
			</div>
			{/* </div> */}
		</main>
	);
}

export default LandingPage;
