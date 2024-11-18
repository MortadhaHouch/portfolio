import { Separator as SeparatorComponent } from "@/components/ui/separator"

export function Separator({orientation}:{orientation:"horizontal" | "vertical"}) {
  return (
    <SeparatorComponent orientation={orientation} />
  )
}
