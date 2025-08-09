import { ShineBorder as ShineBorderComponent } from "../ui/ShineBorder";

export function ShineBorder({children}:{children:React.ReactNode}) {
  return (
    <ShineBorderComponent
      className="relative flex h-[600px] w-[clamp(350px,40%,450px)] flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl bg-gray-50 dark:bg-gray-900"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      {children}
    </ShineBorderComponent>
  );
}