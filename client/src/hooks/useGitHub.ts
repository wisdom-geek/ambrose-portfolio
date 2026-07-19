import { useState, useEffect } from "react";

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

interface GitHubData {
  user: GitHubUser;
  repos: GitHubRepo[];
}

const DATA_URL = "/data/github.json"; // built by the GitHub Action, served from /public
const CACHE_KEY = "github_data_cache";

export function useGitHub(username: string) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(DATA_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load ${DATA_URL}: ${res.status}`);
        const data: GitHubData = await res.json();

        if (!cancelled) {
          setUser(data.user);
          setRepos(data.repos || []);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        }
      } catch (err) {
        console.warn("Falling back to cached GitHub data:", err);
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached && !cancelled) {
          const data: GitHubData = JSON.parse(cached);
          setUser(data.user);
          setRepos(data.repos || []);
        } else if (!cancelled) {
          const errorMsg = err instanceof Error ? err.message : "An error occurred";
          setError(errorMsg);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { user, repos, loading, error };
}
