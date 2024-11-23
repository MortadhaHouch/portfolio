import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocity({text}:{text:string}) {
    return (
        <VelocityScroll
            text={text}
            default_velocity={5}
            className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
    );
}
