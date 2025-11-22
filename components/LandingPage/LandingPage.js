import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import DisplayTweet from './DisplayTweet';
import MakeTweet from './MakeTweet';
import TrendsList from './TrendsList';

import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useRef} from 'react';
gsap.registerPlugin(ScrollTrigger);

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

		// console.log('data', data.nbOfLikes);
		let alreadyLiked = false;

		// if (user.token === data.nbOfLikes) {
		if (data.nbOfLikes.find((e) => e === user.token)) {
			alreadyLiked = true;
		}

		return <DisplayTweet _id={data._id} key={i} firstname={data.author.firstname} username={data.author.username} hours={data.date} tweet={data.message} nbOfLikes={data.nbOfLikes.length} canRemove={canRemove} alreadyLiked={alreadyLiked} fetchAllTweet={fetchAllTweet} />;
	});

	const scrollRef = useRef();
	useEffect(() => {
		const allTweets = gsap.utils.toArray(scrollRef.current.children);

		console.log('allTweets', allTweets);
		allTweets.forEach((tweet) => {
			gsap.fromTo(
				tweet,
				{
					y: 100,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.3,
					stagger: 0.3,
					scrollTrigger: {
						trigger: tweet,
						start: 'top 90%',
						end: 'top 75%',
						scrub: false,
						markers: false,
						// toggleActions: 'play none none reverse',
						toggleActions: 'play none none none',
					},
				},
			);
		});
	}, [tweetsData]);

	return (
		<main className="relative flex min-h-screen bg-gradient-to-tr from-pink-50 to-gray-50 font-sans">
			<div className="sticky top-0 flex h-screen w-1/4 flex-col justify-between p-2">
				<FontAwesomeIcon icon={faTwitter} rotation={180} size="2xl" className="ms-4 text-black" />
				<UserCard username={user.username} />
			</div>
			{/* <div className="flex "> */}
			<div className="flex w-2/4 flex-col">
				<div className="flex flex-col">
					<MakeTweet fetchAllTweet={fetchAllTweet} />
					<div ref={scrollRef} className="flex flex-col gap-4">
						{displayTweets}
					</div>
				</div>
			</div>
			<div className="sticky top-[54px] mt-[54px] flex h-[80vh] w-1/4 flex-col justify-start gap-2 px-4">
				<TrendsList />
			</div>
			{/* </div> */}
		</main>
	);
}

export default LandingPage;
