import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function MakeTweet() {
  const [inputTweet, setInputTweet] = useState("");
  const handleCLick = () => {
    console.log(inputTweet);
    setInputTweet("");
  };

  return (
    <Card className="w-full h-1/4 bg-inherit text-white rounded-none">
      <CardHeader>
        <CardTitle>Home</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="What's up?"
          maxLength={280}
          value={inputTweet}
          onChange={(e) => setInputTweet(e.target.value)}
        />
      </CardContent>
      <CardFooter className="flex justify-end gap-x-4">
        <span>{inputTweet.length} / 280</span>
        <Button
          variant="secondary"
          className="bg-sky-400"
          onClick={() => handleCLick()}
        >
          Tweet
        </Button>
      </CardFooter>
    </Card>
  );
}
