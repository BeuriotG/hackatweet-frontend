import DisplayTweet from "./DisplayTweet";
import MakeTweet from "./MakeTweet";
import TrendsList from "./TrendsList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import UserCard from "./UserCard";
function LandingPage() {
  const data = [
    {
      firstname: "Gui",
      username: "@Guilebg",
      hours: 5,
      tweet: "Aujourd'hui j'ai vu un chien déguisé en Père Noël",
      nbOfLikes: 1,
    },
    {
      firstname: "JB",
      username: "@Jblechauve",
      hours: 2,
      tweet: "C'était le mien haha",
      nbOfLikes: 0,
    },
  ];

  const displayTweets = data.map((t, i) => {
    return <DisplayTweet key={i} {...t} />;
  });
  return (
    <main className="w-full h-screen inline-grid grid-cols-4 bg-[#15202b] pa-0">
      <div className="w-full h-full p-2 border-e flex flex-col justify-between">
        <FontAwesomeIcon
          icon={faTwitter}
          rotation={180}
          size="2xl"
          style={{ color: "#ffffff" }}
          className="ms-4"
        />
        <UserCard username={data[0].username} firstname={data[0].firstname} />
      </div>
      <div className="col-span-2 flex flex-col w-full h-full ">
        <div className="flex flex-col w-full h-full">
          <MakeTweet />
          {displayTweets}
        </div>
      </div>
      <div className="w-full h-full p-2 text-white flex flex-col justify-start gap-2 border-s">
        <span className="text-lg font-bold">Trends</span>
        <TrendsList />
      </div>
    </main>
  );
}

export default LandingPage;
