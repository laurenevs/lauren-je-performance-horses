---
title: Instrumenting a design and research organization
order: 4
emoji: 📏
theme: Measurement
summary: Seven defined measures that refresh monthly from source systems and publish themselves, with a data-quality gate that refuses to publish a soft number.
horse: If the data is bad, the scorecard stays in the barn.
stats:
  - { emoji: ⚙️, value: "2.1 → 3.0", label: "Projects per designer, a 43% year over year increase" }
  - { emoji: ⏱️, value: "42 days", label: "Median time in design execution" }
  - { emoji: 📊, value: "7", label: "Defined measures, refreshed monthly from source systems" }
---

## Before

Design and research tracked their work in spreadsheets that someone updated when they remembered. Each area counted differently. When leadership asked whether design was getting faster, the honest answer was that we didn't know, and the usual answer was a story.

That is the normal state of most design organizations, and it has a cost. Without numbers, every conversation about staffing, scope or process runs on anecdote, and design loses those conversations to functions that bring a dashboard.

## What I did

I built a scorecard from scratch with seven defined measures. Each one has a written definition, a source system and a reason it exists. The scorecard pulls from source systems every month, assembles itself and publishes without anyone building slides.

### The design rows came first

The two design measures, throughput and time in design execution, were the hardest to define, so they got the most attention. Research is easier to count, because a study has a plan, a start and a readout. Design work doesn't arrive in units that clean. Before either number could exist, the definition had to settle questions like what counts as a project, when execution starts and when it ends.

<mark class="todo">NEEDS LAUREN: how you settled those definitions, in a sentence or two, if it's safe to describe generically.</mark>

**Throughput** is projects completed per designer. **Time in design execution** is reported as a median rather than a mean. Project durations have a long right tail, and a mean would let two stuck projects tell the story for everyone else.

The research rows, including studies delivered and the share that are strategic, came from the intake and instruments described in [Building a research function](/ux/work/research-function/).

<mark class="todo">NEEDS LAUREN: list the remaining measures by generic name if you're comfortable, or confirm I should leave them unlisted.</mark>

### The gate

The part I'm proudest of is the **data-quality gate**. Before the scorecard publishes, it checks its own inputs. If the source data fails those checks, the scorecard doesn't publish a softer number with a footnote. It stops, and the data gets fixed first. A metric that is sometimes quietly wrong is worse than no metric, because people stop trusting all the others.

<figure>
  <img src="/ux/figures/scorecard-pipeline.svg" alt="Pipeline diagram. Source systems feed a monthly refresh, which computes seven measures. A data-quality gate checks the inputs. If the checks pass, the scorecard publishes automatically. If they fail, publication is blocked and the data goes back to be fixed." width="960" height="260" loading="lazy" />
  <figcaption>The monthly pipeline. The gate is the point: a blocked month is a feature, not an outage.</figcaption>
</figure>

## What building it surfaced

Writing a definition is where you find out what you don't know. Several measures we assumed we had turned out to depend on fields nobody filled in consistently, or on status changes that meant different things to different teams. Much of the first phase was fixing the workflow so the data could exist at all. That was the most useful finding of the project, and it's true of most design organizations that think they are measuring themselves.

## What changed

Design throughput on the teams I lead rose 43% year over year, from 2.1 to 3.0 projects per designer. Median time in design execution is 42 days. Both numbers come from the scorecard, not from a one-off analysis, so they can be checked again next month.

The scorecard also outgrew design and research. It is now one of the strategic pillars of the company's broader product and design scorecard.

## The metric that went the wrong way

<mark class="todo">NEEDS LAUREN: which measure moved in the wrong direction, what you learned from it, and what you did about it. This section is what makes the piece credible, so I won't guess.</mark>

## What I would do differently

<mark class="todo">NEEDS LAUREN: one or two honest sentences.</mark>
