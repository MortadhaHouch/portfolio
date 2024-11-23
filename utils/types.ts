type Project = {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    images: string[];
    icons: string[];
    status: Status;
    urls:string[]
};
type Skill = {
    title:string
    description:string
    image?:string
}
export type {Skill}
enum Status {
    DONE="DONE",
    IN_PROGRESS="IN_PROGRESS",
}
enum Loading {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
}
export { Status ,Loading}
export type { Project}