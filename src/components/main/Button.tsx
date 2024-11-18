import { Button as ButtonComponent } from "@/components/ui/button"

export function Button({children,className}:{children:React.ReactNode,className:string}) {
  return <ButtonComponent className={className}>{children}</ButtonComponent>
}
