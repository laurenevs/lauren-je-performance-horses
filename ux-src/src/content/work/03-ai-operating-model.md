---
title: Changing how design and research work with AI
order: 3
emoji: 🤖
theme: AI practice
summary: Three levels at once. The product's agentic patterns, how designers and researchers do the work, and the operating layer I built for myself.
card: "AI, three levels at once"
hook: "The product's agentic patterns, how designers and researchers work, and the operating layer I built for myself."
horse: Status reports now write themselves. I mostly use the time for horses.
stats:
  - { emoji: 🎨, value: "Prototypes", label: "Testable and production-shaped, built directly by designers" }
  - { emoji: 🧪, value: "Side project → tool", label: "Synthetic usability evaluation, shared with versioned releases" }
  - { emoji: 🗞️, value: "Weekly", label: "Digests that assemble and post with no human in the loop" }
---

## Before

The team used AI the way most teams were using it: individually, inconsistently and mostly for drafting text. Designers handed static files to engineers. Weekly status was assembled by hand from the ticketing system and chat. Two areas could work on the same problem for weeks without knowing it. Research planning started from the assumption that a new question needed a new study.

None of that was unusual. It also meant AI was making individuals slightly faster without changing how the organization worked.

## What I did

I worked on three levels at the same time, because changing only one of them doesn't stick.

<figure>
  <img src="/ux/figures/three-levels.svg" alt="Three stacked levels. Level one, the product: agentic patterns and AI trust research. Level two, the team: AI-assisted prototyping for design, and synthetic usability evaluation plus an existing-data-first rule for research. Level three, my own tooling: weekly digests, duplicate detection and a metrics refresh." width="960" height="330" loading="lazy" />
  <figcaption>Three levels of change. Each one makes the others easier to defend.</figcaption>
</figure>

### Level one: the product

The agentic patterns in the [experience framework](/ux/work/agentic-framework/) are how AI shows up for customers: three tiers, six shared primitives, five product lines. Underneath them is the AI trust research I directed, which found that people trust an agent based on what they see it do, not on what it claims. That finding changed how agentic controls were designed.

### Level two: how the team works

**Design practice.** I backed an internal AI-assisted prototyping capability that lets designers build testable, production-shaped prototypes directly, instead of handing static files to engineers. It shortens the path from a concept to customer feedback, and from customer feedback into engineering. My job was to protect the time to build it and then treat it as real tooling, not a novelty.

<mark class="todo">NEEDS LAUREN: anything measurable here? For example, the share of projects prototyped this way, or time from concept to a testable prototype. Leave this out if there's nothing you can publish.</mark>

**Research practice.** One researcher built a tool for synthetic usability evaluation as a side project. I took it from one person's laptop to a distributed internal tool, installed across the team with versioned releases, and sponsored it to product leadership for use beyond UX. It's a first pass that catches obvious problems before real participants spend time on them, not a replacement for them.

I also rewrote how studies get scoped. Before designing a study, a team has to establish what telemetry, customer feedback and existing internal knowledge already answer. Primary research only spends its time on what nothing else can tell us. This is enforced at plan review, the first checkpoint in the [research review model](/ux/work/research-function/), so it isn't a guideline people forget.

### Level three: my own operating layer

I built the organization's operating layer myself in Claude Code. Weekly digests assemble from the ticketing system and chat and post without anyone in the loop. The same layer flags duplicated work across areas, so overlap shows up in week one instead of at a design review. It also runs the monthly metrics refresh described in [Instrumenting a design and research organization](/ux/work/instrumenting-design/).

I built it myself on purpose. It's hard to ask a team to change how they work with AI if you only manage the change from a distance.

## What changed

Customers see one consistent set of agentic patterns across five product lines. Designers put testable prototypes in front of customers and engineers instead of static files. The synthetic evaluation tool is installed across the team and has a path to product leadership. Every research plan starts with what existing data already answers. The digests run every week without anyone assembling them, and duplicated work surfaces early.

<mark class="todo">NEEDS LAUREN: any number you can publish on adoption or time saved. If not, this section stands as written.</mark>

## What I would do differently

<mark class="todo">NEEDS LAUREN: one or two honest sentences.</mark>
