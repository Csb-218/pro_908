
import { Button } from "@/components/ui/button";

import slack from "@/assets/slack2.png";
import {} from "lucide-react";

const HeroCTA = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 px-1">
      {/* left content */}
      <div className="w-1/2 flex items-center justify-center">
        <img src={slack} className="rounded aspect-auto h-4/6"></img>
      </div>

      {/* right content */}
      <div className="flex flex-col items-start justify-start gap-y-6 w-1/2">
        <h1 className="text-6xl font-bold">Now is your moment to build a better tomorrow</h1>
        <p className="text-lg">
          We have seen what the future can be. Now, it's time to make it happen.
        </p>


          {/* CTA button */}
          <Button variant="outline" className="border-[#4e154b] text-[#4e154b] rounded h-12 border-2">
            WATCH VIDEO
          </Button>
          {/* CTA sign up with google */}
         

      </div>
    </div>
  );
};

export default HeroCTA;