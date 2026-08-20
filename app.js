(function () {
  "use strict";

  var form = document.getElementById("persona-form");
  var promptOutput = document.getElementById("prompt-output");
  var evidenceStatus = document.getElementById("evidence-status");
  var evidenceRefs = document.getElementById("evidence-refs");
  var evidenceWrapper = document.getElementById("evidence-wrapper");
  var statusExplainer = document.getElementById("status-explainer");
  var evidenceBadge = document.getElementById("evidence-badge");
  var includeOcean = document.getElementById("include-ocean");
  var oceanControls = document.getElementById("ocean-controls");
  var actionStatus = document.getElementById("action-status");

  var traitIds = [
    "openness",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism"
  ];

  var defaults = {
    role: "Enterprise project manager",
    product: "AI milestone-recovery assistant",
    context: "A portfolio of capital projects involving internal teams and external delivery partners. Status is reviewed weekly, with monthly steering committee reporting.",
    scenario: "A project milestone may be delayed by 21 days. The prediction confidence is 78%, and the assistant recommends reallocating shared resources.",
    evidenceStatus: "assumed",
    evidenceRefs: "",
    posture: "Low tolerance for additional administrative work. Cautious about consequential automation.",
    evidenceNeeds: "Require traceable source data, the affected dependency path, data freshness, assumptions, and a confidence level.",
    authority: "Do not change an approved baseline, move budget, reallocate resources, or update executive project health without review and the appropriate approval.",
    risks: "Local optimization that delays another project, stale data, hidden cost impact, and actions that cross approval boundaries.",
    includeOcean: false,
    openness: 50,
    conscientiousness: 50,
    extraversion: 50,
    agreeableness: 50,
    neuroticism: 50
  };

  var ppmPreset = {
    role: "Enterprise project manager",
    product: "AI milestone-recovery assistant",
    context: "A portfolio of 25 capital projects involving internal teams and external delivery partners. Project information comes from an ERP system, a scheduling application, an agile delivery tool, and spreadsheets. Status is reported weekly, with a monthly steering committee review.",
    scenario: "Project Atlas may miss a key milestone by 21 days. Confidence: 78%. The assistant recommends reallocating shared resources and accelerating vendor testing.",
    evidenceStatus: "assumed",
    evidenceRefs: "",
    posture: "Low tolerance for additional administrative work. Cautious about consequential automation and alert to portfolio-wide trade-offs.",
    evidenceNeeds: "Require traceable source data, the affected dependency path, data freshness, assumptions, and a confidence level before trusting a recommendation.",
    authority: "Do not change an approved baseline, move budget, reallocate resources, commit cost, or update executive project health without project manager review and the appropriate approval.",
    risks: "Recovering one project by quietly delaying another, stale or incomplete data, hidden cost and vendor impacts, and recommendations that cross decision-authority boundaries.",
    includeOcean: true,
    openness: 62,
    conscientiousness: 84,
    extraversion: 42,
    agreeableness: 52,
    neuroticism: 64
  };

  function value(id) {
    var element = document.getElementById(id);
    return element ? element.value.trim() : "";
  }

  function orPlaceholder(text, placeholder) {
    return text || "[" + placeholder + "]";
  }

  function checkedRules() {
    return Array.prototype.slice.call(form.querySelectorAll('input[name="rules"]:checked'))
      .map(function (input) {
        return "- " + input.value;
      });
  }

  function traitBand(score, low, middle, high) {
    if (score < 35) {
      return low;
    }
    if (score > 65) {
      return high;
    }
    return middle;
  }

  function oceanLines() {
    if (!includeOcean.checked) {
      return [
        "PERSONALITY VARIATION",
        "No OCEAN profile is included. Do not invent one."
      ];
    }

    var openness = Number(document.getElementById("openness").value);
    var conscientiousness = Number(document.getElementById("conscientiousness").value);
    var extraversion = Number(document.getElementById("extraversion").value);
    var agreeableness = Number(document.getElementById("agreeableness").value);
    var neuroticism = Number(document.getElementById("neuroticism").value);

    return [
      "OPTIONAL OCEAN VARIATION — ILLUSTRATIVE, NOT RESEARCH EVIDENCE",
      "- Openness " + openness + "/100: " + traitBand(openness, "prefer familiar approaches", "balance familiar and novel approaches", "readily explore alternatives"),
      "- Conscientiousness " + conscientiousness + "/100: " + traitBand(conscientiousness, "use a flexible and minimally structured approach", "use moderate structure", "seek completeness, order, and follow-through"),
      "- Extraversion " + extraversion + "/100: " + traitBand(extraversion, "respond in a reserved and internally reflective way", "use a balanced communication style", "think aloud readily and engage assertively"),
      "- Agreeableness " + agreeableness + "/100: " + traitBand(agreeableness, "challenge claims directly", "balance cooperation with challenge", "seek cooperative framing and common ground"),
      "- Negative emotionality " + neuroticism + "/100: " + traitBand(neuroticism, "remain emotionally steady under uncertainty", "show moderate sensitivity to uncertainty", "notice threats and uncertainty early"),
      "",
      "Treat these scores only as broad response tendencies. They do not determine domain knowledge, product needs, evidence thresholds, decision rights, or real-world behavior. Do not infer any missing characteristic from them."
    ];
  }

  function evidenceLines() {
    var status = evidenceStatus.value;
    var refs = evidenceRefs.value.trim();

    if (status === "evidence" && refs) {
      return [
        "EVIDENCE STATUS: RESEARCH-GROUNDED CLAIM",
        "The behavioral constraints below are reported as derived from these real evidence references:",
        refs,
        "Use no behavior beyond what those references and this prompt support. Preserve contradictions and unknowns."
      ];
    }

    if (status === "evidence" && !refs) {
      return [
        "EVIDENCE STATUS: INCOMPLETE",
        "Evidence-backed was selected, but no evidence references were supplied.",
        "Treat this reviewer as assumption-based until reviewable references are added."
      ];
    }

    return [
      "EVIDENCE STATUS: ASSUMPTION-BASED",
      "The role and behavioral constraints below were authored for hypothesis testing.",
      "They are not customer evidence and must not be described as research findings."
    ];
  }

  function buildPrompt() {
    var rules = checkedRules();
    var sections = [
      "SYNTHETIC PERSONA PRE-FLIGHT PROMPT",
      "",
      evidenceLines().join("\n"),
      "",
      "ROLE",
      "Act as " + orPlaceholder(value("role"), "reviewer role") + " reviewing " + orPlaceholder(value("product"), "product or feature") + ".",
      "",
      "OPERATING CONTEXT",
      orPlaceholder(value("context"), "operating context"),
      "",
      "BEHAVIORAL CONSTRAINTS",
      "- Operating posture: " + orPlaceholder(value("posture"), "not provided"),
      "- Evidence required before trust: " + orPlaceholder(value("evidence-needs"), "not provided"),
      "- Decision and authority boundaries: " + orPlaceholder(value("authority"), "not provided"),
      "- Risks to watch: " + orPlaceholder(value("risks"), "not provided"),
      "",
      oceanLines().join("\n"),
      "",
      "SIMULATION RULES",
      rules.length ? rules.join("\n") : "- No additional session rules were selected.",
      "- Be specific, concrete, and realistic.",
      "- Do not claim that your generated reactions represent real customers.",
      "",
      "FIRST SCREEN OR WORKFLOW STEP",
      orPlaceholder(value("scenario"), "reveal the first screen or step here"),
      "",
      "FOR THIS STEP, RESPOND WITH",
      "1. Immediate reaction",
      "2. What you think this screen or step is for",
      "3. What you would do next — and why",
      "4. What is confusing, missing, or assumed",
      "5. What could go wrong",
      "6. What evidence would increase your confidence",
      "",
      "WHEN THE SESSION ENDS, PROVIDE",
      "- The strongest objections",
      "- Three realistic failure scenarios",
      "- The minimum safeguards needed for a pilot",
      "- A verdict: reject, conditionally test, or proceed",
      "- Five questions that must be validated with real people",
      "",
      "REPORTING BOUNDARY",
      "Generated responses are simulated. Convert them into candidate risks and research questions. Never present them as participant quotations, prevalence estimates, customer validation, or evidence that a product decision is correct."
    ];

    promptOutput.textContent = sections.join("\n");
    updateEvidenceUI();
  }

  function updateEvidenceUI() {
    var isEvidence = evidenceStatus.value === "evidence";
    var hasReferences = evidenceRefs.value.trim().length > 0;

    evidenceRefs.disabled = !isEvidence;
    evidenceWrapper.classList.toggle("enabled", isEvidence);

    statusExplainer.classList.toggle("evidence", isEvidence && hasReferences);
    statusExplainer.innerHTML = "";

    var dot = document.createElement("span");
    dot.className = "status-dot " + (isEvidence && hasReferences ? "evidence" : "assumed");
    dot.setAttribute("aria-hidden", "true");

    var copy = document.createElement("div");
    var heading = document.createElement("strong");
    var description = document.createElement("p");

    if (isEvidence && hasReferences) {
      heading.textContent = "Evidence-referenced reviewer";
      description.textContent = "Behavioral claims still require review for quality, recurrence, context, and contradictions.";
      evidenceBadge.textContent = "Evidence referenced";
      evidenceBadge.className = "evidence-badge evidence";
    } else if (isEvidence) {
      heading.textContent = "Evidence references required";
      description.textContent = "Until references are supplied, this remains a hypothesis reviewer.";
      evidenceBadge.textContent = "Evidence incomplete";
      evidenceBadge.className = "evidence-badge assumed";
    } else {
      heading.textContent = "Hypothesis reviewer";
      description.textContent = "Useful for candidate objections and research questions—not customer evidence.";
      evidenceBadge.textContent = "Assumption-based";
      evidenceBadge.className = "evidence-badge assumed";
    }

    copy.appendChild(heading);
    copy.appendChild(description);
    statusExplainer.appendChild(dot);
    statusExplainer.appendChild(copy);
  }

  function updateOceanUI() {
    var enabled = includeOcean.checked;
    oceanControls.classList.toggle("enabled", enabled);
    oceanControls.setAttribute("aria-hidden", String(!enabled));
    traitIds.forEach(function (id) {
      document.getElementById(id).disabled = !enabled;
    });
  }

  function updateSliderOutput(input) {
    var output = document.getElementById(input.id + "-value");
    if (output) {
      output.value = input.value;
      output.textContent = input.value;
    }
  }

  function applyValues(values) {
    Object.keys(values).forEach(function (key) {
      var element = document.getElementById(key.replace(/[A-Z]/g, function (letter) {
        return "-" + letter.toLowerCase();
      }));

      if (!element) {
        return;
      }

      if (element.type === "checkbox") {
        element.checked = Boolean(values[key]);
      } else {
        element.value = values[key];
      }
    });

    traitIds.forEach(function (id) {
      updateSliderOutput(document.getElementById(id));
    });
    updateOceanUI();
    updateEvidenceUI();
    buildPrompt();
  }

  function resetSessionRules() {
    Array.prototype.slice.call(form.querySelectorAll('input[name="rules"]')).forEach(function (input) {
      input.checked = true;
    });
  }

  function setActionStatus(message) {
    actionStatus.textContent = message;
    window.clearTimeout(setActionStatus.timeoutId);
    setActionStatus.timeoutId = window.setTimeout(function () {
      actionStatus.textContent = "";
    }, 3200);
  }

  function copyPrompt() {
    var text = promptOutput.textContent;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () {
        setActionStatus("Prompt copied to the clipboard.");
      }).catch(function () {
        fallbackCopy(text);
      });
      return;
    }

    fallbackCopy(text);
  }

  function fallbackCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      setActionStatus("Prompt copied to the clipboard.");
    } catch (error) {
      setActionStatus("Copy was blocked. Select the prompt and copy it manually.");
    }

    document.body.removeChild(textarea);
  }

  function downloadPrompt() {
    var role = value("role").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    var filename = (role || "synthetic-reviewer") + "-prompt.txt";
    var blob = new Blob([promptOutput.textContent], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");

    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setActionStatus("Prompt downloaded as " + filename + ".");
  }

  function loadExample(scroll) {
    resetSessionRules();
    applyValues(ppmPreset);
    setActionStatus("Fictional PPM example loaded. Its OCEAN profile is illustrative.");
    if (scroll) {
      document.getElementById("lab").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  form.addEventListener("input", function (event) {
    if (event.target.type === "range") {
      updateSliderOutput(event.target);
    }
    if (event.target === includeOcean) {
      updateOceanUI();
    }
    buildPrompt();
  });

  form.addEventListener("change", function () {
    buildPrompt();
  });

  document.getElementById("copy-prompt").addEventListener("click", copyPrompt);
  document.getElementById("download-prompt").addEventListener("click", downloadPrompt);
  document.getElementById("reset-form").addEventListener("click", function () {
    resetSessionRules();
    applyValues(defaults);
    setActionStatus("Form reset to the assumption-based starter.");
  });
  document.getElementById("load-example").addEventListener("click", function () {
    loadExample(false);
  });
  document.getElementById("load-example-hero").addEventListener("click", function () {
    loadExample(true);
  });

  updateOceanUI();
  traitIds.forEach(function (id) {
    updateSliderOutput(document.getElementById(id));
  });
  buildPrompt();
}());
