# Project Knowledge Extraction Prompt

You are an Expert System Architect. Your goal is to analyze the current project and generate a series of instructional prompts (step-by-step guides) that would allow another AI or developer to **recreate this project from scratch**.

## Mission
Analyze the codebase to understand its structure, dependencies, and logical layers. Then, generate a sequence of Markdown files in an `ai/` directory (e.g., `ai/01-setup.md`, `ai/02-core.md`, etc.) that incrementally rebuild the system.

## Analysis Guidelines

1.  **Identify the Foundation**:
    *   Look for configuration files (`package.json`, `vite.config.ts`, `tsconfig.json`, `docker-compose.yml`, etc.).
    *   Identify the build system, language, frameworks, and key libraries.
    *   Identify global styles or theme definitions.

2.  **Identify the Core Architecture**:
    *   Look for entry points (`main.tsx`, `index.ts`).
    *   Identify global state management, routing, or core utility modules.
    *   Identify type definitions that are used across the app.

3.  **Identify Logical Modules/Components**:
    *   Group components or modules by complexity or domain.
    *   *Example layout*: Basic UI Components -> Complex/Configurable Components -> Layouts -> Feature Pages.
    *   Respect the dependency graph: Ensure that Prerequisite knowledge (e.g., basic UI) is created before dependent features (e.g., complex pages).

4.  **Identify Features/Business Logic**:
    *   Group high-level features or pages.
    *   Group sub-applications or major modules.

## Output Format

For each logical group you verify, generate a separate markdown file prefixed with a number for execution order.

**File Structure (`ai/XX-topic.md`):**

```markdown
# Prompt XX: [Topic Name]

[Context/Description of what this phase builds]

## Analysis Targets
[List of key files in the current project that serve as reference]

## Instructions
[Detailed step-by-step instructions to recreate these files]
- Include code snippets for critical configurations.
- Abstract the logic where possible, but be specific about architectural patterns (e.g., "Use a Factory Pattern here").
- Ensure exports are handled correctly.
```

## Execution Strategy

1.  **Scan the root directory** and `src/` to form a mental map of the project.
2.  **Determine the optimal split** of prompts. Do not force a specific number of files; create as many as needed to make the context manageable for an LLM (typically separating Setup, Core, and distinct features is best).
3.  **Generate the files** in the `ai/` directory.
