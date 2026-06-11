import Meteors from "../ui/meteors";
import ContactUs from "./ContactUs";
export function Meteor() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <Meteors number={30} />
      <ContactUs/>
    </div>
  );
}
