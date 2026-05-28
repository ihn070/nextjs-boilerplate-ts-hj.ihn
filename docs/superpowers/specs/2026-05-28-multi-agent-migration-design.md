# Multi-Agent Migration Design Spec

**Date:** 2026-05-28
**Status:** Draft

## Overview

This document describes how to migrate the current single-agent workflow into a multi-agent workflow that can split planning, implementation, verification, and publishing into separate responsibilities.

The goal is not to add complexity for its own sake. The goal is to make repeated work safer, faster, and easier to review by assigning each stage to a specialized agent with clear boundaries.

## Goals

- Reduce context switching for one agent doing every task end-to-end.
- Improve reliability by separating planning from code changes and verification.
- Make it easier to parallelize independent work.
- Keep the human-facing workflow simple and predictable.
- Preserve the ability to complete small tasks with a single agent when that is enough.

## Non-Goals

- Replacing human review.
- Forcing every task into multiple agents.
- Changing the product architecture just to fit the agent system.
- Introducing distributed systems complexity unless the task volume justifies it.

## Current State

The current workflow is effectively single-agent:

- One agent discovers context.
- The same agent plans the change.
- The same agent edits files.
- The same agent verifies the result.
- The same agent reports back.

This works well for small tasks, but it becomes fragile when the task grows across many files, requires validation, or needs separate expertise.

## Target State

The future workflow should support a small set of specialized agents:

| Agent | Responsibility |
|---|---|
| Coordinator | Owns the task, breaks it into subtasks, assigns work, merges results |
| Planner | Produces implementation plan, risk list, and acceptance criteria |
| Builder | Edits files and implements the requested change |
| Reviewer | Checks for regressions, missing cases, and style issues |
| Verifier | Runs tests, build checks, and local validation |
| Publisher | Prepares final summary, changelog, or handoff note |

Not every task needs every agent. The coordinator should choose the smallest useful set.

## Workflow

### Phase 1: Intake

The coordinator receives the request and classifies it:

- Small task
- Medium task
- Large task
- Risky task

Small tasks can remain single-agent. Larger tasks should split into multiple agents.

### Phase 2: Planning

The planner creates a short plan with:

- Objective
- Scope
- Files likely to change
- Risks
- Verification steps

The plan must be explicit enough that the builder can work without guessing.

### Phase 3: Implementation

The builder receives only the context it needs:

- Relevant files
- Constraints
- Expected outputs
- Acceptance criteria

The builder makes the code changes and keeps the surface area small.

### Phase 4: Review

The reviewer checks:

- Behavioral regressions
- Naming and structure issues
- Security or data handling risks
- Missing edge cases
- Whether the change matches the request

The reviewer should not rewrite the solution unless there is a real defect.

### Phase 5: Verification

The verifier runs:

- Type checks
- Lint
- Build
- Targeted smoke tests

If verification fails, the verifier reports exact failure points back to the coordinator.

### Phase 6: Publication

The publisher prepares the final response:

- What changed
- Why it changed
- What was verified
- Any remaining risks

## Agent Boundaries

### Coordinator

- Owns task decomposition.
- Decides when to parallelize.
- Resolves conflicts between agent outputs.
- Keeps the user informed.

### Planner

- Does not edit code.
- Focuses on structure, risks, and sequencing.
- Produces short and actionable plans.

### Builder

- Only implements approved scope.
- Avoids unrelated refactors.
- Keeps patches small and reviewable.

### Reviewer

- Reads the patch and surrounding code.
- Produces findings first.
- Prioritizes bugs and risk over style opinions.

### Verifier

- Uses commands or tests.
- Reports factual outcomes only.
- Does not speculate about failures.

### Publisher

- Writes the final handoff.
- Summarizes results in user-friendly language.
- Calls out anything the user still needs to do.

## Routing Rules

The coordinator should follow these rules:

- Use one agent when the task is trivial.
- Use planner + builder + verifier for medium tasks.
- Use planner + builder + reviewer + verifier for risky tasks.
- Use parallel builders only when file scopes do not overlap.
- Never let two agents edit the same file at the same time.

## Shared Context Rules

To avoid context drift:

- Share only necessary files with each agent.
- Summarize long docs instead of copying them wholesale.
- Keep one source of truth for scope and acceptance criteria.
- Record any assumptions explicitly.

## Failure Modes

Common failures to guard against:

- Two agents making conflicting edits.
- A builder over-implementing beyond the request.
- A reviewer focusing on style while missing logic bugs.
- A verifier running the wrong command.
- The coordinator failing to merge agent outputs cleanly.

## Migration Plan

### Step 1: Define the agent contract

Document what each agent can and cannot do.

### Step 2: Split task types

Classify tasks into small, medium, large, and risky categories.

### Step 3: Introduce a coordinator layer

The coordinator should be the only agent that speaks directly to the user for most tasks.

### Step 4: Add parallel worker support

Allow independent subtasks to run concurrently when file scope does not overlap.

### Step 5: Add review and verification checkpoints

Make review and verification standard for non-trivial work.

### Step 6: Add traceability

Every migration task should produce:

- A plan
- A change summary
- Verification results
- Any unresolved risk

## Suggested Repository Additions

| Path | Purpose |
|---|---|
| `docs/superpowers/specs/2026-05-28-multi-agent-migration-design.md` | Architecture and policy spec |
| `docs/superpowers/plans/2026-05-28-multi-agent-migration-plan.md` | Execution plan for the migration |
| `.agents/` or equivalent | Agent-specific instructions and profiles |
| `scripts/` or task runner config | Optional orchestration helpers |

## Success Criteria

The migration is successful when:

1. Small tasks still complete without unnecessary overhead.
2. Medium and large tasks can be split cleanly across agents.
3. Review catches regressions before the user does.
4. Verification is repeatable and visible.
5. Final responses remain concise and actionable.

## Open Questions

- Should the coordinator be a runtime role or a prompt-level convention?
- Should agent instructions live in repo files or external configuration?
- Should verification be mandatory for all code changes or only for higher-risk tasks?
- How much task parallelism is worth the added orchestration cost?

