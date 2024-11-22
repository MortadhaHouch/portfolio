import Meteors from "../ui/meteors";
import MessageForm from "./MessageForm";

export function Meteor() {
  return (
    <div className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <Meteors number={30} />
      <MessageForm/>
    </div>
  );
}
