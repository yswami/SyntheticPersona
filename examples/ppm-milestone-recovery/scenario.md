# Hypothetical PPM Milestone-Recovery Scenario

## Status

This scenario is entirely fictional and designed for public demonstration. It does not describe an Oracle product, customer, roadmap, or research participant.

## How to run it

1. Start a new model session with the [enterprise PPM reviewer prompt](../../prompts/enterprise-ppm-reviewer.md).
2. Reveal only Step 1.
3. Capture the response before revealing the next step.
4. Repeat through Step 4.
5. Request the final assessment defined in the prompt.
6. Convert objections into questions for human research.

## Step 1: Portfolio alert

```text
Project: Project Atlas
Milestone: Integration Testing Complete
Current health: Green
Forecast: 21 days late
Confidence: 78%
Available action: View recovery plan
```

## Step 2: Delay explanation

```text
Vendor Interface Build contributes 12 forecast days.
Data Migration Rehearsal contributes 7 forecast days.
Two shared architects are allocated to other work during the recovery window.

Data freshness:
- Schedule snapshot: 2 days old
- Agile delivery data: 6 hours old
- ERP labor actuals: 7 days old
- Vendor spreadsheet: 10 days old

Available action: Generate recovery plan
```

## Step 3: Recommended scenario

```text
Reassign two shared architects from Project Beacon to Project Atlas for four weeks.
Pull the vendor testing cycle forward by one week.
Add a weekend integration-testing cycle.

Estimated schedule recovery: 15 days
Estimated incremental cost: 85,000 fictional currency units

Available action: Apply recovery plan
```

## Step 4: Action preview

```text
One action will:
- Update the approved baseline dates
- Record the incremental cost
- Change project health from Green to Amber
- Notify the executive sponsor
- Reassign the two architects

Available action: Confirm and apply
```

## Research handoff

After the simulation, ask:

1. Which objections depend on assumed behavior?
2. Which objections can be translated into neutral research questions?
3. What evidence would confirm or disconfirm each question?
4. What did the simulation fail to represent?
