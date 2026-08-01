---
name: refine-task-prompt
description: Concisely rewrite a coding-task prompt in Brazilian Portuguese by correcting verified repository references and resolving only material ambiguities, require a saved pre-execution questionnaire in Brazilian Portuguese, then save the result under docs/prompts. Use when the user asks to improve, clarify, correct, simplify, structure, translate, or persist a prompt before implementation. Do not solve, plan, or execute the task described by the prompt.
---

# Refine Task Prompt

## Purpose

Produce a short, standalone prompt that preserves the user's request while fixing inaccurate references and material ambiguity. Save it without executing or pre-solving the underlying task.

## Core Rule

Refine the request; do not elaborate its solution.

- Keep the executing prompt close to the source prompt's length and level of detail. Prefer shorter wording after removing repetition.
- Add only information needed to correct a verified reference, resolve an ambiguity, preserve an explicit constraint, or identify the requested deliverable.
- Do not create the plan, design, investigation results, implementation phases, test matrix, risk analysis, or acceptance checklist that the future agent was asked to produce.
- Do not add generic engineering requirements already supplied by repository instructions.
- Do not repeat the same requirement under multiple headings.
- In the executing prompt, never mention prompt refinement, the refinement skill, the source prompt, or the work performed to improve the wording. Begin directly with the actual task.

## Workflow

1. Read the applicable `AGENTS.md` files and inspect the working tree.
2. Extract the requested outcome, explicit scope, exclusions, and deliverable.
3. Verify only repository references that affect execution, such as named paths, symbols, routes, commands, or schema objects. Inspect nearby code only when necessary to resolve a material ambiguity.
4. Correct verified errors and resolve ambiguity conservatively. Preserve suggestions as suggestions.
5. Ask one concise question only when a missing decision would materially change scope, contract, data, security, or architecture. Otherwise state the minimum safe assumption.
6. Rewrite the request in Brazilian Portuguese using direct imperative language.
7. Add the mandatory pre-execution questionnaire instruction below.
8. Save it using the output rules below and report the path. Do not execute the underlying task.

## Mandatory Pre-Execution Questionnaire

Every refined executing prompt must tell the future coding agent to:

- Before executing the task, write 3 to 10 concise questions whose answers could materially improve execution accuracy.
- Save the questions at `docs/questions/YYYY/MM/YYYY-MM-DD-HHmm-<plan-name>.md`, relative to the repository root, using the current local timestamp.
- Create missing directories, never overwrite an existing file, and append `-02`, `-03`, and so on when necessary.
- Write every question in Brazilian Portuguese.
- Stop after saving the questionnaire, report its path, and wait for the user's answers before executing the task.

Express this requirement compactly in the final prompt. Do not generate the questions while refining the prompt.

## Brevity Standard

- Aim for the refined executing prompt to be the same length as or shorter than the source prompt.
- A modest increase is acceptable when verified corrections or essential constraints require it, but normally keep it below 700 words.
- Use two to five short sections at most. Prefer `Tarefa`, `Requisitos`, `Restrições`, and `Entregável`; omit any section that adds no value.
- Do not add detailed acceptance criteria or validation steps unless the user explicitly requested them or they are necessary to remove ambiguity.
- Keep the review summary to at most three short bullets in total.
- Treat the mandatory questionnaire instruction as an allowed addition to the source prompt, but keep it to one short paragraph or bullet group.

## Language

Always write the refined prompt and pre-execution questionnaire in Brazilian Portuguese (`pt-BR`), even when the source prompt is written in another language. Apply Brazilian Portuguese to the entire generated content, including titles, section headings, review summaries, instructions, and questions. Preserve code identifiers, file paths, routes, commands, configuration keys, and other technical literals exactly as they appear in the repository.

## Output File

Treat `docs` as relative to the repository root. Save the result at:

```text
docs/prompts/YYYY/MM/YYYY-MM-DD-HHmm-<task-slug>.md
```

- Use the current local timestamp and a concise lowercase kebab-case slug.
- Create missing year and month directories.
- Never overwrite an existing prompt; append `-02`, `-03`, and so on when needed.
- Exclude secrets and personal data; use descriptive placeholders.

Use this compact structure:

```markdown
# Prompt refinado da tarefa: <título curto>

- Gerado em: `<data e hora local no formato ISO 8601>`

## Ajustes

- <Somente correção ou premissa relevante; omita esta seção quando não houver nenhuma.>

## Prompt para o agente executor

<Prompt conciso que começa diretamente com a tarefa solicitada.>
```

## Boundaries

- Do not implement, test, deploy, commit, or otherwise execute the underlying task.
- Do not turn repository inspection findings into a partial solution.
- Do not broaden the requested scope or convert optional ideas into requirements.
- Do not claim verification without inspecting the referenced source.
