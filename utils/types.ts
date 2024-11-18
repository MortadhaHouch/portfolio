import { StaticImageData } from "next/image"

type Project = {
    title: string,
    description: string,
    image: string
    icons:StaticImageData[]
    status:Status
}
enum Status {
    DONE,
    IN_PROGRESS,
}
export { Status }
export type { Project}