---
name: refine-action-plan
description: Concisely improve an existing coding action plan in Brazilian Portuguese by correcting verified repository references, clarifying materially ambiguous steps, and making execution order, dependencies, validation, and deliverables actionable; require a saved pre-execution questionnaire in Brazilian Portuguese, then save the refined plan under docs/plan. Use when the user asks to improve, review, correct, clarify, simplify, structure, translate, or persist an action plan before implementation. Do not create a plan from an unplanned task or execute the plan.
---

# Refine Action Plan

## Purpose

Produce a concise, standalone, executable action plan that preserves the user's intent while fixing inaccurate references, material ambiguity, sequencing, dependencies, validation, and deliverables. Save it without executing the plan.

## Core Rule

Refine the supplied plan; do not implement it or replace it with a different solution.

- Preserve the original objective, scope, exclusions, constraints, and relevant technical decisions.
- Remove repetition and combine overlapping steps.
- Reorder steps only when needed to respect dependencies or make execution safer.
- Add only details needed to make a step actionable, correct a verified reference, resolve material ambiguity, define a requested deliverable, or verify completion.
- Keep suggestions optional unless the user explicitly made them requirements.
- Do not broaden scope, invent product requirements, or redesign the proposed solution without evidence that the original plan cannot meet its objective.
- In the refined plan, never mention plan refinement, this skill, the source plan, or the work performed to improve the wording. Begin directly with the intended outcome.

## Workflow

1. Read the applicable `AGENTS.md` files and inspect the working tree.
2. Extract the objective, scope, exclusions, constraints, decisions, dependencies, deliverables, and validation already present in the plan.
3. Verify repository references that affect execution, such as paths, symbols, routes, commands, configuration, schemas, and named dependencies. Inspect nearby code only when necessary to resolve a material ambiguity.
4. Correct verified errors, remove duplication, and organize the plan into a dependency-aware execution order.
5. Ask one concise question only when a missing decision would materially change scope, contract, data, security, or architecture. Otherwise state the minimum safe assumption.
6. Rewrite the plan in Brazilian Portuguese using direct imperative language and concrete, verifiable steps.
7. Add the mandatory pre-execution questionnaire instruction below.
8. Save it using the output rules below and report the path. Do not execute the refined plan.

## Mandatory Pre-Execution Questionnaire

Every refined action plan must tell the future coding agent to:

- Before executing the plan, write 3 to 10 concise questions whose answers could materially improve execution accuracy.
- Save the questions at `docs/questions/YYYY/MM/YYYY-MM-DD-HHmm-<plan-name>.md`, relative to the repository root, using the current local timestamp.
- Create missing directories, never overwrite an existing file, and append `-02`, `-03`, and so on when necessary.
- Write every question in Brazilian Portuguese.
- Stop after saving the questionnaire, report its path, and wait for the user's answers before executing the plan.

Express this requirement compactly in the refined plan. Do not generate the questions while refining the plan.

## Quality Standard

- Keep the refined plan proportional to the supplied plan; prefer concise steps over exhaustive commentary.
- Use phases only when they clarify dependencies or separate distinct workstreams.
- For each step, identify the action and the expected result. Add paths or symbols only when verified and useful.
- Include validation that is appropriate to the repository and the change. Do not invent unavailable test commands.
- Include risks, rollback, migration, or compatibility work only when the supplied plan or inspected repository makes them materially relevant.
- Keep the review summary to at most three short bullets in total.
- Treat the mandatory questionnaire instruction as an allowed addition, but keep it to one short paragraph or bullet group.

## Language

Always write the refined action plan and pre-execution questionnaire in Brazilian Portuguese (`pt-BR`), even when the source plan is written in another language. Apply Brazilian Portuguese to titles, section headings, summaries, instructions, and questions. Preserve code identifiers, file paths, routes, commands, configuration keys, and other technical literals exactly as they appear in the repository.

## Output File

Treat `docs` as relative to the repository root. Save the result at:

```text
docs/plan/YYYY/MM/YYYY-MM-DD-HHmm-<plan-slug>.md
```

- Use the current local timestamp and a concise lowercase kebab-case slug.
- Create missing year and month directories.
- Never overwrite an existing plan; append `-02`, `-03`, and so on when needed.
- Exclude secrets and personal data; use descriptive placeholders.

Use this compact structure:

```markdown
# Plano de ação refinado: <título curto>

- Gerado em: `<data e hora local no formato ISO 8601>`

## Ajustes

- <Somente correção ou premissa relevante; omita esta seção quando não houver nenhuma.>

## Objetivo

<Resultado esperado em um parágrafo curto.>

## Plano de ação

1. <Ação concreta e resultado esperado.>
2. <Próxima ação em ordem de dependência.>

## Validação

- <Verificação proporcional ao escopo.>

## Antes da execução

<Instrução compacta para gerar e salvar o questionário obrigatório, parar e aguardar as respostas.>
```

Omit optional sections that add no value, except `Antes da execução`, which is mandatory.

## Boundaries

- Do not implement, test, deploy, commit, or otherwise execute the refined plan.
- Do not create an action plan when the user supplied only a task request; ask for the existing plan instead.
- Do not turn repository inspection findings into implementation work or unrelated analysis.
- Do not replace explicit user decisions with personal preferences.
- Do not claim verification without inspecting the referenced source.
