export interface GithubRepoInterface {
  name: string;
  description: string;
  owner: OwnerInterface;
  created_at: Date;
  updated_at: Date;
  language: string;
  size: number;
  stargazers_count: number;
  id: number;
}

export interface OwnerInterface {
  login: string,
  avatar_url: string,
  html_url: string,
  type: string,
}
