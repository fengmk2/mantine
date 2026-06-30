## Links

## Finalizing Your Work

Choose these commands to run after finalizing your work:

```bash
# Always run these commands before finalizing your work
npm run typecheck
npx oxlint -c oxlint.config.mjs path/to/changed/files
npm run format:write:files path/to/changed/files
npm run build

# Run tests for specific path related to your changes
npm run jest @mantine/charts
npm run jest path/to/changed/file.test.ts

# Run stylelint only if you have made changes to styles or CSS files
npm run stylelint

# Run this script if you've changed dependencies in any package.json
npm run syncpack
```

After running the commands above, check if `codex` CLI is available (`command -v codex`). If it is, run `/codex-code-review` to get an automated code review of unstaged changes and apply fixes.

## Code Style

**Comments Guidelines:**
- **Do not include inline comments** that describe logic or implementation details unless explicitly requested
- **Always preserve documentation comments** on interfaces, types, and function parameters (JSDoc-style comments with `/** */`)
- The codebase prefers clean, self-documenting code for implementation
- Type definitions and public APIs should maintain their documentation comments

## Commit conventions

Mantine is a monorepo, thus it is important to write correct commit messages to keep the git history clean and consistent. All commits made in this repository are divided into 3 groups:

- package commits – Related to any particular package.
- docs commits – Related to the documentation.
- core commits – Only related to repository tooling and not associated with any package.

Commit messages consists of 3 parts:
```
[area] Optional title: Message
```

Examples:
- `[core] Fix documentation deployment script` – Change made in repository script, it is not related to documentation or any package
- `[mantine.dev] Update report issues link` – Change related to documentation website
- `[@mantine/core] Button: Add theme focus styles` – Change in @mantine/core package at Button component
- `[@mantine/hooks] use-list-state: Add remove handler` – Change in @mantine/hooks package at use-list-state hook

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
