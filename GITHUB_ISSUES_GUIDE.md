# GitHub Issues & Milestones Tracking Guide for AI Agents

## 🎯 Purpose
This guide defines the standard operating procedure for AI developer agents working on this project. To maintain a single source of truth and graceful project tracking, **all work must be strictly tracked via GitHub Issues and Milestones**. You (the AI Agent) are responsible for managing these issues dynamically as you interact with the codebase.

## 🛠️ Required Capabilities
Ensure you leverage your GitHub connection (e.g., via the `github-mcp-server`) to perform these actions. Key tools you will likely use:
- `search_issues` / `list_issues`
- `issue_read`
- `issue_write` (to create or update issues)
- `add_issue_comment`

## 📋 Standard Operating Procedures

### 1. Starting a New Task
Before you write or modify any code:
1. **Search Existing Issues:** Check if an issue already exists for the requested task.
2. **Read Issue:** If it exists, read its content and confirm it matches the user's request.
3. **Create Issue (if needed):** If no issue exists, create a new one.
   - **Title:** Clear, objective, and prefixed (e.g., `feat: Add login component`, `fix: Correct header alignment`).
   - **Body:** Include a brief description and clear **Acceptance Criteria**.
   - **Milestone:** Associate the issue with the relevant active Milestone, if applicable.
   - **Labels:** Apply appropriate labels (e.g., `enhancement`, `bug`, `documentation`).

### 2. During Execution (Work in Progress)
Keep the issue tracker up to date:
1. **Comment on Progress:** If a task takes multiple steps, involves complex debugging, or requires significant architectural decisions, add brief progress updates as comments to the issue.
2. **Report Blockers:** If you encounter blockers, missing dependencies, or require explicit user input, document this explicitly in the issue so the context is preserved.

### 3. Completing a Task
When the code is written, tested, and ready:
1. **Link the Code:** Ensure your commit messages or Pull Requests reference the issue number (e.g., `Fixes #12` or `Closes #12`).
2. **Update the Issue:** Leave a final comment summarizing the changes made and the files affected. If you have the capability, close the issue once the work is successfully pushed/merged.
3. **Verify Milestone:** Check if completing this issue fulfills the current Milestone. If a milestone is fully achieved, notify the user in the chat.

## 📝 Standard Issue Template
When creating a new issue, use the following structure for the body:

```markdown
**Description:**
[Brief explanation of what needs to be done and why]

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2

**Context/Dependencies:**
[Any relevant files, links, or dependent issues]
```

## 🚨 Golden Rules
1. **No Ghost Coding:** Never start implementing a feature or fix without an associated open issue.
2. **Granularity:** Keep issues small and focused. If a user asks for a massive feature, break it down into smaller, manageable sub-tasks/issues.
3. **Always Ask if Unsure:** If the user's request is ambiguous or you are unsure which milestone a task belongs to, clarify with the user before flooding the repository with issues.
