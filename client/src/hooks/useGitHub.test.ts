import { describe, it, expect, beforeAll } from "vitest";

describe("GitHub Token Validation", () => {
  let token: string;

  beforeAll(() => {
    token = import.meta.env.VITE_GITHUB_TOKEN || "";
  });

  it("should have a valid GitHub token", () => {
    expect(token).toBeTruthy();
    expect(token.length).toBeGreaterThan(0);
  });

  it("should be able to authenticate with GitHub API using the token", async () => {
    if (!token) {
      console.warn("GitHub token not provided, skipping authentication test");
      return;
    }

    try {
      const response = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      expect(response.ok).toBe(true);
      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data.login).toBeTruthy();
    } catch (error) {
      console.error("GitHub API authentication failed:", error);
      throw error;
    }
  });

  it("should be able to fetch public user data with the token", async () => {
    if (!token) {
      console.warn("GitHub token not provided, skipping user data fetch test");
      return;
    }

    try {
      const response = await fetch("https://api.github.com/users/wisdom-geek", {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      expect(response.ok).toBe(true);
      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data.login).toBe("wisdom-geek");
      expect(data.public_repos).toBeGreaterThanOrEqual(0);
    } catch (error) {
      console.error("Failed to fetch GitHub user data:", error);
      throw error;
    }
  });
});
