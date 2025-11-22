module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator", // Generate release notes from commits
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        message: "chore(release): v${nextRelease.version}",
      },
    ],
    "@semantic-release/github",
  ],
  preset: "angular",
};
