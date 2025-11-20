import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';

import {faHeart, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export function DisplayTweet(props) {
	return (
		<Card className="h-[200px] w-full rounded-none bg-inherit text-white">
			<CardHeader className="flex flex-row justify-start">
				<CardTitle>
					{props.firstname} @{props.username} - {props.hours}hours ago
				</CardTitle>
			</CardHeader>
			<CardContent>{props.tweet}</CardContent>
			<CardFooter>
				<FontAwesomeIcon icon={faHeart} /> {props.nbOfLikes}
				<FontAwesomeIcon icon={faTrashCan} />
			</CardFooter>
		</Card>
	);
}

export default DisplayTweet;
