import { DialogTrigger,Dialog as DialogRoot,DialogContent,DialogHeader,DialogTitle,DialogDescription } from "../ui/dialog";


interface DialogProps {
  title: React.ReactNode;
  description: React.ReactNode;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export default function Dialog({
  title,
  description,
  trigger,
  children
}: DialogProps) {
  return (
    <DialogRoot>
        <DialogTrigger>{trigger}</DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
                {description}
            </DialogDescription>
            </DialogHeader>
            {children}
        </DialogContent>
    </DialogRoot>
  )
}
