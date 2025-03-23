import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface AlertProps {
  setShowAlert: (show: boolean) => void;
}

const CustomAlert = ({ setShowAlert }: AlertProps) => {
  return (
    <>
     <Alert className="bg-[#0064a0] border-l-4 py-4 px-6 rounded-full transition-transform duration-75 ease-in-out transform ">
      {/* <AlertTitle>Heads up!</AlertTitle> */}
      <AlertDescription className="text-white flex items-center">
        <span className="flex gap-x-1">
          <span>Slack is your </span>
          <span className="font-bold"> digital HQ.</span>
          <span>
            Meet the new features keeping teams connected in a
            work-from-anywhere world.
          </span>
          <span className="font-bold underline">Let's go</span>
          <span className="text-base">→</span>
        </span>
        <Button
          variant="ghost"
          className="ml-auto text-2xl hover:bg-transparent hover:text-white cursor-pointer"
          onClick={() => setShowAlert(false)}
        >
          x
        </Button>
      </AlertDescription>
    </Alert>
    </>
   
  );
};

export default CustomAlert;
