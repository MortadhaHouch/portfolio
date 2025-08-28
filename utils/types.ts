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
    location:string
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
    field:"frontend" | "backend" | "fullstack" | "database" | "devops" | "testing" | "ui-ux" | "mobile" | "data-science" | "architecture" | "other";
}
export type Link = {
    heading:string
    subheading:string
    imgSrc:string
    href:string
}
export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  hireable: boolean | null;
  type: string;
  site_admin: boolean;
  repos_url: string;
}

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}
export { Status ,Loading}
export type { Project}