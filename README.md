# Synthetic Persona Pre-flight Lab

An open, practical toolkit for using constraint-based synthetic personas to stress-test enterprise product hypotheses before conducting research with real customers.

> **Project status:** Experimental and educational. Outputs are hypotheses, not customer evidence or product validation.

## Start here

1. Copy the [enterprise PPM reviewer prompt](prompts/enterprise-ppm-reviewer.md).
2. Walk through the [hypothetical milestone-recovery scenario](examples/ppm-milestone-recovery/scenario.md), revealing one step at a time.
3. Compare your run with the [illustrative simulated output](examples/ppm-milestone-recovery/simulated-output.md).
4. Apply the three-question trust test:
   - Can the user trace the evidence?
   - Can the user see the wider impact?
   - Can the user control what happens next?
5. Before calling a reviewer an evidence-backed archetype, use the [evidence repository template](templates/evidence-repository-template.csv) and [archetype card](templates/archetype-card.md).

## What this project is

- A transparent pre-flight method for challenging a product hypothesis.
- A set of reusable prompts, scenarios, templates, and guardrails.
- A way to generate sharper questions for subsequent human research.
- A build-in-public companion to a five-post product-management series.

## What this project is not

- A replacement for customer interviews, observation, usability testing, or outcome measurement.
- A claim that a language model predicts real customer behavior.
- A hosted research platform or production decision system.
- A reason to upload confidential, personal, regulated, or customer-identifying data to an unapproved AI service.

## The method

There are two deliberately different maturity levels:

| Level | Input | Honest label | Appropriate output |
| --- | --- | --- | --- |
| 1 | Assumed constraints and a role | Hypothesis reviewer | Candidate objections, failure modes, and research questions |
| 2 | Recurring behavioral patterns traceable to real research | Evidence-backed archetype | Research hypotheses grounded in an explicit evidence base |

The repository starts with Level 1 and provides the structure needed to progress toward Level 2. See [the full method](docs/METHOD.md).

## Repository map

```text
.
├── docs/
│   ├── GUARDRAILS.md
│   └── METHOD.md
├── examples/
│   └── ppm-milestone-recovery/
│       ├── scenario.md
│       └── simulated-output.md
├── prompts/
│   └── enterprise-ppm-reviewer.md
├── templates/
│   ├── archetype-card.md
│   └── evidence-repository-template.csv
├── LICENSE
├── README.md
└── ROADMAP.md
```

## Responsible-use baseline

- Label generated responses as simulated.
- Label unsupported persona traits as assumptions.
- Never report generated text as a quote from a real participant.
- Keep an evidence reference for every behavior described as research-grounded.
- Treat results as inputs to research planning, not as approval to ship.
- Review [the guardrails](docs/GUARDRAILS.md) before using the toolkit.

## Public example

The included PPM example is entirely fictional. Project names, values, workflow steps, and simulated reactions do not describe an Oracle product, customer, roadmap, or research participant.

## Roadmap

Day 5 will add a privacy-conscious GitHub Pages experience for configuring a reviewer, generating a prompt, and exploring the example without storing user inputs or API keys. See [ROADMAP.md](ROADMAP.md).

## Independence

This is an independent personal project. It is not affiliated with, endorsed by, or representative of any employer or commercial synthetic-research platform.

## License

MIT. See [LICENSE](LICENSE).
