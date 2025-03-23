
import { Button } from "@/components/ui/button";
import google from "@/assets/google_icon.svg";
import slack from "@/assets/slack1.jpeg";
import {} from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 px-12">
      {/* left content */}
      <div className="flex flex-col items-start justify-start gap-y-6 w-1/2">
        <h1 className="text-6xl font-bold">Slack is where the future works</h1>
        <p className="text-lg">
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>

        <div className="flex gap-x-1 ">
          {/* CTA button */}
          <Button variant="default" className="bg-[#4e154b] rounded h-12">
            TRY FOR FREE
          </Button>
          {/* CTA sign up with google */}
          <Button variant="outline" className="h-12 rounded bg-blue-400 hover:bg-white text-white p-1">
            <img src={google} className="bg-white h-10 p-1"></img>
            Sign up with Google
          </Button>
        </div>
      </div>

      {/* right content */}
      <div className="w-1/2 flex items-center justify-center">
        <img src={slack} className="rounded"></img>
      </div>
    </div>
  );
};

export default Hero;
