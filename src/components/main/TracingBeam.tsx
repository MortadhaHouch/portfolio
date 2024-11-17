"use client";
import React from "react";
import { TracingBeam as TracingBeamComponent } from "../ui/tracing-beam";
export function TracingBeam({children}:{children:React.ReactNode}) {
  return (
    <TracingBeamComponent className="px-6">
      {children}
    </TracingBeamComponent>
  );
}