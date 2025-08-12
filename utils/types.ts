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
    title: string;
    description: string;
    image?: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'ui-ux' | 'mobile' | 'data-science' | 'architecture' | 'other';
    proficiency?: 'beginner' | 'intermediate' | 'advanced';
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
export type Experience = {
    company:string
    position:string
    startDate:string
    endDate:string
    description:string
    tasks:string[]
    technologies:string[]
}
export type Certificate = {
    title:string
    description:string
    url:string
    technologies:string[]
    date:string
    issuer:string
}
export { Status ,Loading}
export type { Project}