---
title: Changing how a design and research org works with AI
order: 3
emoji: 🤖
theme: AI practice
summary: Three levels at once. My own operating layer, the team's tools and research rules, and the company's position on how AI earns trust in the product.
horse: Status reports now write themselves. I mostly use the time for horses.
stats:
  - { emoji: 🗞️, value: "Weekly", label: "Digests that assemble and post with no human in the loop" }
  - { emoji: 🧪, value: "Side project → tool", label: "Synthetic usability evaluation, now shared with versioned releases" }
  - { emoji: 🎨, value: "Off Figma", label: "Designers prototyping with AI in an internal tool the team built" }
---

## Before

The team used AI the way most teams were using it: individually, inconsistently and mostly for drafting text. Weekly status was assembled by hand from the ticketing system and chat. Two areas could work on the same problem for weeks without knowing it. Research planning started from the assumption that a new question needed a new study.

None of that was unusual. It also meant AI was making individuals slightly faster without changing how the organization worked.

## What I did

I worked on three levels at the same time, because changing only one of them doesn't stick.

<figure>
  <img src="/ux/figures/three-levels.svg" alt="Three stacked levels. Level one, my own tooling: an operating layer that writes weekly digests, detects duplicated work and refreshes metrics. Level two, the team: an AI prototyping tool, a synthetic usability evaluation tool, and a rule that research starts from what existing data already answers. Level three, the product: research that set the company's position on how AI earns user trust." width="960" height="330" loading="lazy" />
  <figcaption>Three levels of change. Each one makes the others easier to defend.</figcaption>
</figure>

### Level one: my own operating layer

I built the organization's operating layer myself in Claude Code. Weekly digests assemble from the ticketing system and chat and post without anyone in the loop. The same layer detects duplicated work across areas, so overlap shows up in week one instead of at a design review. It also runs the monthly metrics refresh described in [Instrumenting a design organization](/ux/work/instrumenting-design/).

I built it myself on purpose. It's hard to ask a team to change how they work with AI if you only manage the change from a distance.

### Level two: the team's tools and rules

**Prototyping without Figma.** The design team built an internal AI prototyping tool, and it changed their workflow. Designers now build working prototypes with AI instead of drawing static screens, and much of the team's work has moved off Figma. My job was to protect the time to build it and then treat it as real tooling, not a novelty.

<mark class="todo">NEEDS LAUREN: anything measurable here? For example, the share of projects prototyped in the tool, or time from brief to testable prototype. Leave this out if there's nothing you can publish.</mark>

**Synthetic usability evaluation.** One researcher built a tool for synthetic usability evaluation as a side project. I took it from one person's laptop to a distributed internal tool, installed across the team with versioned releases, and sponsored it to product leadership for use beyond UX. It's a first pass that catches obvious problems before real participants spend time on them, not a replacement for them.

**Research starts with what we already know.** I rewrote how studies get scoped. Before designing a study, a team has to establish what telemetry, customer feedback and existing internal knowledge already answer. Primary research only spends its time on what nothing else can tell us. This is enforced at plan review, the first checkpoint in the [research review model](/ux/work/research-function/), so it isn't a guideline people forget.

### Level three: the product

I directed the research program that set the company's position on AI trust. The central finding was that people trust an agent based on what they see it do, not on what it claims it can do. That changed how agentic controls were designed in the product, and it underpins the [agentic experience framework](/ux/work/agentic-framework/).

## What changed

The digests run every week without anyone assembling them. Duplicated work surfaces early. The prototyping tool moved much of design's work off static screens. The synthetic evaluation tool is installed across the team and has a path to product leadership. Every research plan now starts with a section on what existing data already answers.

<mark class="todo">NEEDS LAUREN: any number you can publish on adoption or time saved. If not, this section stands as written.</mark>

## What I would do differently

<mark class="todo">NEEDS LAUREN: one or two honest sentences.</mark>
