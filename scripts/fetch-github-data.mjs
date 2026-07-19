// scripts/fetch-github-data.mjs
// Runs in CI (GitHub Actions), not in the browser. Writes public/data/github.json,
// which your React app then reads instead of calling api.github.com live.

const USERNAME = "wisdom-geek"; // matches GITHUB_USERNAME in your component
const TOKEN = process.env.GH_TOKEN; // provided automatically by Actions
const OUT_PATH = "client/public/data/github.json";

const headers = {
  Accept: "application/vnd.github+json",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function main() {
  const userRes = await fetch(`https://api.github.com/users/${USERNAME}`, { headers });
  if (!userRes.ok) throw new Error(`User fetch failed: ${userRes.status}`);
  const userData = await userRes.json();

  // matches your original query: sort=stars&per_page=6&type=owner
  const reposRes = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=stars&per_page=6&type=owner`,
    { headers }
  );
  if (!reposRes.ok) throw new Error(`Repos fetch failed: ${reposRes.status}`);
  const reposData = await reposRes.json();

  // Matches the GitHubUser interface in useGitHub.ts
  const user = {
    login: userData.login,
    name: userData.name,
    bio: userData.bio,
    avatar_url: userData.avatar_url,
    public_repos: userData.public_repos,
    followers: userData.followers,
    following: userData.following,
    created_at: userData.created_at,
  };

  // Matches the GitHubRepo interface in useGitHub.ts
  const repos = reposData.map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    url: r.html_url,
    homepage: r.homepage,
    language: r.language,
    stargazers_count: r.stargazers_count,
    forks_count: r.forks_count,
    topics: r.topics || [],
  }));

  const fs = await import("node:fs/promises");
  await fs.mkdir("client/public/data", { recursive: true });
  await fs.writeFile(OUT_PATH, JSON.stringify({ user, repos }, null, 2));
  console.log(`Wrote ${repos.length} repos to ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
