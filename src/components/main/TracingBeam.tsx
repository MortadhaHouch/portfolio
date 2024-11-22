import { TracingBeam as TracingBeamComponent } from "../ui/tracing-beam";
export function TracingBeam({children,className}:{className?:string,children:React.ReactNode}) {
  return (
    <TracingBeamComponent className={className}>
      {children}
    </TracingBeamComponent>
  );
}