import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card.tsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export function DisplayTweet(props) {
  return (
    <Card className="w-full h-[200px] bg-inherit text-white rounded-none">
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
