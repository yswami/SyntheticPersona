# Method: From Assumptions to Evidence

## The core distinction

A role description plus a prompt creates a **hypothesis reviewer**. It can be useful, but its reactions reflect model priors and author assumptions.

An **evidence-backed archetype** requires recurring behavioral patterns that can be traced to real research. The archetype should emerge from evidence rather than being invented first and justified later.

## Evidence pipeline

```text
Research with real people
        ↓
Evidence register
        ↓
Behavioral dimensions and variables
        ↓
Participant positions and supporting traits
        ↓
Recurring cross-participant patterns
        ↓
Synthetic archetype
        ↓
Simulated pre-flight session
        ↓
Candidate risks and research questions
        ↓
Validation with real people
```

## Vocabulary

| Term | Meaning | Hypothetical PPM example |
| --- | --- | --- |
| Role | A person's organizational function | Enterprise project manager |
| Behavioral dimension | A broad area of behavior | Automation governance |
| Behavioral variable | A continuum within the dimension | Autonomous action ↔ recommendation only ↔ mandatory approval |
| Participant position | Where one participant appears on that continuum | Requires review before baseline changes |
| Supporting trait | An observed behavior supporting that position | Requests a preview and override before accepting a change |
| Evidence reference | The source of the observation | Interview or observation record E-014 |
| Archetype | A recurring pattern across multiple dimensions and participants | A controlled-automation lens, if supported by a defensible cluster |
| OCEAN profile | Optional continuous personality-variation scaffold | Illustrative scores used to compare response tendencies, not to infer authority or needs |

The examples above explain the structure. They are not research findings.

## Where OCEAN fits

OCEAN is optional and separate from the evidence pipeline. It can introduce controlled variation in communication and broad response tendencies, but it does not supply domain knowledge, behavioral evidence, decision authority, or product needs.

An assumed OCEAN profile remains an assumption. An evidence-backed personality profile requires an appropriate measurement process and still does not replace task-specific behavioral research. See the [OCEAN evaluation](OCEAN.md).

## Step 1: Frame the research question

Write the uncertainty to investigate before defining a persona.

Example:

> What evidence and controls do enterprise project managers need before acting on an AI-generated milestone-recovery recommendation?

Avoid questions that assume the answer, such as “Why do project managers require manual approval?”

## Step 2: Create an evidence register

Record observations, statements, decisions, context, and source references. Use the [CSV template](../templates/evidence-repository-template.csv).

Minimum quality rules:

- Separate direct observation from analyst interpretation.
- Preserve the context in which a behavior occurred.
- Record contradictory and negative evidence.
- Do not turn one memorable statement into a stable trait.
- Do not infer prevalence from a qualitative sample.

## Step 3: Define dimensions and variables

Group related evidence into broad behavioral dimensions. For each dimension, define a continuum that can represent meaningful variation.

Good variables describe behavior, not value judgments. Prefer “system-directed ↔ user-directed” over “unsophisticated ↔ expert.”

## Step 4: Position participants

For every position, include:

- Evidence IDs
- Context and task
- Supporting and contradictory observations
- Analyst confidence
- Known gaps

When evidence is missing, use `unknown`; do not fill the gap with a plausible model-generated detail.

## Step 5: Identify recurring patterns

Look for the smallest set of behavioral lenses that explains meaningful variation across participants. An archetype should be supported by multiple evidence points and should remain internally coherent across the dimensions relevant to the research question.

Participants do not need to belong permanently to one archetype. A person may use different behavioral lenses for scheduling, financial impact, governance, or executive communication.

## Step 6: Build the archetype card

Use the [archetype card template](../templates/archetype-card.md). Include evidence strength, boundaries, contradictions, unknowns, and the circumstances under which behavior may change.

## Step 7: Run a pre-flight session

- Use one archetype per session.
- Reveal one screen or workflow step at a time.
- Require the model to distinguish observation, inference, and assumption.
- Ask for immediate reaction, interpretation, intended action, confusion, risks, and required evidence.
- Do not expose later steps or expected findings in advance.
- Save prompt, model, date, parameters, and output for reproducibility.

## Step 8: Translate output into research questions

Do not count a simulated objection as a finding. Convert it into a question for real research.

Example:

| Simulated objection | Research question |
| --- | --- |
| “I need to see the data behind this forecast.” | Which sources, freshness indicators, and explanations are necessary before a forecast is credible? |
| “Do not move resources without showing the other project.” | How do project managers evaluate portfolio trade-offs when considering a recovery action? |
| “I cannot approve all these changes together.” | Which actions have different decision owners or approval paths? |

## Step 9: Compare with human research

Track:

- Candidate issues confirmed by real participants
- Candidate issues not confirmed
- Important human findings the simulation missed
- New questions the simulation helped expose
- Time saved or added to the research process
- Stability across repeated runs

The goal is not to maximize agreement. The useful learning often lies in the differences and omissions.
