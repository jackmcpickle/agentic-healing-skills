# Agentic Healing in Production — Talk Context

The shared vocabulary for the talk's narrative. Defines the canonical section names and the recurring metaphors, so slide copy and the guide stop drifting apart.

## Language

The talk follows the **guide's spine** (`agentic-healing-talk-guide.md`) — four numbered sections plus an unnumbered close. The `Menu` component renders this spine as the mermaid-style flowchart (nodes + arrows + a dashed feedback loop).

**Health Check**:
Section 1 — *prep the patient*. Prepping the repo/environment so an agent can navigate it: Flow state, AGENTS.md, read the sessions, the dumb zone, warnings-as-errors, merge queue.

**Bugs Reported**:
Section 2 — *triage the symptom*. Triage with intent: Unassigned → AI triage (Linear Triage Intelligence), discovery via Logfire, review with skills.

**In the Field**:
Section 3 — *heal on trigger*. AI suggests → AI acts, bounded blast radius: PR actions, recurring jobs, webhooks → RCA, the project-manager loop, the Sparky hero demo.

**Agentic Test**:
Section 4 — *prove it worked*. Prove every fix in a rich, fast-to-validate report (Meijer's "rich report" move, `report.html`, the principle).

**Close**:
Unnumbered ending — "What's the point?", the argument, the warning, the call to action, thanks. May include the 12-Factor namecheck slide.

**Autonomy Ladder**:
The read-only → suggest → human-approved act → auto-act progression. Trust earned one rung at a time. Blast radius widens across the four sections.

**Dental metaphor**:
The talk's spine. Brush teeth (Health Check) → X-ray (triage) → filling (In the Field) → post-op check (Agentic Test). "Agents are dentists; most codebases haven't flossed in years."

**12-Factor anchors**:
Dex Horthy's [12-Factor Agents](https://github.com/humanlayer/12-factor-agents). Each section namechecks a subset (HC: F2/F3/F9/F13; Bugs: F1/F4/F10; Field: F5–F8/F11/F12; Test: F4/F12). Namecheck, don't recite. Pull-quote: *"Most successful production agents are deterministic code with strategically placed LLM steps."*

## Relationships

- The four sections run **reactive → proactive** and **AI suggests → AI acts**; the dashed feedback arrow loops Agentic Test back to Health Check.
- Each section maps to an **Autonomy Ladder** rung.
- **SuperIT / Sparky** is the recurring proof case threaded through the sections (the hero demo lives in In the Field).
- Each section ends with a **"How we use it"** slide — a flowchart of the real SuperIT usage, rendered at build time via `Mermaid.astro` (beautiful-mermaid). Health Check: a `Schedule` group (pay down code debt, pay down skills debt, architecture audit, test coverage) → draft PR. Bugs Reported / In the Field / Agentic Test: flows TBD (await Jack's groups/nodes).

## Example dialogue

> **Reviewer:** "Is 'Bugs Reported' its own section?"
> **Jack:** "Yes — it's section 2, triage. Humans report via Slack or Linear; alerts fire in Logfire/Sentry; the agent does the first triage pass and shows its work."

## Flagged ambiguities

- **Resolved (2026-06-01):** earlier the menu used Jack's own names (Health Check / In the Field / Practise / Agentic Future) as canonical. Now reverted — the **guide's spine is canonical**: Health Check / Bugs Reported / In the Field / Agentic Test + Close. "Practise" and "Agentic Future" are dropped; the intake-flow-into-Practise and merge-queue-into-Practise relocations are reverted (merge queue is back in Health Check; triage is its own Bugs Reported section).
- The `Menu` is now a **flowchart** (mermaid spine), not the vertical game-menu list.
