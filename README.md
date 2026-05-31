# Agentic Healing in Production — Slides

Slide deck for the **"Agentic Healing in Production"** talk.

- **Speaker:** Jack McNicol — Founding Engineer @ SuperIT (Sparky)
- **Event:** AI Engineer Melbourne · Web Directions · Federation Square — June 2026
- **Format:** 18 min talk + separate Q&A
- **Audience:** Software engineers (with SREs and AI engineers in the room)

Built with Astro + Tailwind CSS 4. One route per slide, each slide fills the viewport (`100vh × 100vw`).

## The talk

Self-healing systems aren't new — Kubernetes operators, Erlang supervisors, Chaos Monkey have done it for years. What's new is that the loops can now be closed by reasoning agents. Earning that autonomy means doing the boring prep first. The deck walks four stages (dental-hygiene metaphor throughout):

1. **Health Check** — prep the repo so the agent can navigate it (AGENTS.md, warnings-as-errors, merge queue).
2. **Bugs Reported** — triage with intent (Linear Triage Intelligence, Logfire discovery, skills).
3. **In the Field** — AI suggests → AI acts, with bounded blast radius (PR actions, recurring jobs, webhooks → RCA).
4. **Agentic Test** — prove every fix in a rich, fast-to-validate report.

Close: shift from *doing the work* to *designing the system that does the work* — speed multiplies foundations or debt.

Full narrative, research backing, demos, and source list live in [`agentic-healing-talk-guide.md`](./agentic-healing-talk-guide.md). Brand/visual system in [`DESIGN.md`](./DESIGN.md).

## Project structure

```text
/
├── public/                 # favicon, static assets
├── src/
│   ├── layouts/
│   │   ├── Layout.astro     # HTML shell — fonts, meta, global.css, ink body
│   │   └── Slide.astro      # single full-viewport slide container
│   ├── pages/
│   │   └── index.astro      # Slide 1 — title card
│   └── styles/
│       └── global.css       # Tailwind 4 @theme — DESIGN.md tokens
├── astro.config.mjs
└── package.json
```

Each slide is its own page wrapping `<Layout>` + `<Slide>`. Type/colour come from the `@theme` tokens in `global.css` (translated from `DESIGN.md`); `Healing` always renders in brand green `#9fe870`.

## Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Build to `./dist/` |
| `pnpm preview` | Preview the build locally |
