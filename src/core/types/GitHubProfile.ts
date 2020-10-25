export type GitHubProfile ={
    id: number;
    login: string,
    avatar_url: string
    public_repos: number;
    followers: number;
    following: number;
    company: string;
    blog: string;
    location: string;
    created_at: Date;
}