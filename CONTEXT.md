# Agentic Healing in Production — Talk Context

The shared vocabulary for the talk's narrative. Defines the canonical section names and the recurring metaphors, so slide copy and the guide stop drifting apart.

## Language

**Health Check**:
Section 1. Prepping the repo/environment so an agent can navigate it (pre-game rituals).
_Avoid_: "Repo prep" as a section name (use as description only).

**In the Field**:
Section 2. The agent acting in production — PR actions, recurring jobs, webhooks → RCA.
_Avoid_: "Heal on trigger" as a section name.

**Practise**:
Section 3. ⚠️ Scope not yet defined. Likely the "prove it" / proving-the-fix material (formerly "Agentic Test") and/or hands-on guides. Holds the **Intake Flow** (at the section end) and **Merge queue**. Pin down before building section 3.

**Agentic Future**:
Section 4. Forward-looking principles and guides for earning autonomy.

**Intake Flow**:
The funnel feeding the agentic pipeline. Two sources: human reports (Slack, or Linear deduping "these are the same") and machine alerts (Logfire / Sentry exceptions firing). Lives at the **end of Practise**.
_Avoid_: "Bugs Reported" as a section name — it is one source within the Intake Flow, not a section.

**Autonomy Ladder**:
The read-only → suggest → human-approved act → auto-act progression. Trust earned one rung at a time.

**Dental metaphor**:
The talk's spine. Brush teeth (Health Check) → X-ray/filling (In the Field) → post-op check (proving the fix). "Agents are dentists; most codebases haven't flossed in years."

## Relationships

- The **Intake Flow** (end of **Practise**) has two sources (human reports, machine alerts) → one agentic pipeline.
- Each section maps to an **Autonomy Ladder** rung — blast radius widens as the talk progresses.
- **SuperIT / Sparky** is the recurring proof case threaded through the sections (no longer its own section).

## Example dialogue

> **Reviewer:** "Is 'Bugs Reported' its own section?"
> **Jack:** "No — bugs reported is part of a flow. Humans report via Slack, or Linear says these are the same, and they flow into the agentic pipeline. Alerts firing in Logfire or Sentry flow into the same pipeline. It's the Intake Flow, and it sits at the end of Practise."

## Flagged ambiguities

- The guide ships a 4-process-stage "spine" (Health Check / Bugs Reported / In the Field / Agentic Test). **Resolved:** non-canonical. Canonical sections are **Health Check / In the Field / Practise / Agentic Future** (per the `Menu` component). Guide body is re-mapped section-by-section as each is built: Bugs Reported → Intake Flow (now end of Practise); Agentic Test → likely Practise.
- **"Practise"** scope undefined — see Language note. Resolve before building section 3. Known content so far: **Merge queue** (moved out of Health Check) and **Intake Flow** (at section end, moved out of In the Field).
