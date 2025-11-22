// custom-adapters/cz-custom.cjs
const { spawnSync } = require("bun"); // Bun supports require in CommonJS

module.exports = {
  // Prompt setup
  prompter: async (cz, commit, push) => {
    const { type } = await cz.prompt([
      {
        type: "list",
        name: "type",
        message: "Select the type of change you are committing:",
        choices: [
          { name: "feat:     A new feature", value: "feat" },
          { name: "fix:      A bug fix", value: "fix" },
          { name: "docs:     Documentation only changes", value: "docs" },
          {
            name: "style:    Code style changes (e.g., formatting)",
            value: "style",
          },
          {
            name: "refactor: Code change that neither fixes a bug nor adds a feature",
            value: "refactor",
          },
          { name: "perf:     Performance improvements", value: "perf" },
          { name: "test:     Adding or correcting tests", value: "test" },
          {
            name: "chore:    Changes to the build process or auxiliary tools",
            value: "chore",
          },
          { name: "revert:   Revert to a previous commit", value: "revert" },
        ],
        validate: (input) => (input ? true : "Type is required!"), // Ensure type is selected
      },
    ]);

    const { scope } = await cz.prompt([
      {
        type: "input",
        name: "scope",
        message: "Enter the scope (e.g., component, feature, etc.) [required]",
        validate: (input) => (input ? true : "Scope is required!"), // Ensure scope is provided
      },
    ]);

    const { description } = await cz.prompt([
      {
        type: "input",
        name: "description",
        message:
          'Write a short description of your changes (imperative, e.g., "fix bug") [required]',
        validate: (input) => {
          // Check for required input
          if (!input) return "Description is required!";
          // Check if description exceeds 50 characters
          if (input.length > 50)
            return "Description cannot exceed 50 characters!";
          // Check if description starts with uppercase letter
          if (input.charAt(0) === input.charAt(0).toUpperCase()) {
            return "Description should not start with an uppercase letter!";
          }
          // Check if description ends with a dot
          if (input.charAt(input.length - 1) === ".") {
            return "Description should not end with a dot!";
          }
          return true;
        }, // Ensure description is valid
      },
    ]);

    // Combine all responses to form the commit message
    let commitMessage = `${type}(${scope}): ${description}\n`; // Add a newline after the type and description

    // Pass the generated commit message to the commit function
    commit(commitMessage);
  },
};
