import {useSelector} from 'react-redux';
import DisplayTweet from './DisplayTweet';
import MakeTweet from './MakeTweet';
import TrendsList from './TrendsList';

import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import UserCard from './UserCard';

function LandingPage() {
	const user = useSelector((state) => state.user.value);

	const data = [
		{
			firstname: 'Gui',
			username: '@Guilebg',
			hours: 5,
			tweet: "Aujourd'hui j'ai vu un chien déguisé en Père Noël",
			nbOfLikes: 1,
		},
		{
			firstname: 'JB',
			username: '@Jblechauve',
			hours: 2,
			tweet: "C'était le mien haha",
			nbOfLikes: 0,
		},
	];

	const displayTweets = data.map((t, i) => {
		return <DisplayTweet key={i} {...t} />;
	});
	return (
		<main className="pa-0 inline-grid h-screen w-full grid-cols-4 bg-[#15202b]">
			<div className="flex h-full w-full flex-col justify-between border-e p-2">
				<FontAwesomeIcon icon={faTwitter} rotation={180} size="2xl" style={{color: '#ffffff'}} className="ms-4" />
				<UserCard username={user.username} />
			</div>
			<div className="col-span-2 flex h-full w-full flex-col">
				<div className="flex h-full w-full flex-col">
					<MakeTweet />
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
