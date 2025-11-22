import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';

import {useSelector} from 'react-redux';

import {faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export function DisplayTweet(props) {
	const user = useSelector((state) => state.user.value);

	// console.log(props);
	// gsap.registerPlugin(ScrollTrigger);

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
			body: JSON.stringify({tweetId: props._id, token: user.token}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					fetchAllTweets();
				}
			});
	};

	return (
		<Card className="tweets h-[200px] w-full rounded-xl border border-teal-300 bg-gray-400 bg-gradient-to-bl from-pink-50 to-gray-50 hover:border-teal-500">
			<CardHeader className="anim-tweets flex flex-row items-center justify-between">
				<CardTitle className="align-center">
					{props.firstname} @{props.username} <span className="text-sm font-extralight text-gray-400">{props.hours}</span>
				</CardTitle>
				{props.canRemove && (
					<Dialog>
						<form>
							<DialogTrigger asChild>
								<Button variant="ghost" className="text-red-600 transition-colors duration-200 hover:bg-transparent hover:text-red-400">
									<FontAwesomeIcon className="" icon={faTrashCan} />
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle>Voulez vous supprimer ?</DialogTitle>
								</DialogHeader>

								<DialogFooter>
									<DialogClose asChild>
										<Button variant="outline">Non</Button>
									</DialogClose>
									<Button type="submit" variant="destructive" onClick={() => deleteTweet()}>
										Oui
									</Button>
								</DialogFooter>
							</DialogContent>
						</form>
					</Dialog>
				)}
			</CardHeader>
			<CardContent>{props.tweet}</CardContent>
			<CardFooter>
				<FontAwesomeIcon className={`${props.alreadyLiked ? 'text-red-500 hover:text-gray-800' : ''} cursor-pointer text-black transition-colors duration-200 hover:text-red-200`} icon={faHeart} onClick={() => likeTweet()} /> {props.nbOfLikes}
			</CardFooter>
		</Card>
	);
}

export default DisplayTweet;
