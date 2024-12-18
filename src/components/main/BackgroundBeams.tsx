"use client";
import React from "react";
import { BackgroundBeams as BackgroundBeamsComponent} from "../ui/background-beams";

export function BackgroundBeams({children}:{children?:React.ReactNode}) {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeamsComponent />
      {children}
    </div>
  );
}
