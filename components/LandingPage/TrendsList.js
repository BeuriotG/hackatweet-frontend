import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card.tsx";

export default function TrendsList() {
  const datatrends = [
    { title: "#hackatweet", nbOfTweets: 2 },
    { title: "#lacapsule", nbOfTweets: 1 },
    { title: "#fullstack", nbOfTweets: 5 },
  ];

  const displaydatatrends = datatrends.map((d, i) => {
    return (
      <div className="flex flex-col p-2  bg-[#22303c]">
        <span>{d.title}</span>
        <span>{d.nbOfTweets} Tweets</span>
      </div>
    );
  });

  return (
    <Card className="bg-inherit text-white  border-none ">
      <CardContent>{displaydatatrends}</CardContent>
    </Card>
  );
}
