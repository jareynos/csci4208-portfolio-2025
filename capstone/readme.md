# Capstone — Submission Guidelines (Pointer-Only)

Your capstone work lives in a **separate team repository** (your real codebase).  
In this roadmap repo, you will submit **one pointer README per milestone** that links to your team repo, your Project (v2) board, and any demos/evidence for that phase.

CAPSTONE MILESTONES!

capstone/

capstone-01/ # Proposal

capstone-02/ # Planning & Specification

capstone-03/ # Frontend Design

capstone-04/ # Backend Design

capstone-05/ # Data Design

capstone-06/ # Audit – Client Layer

capstone-07/ # Audit – Server Layer

capstone-08/ # Audit – Data Layer

capstone-09/ # Final Demo

Milestones & what to submit (high-level)

1:Project Proposal — team roster, idea, abstract

2:Planning & Specification — user stories; features across frontend, backend, data

3:Frontend Design — mockups, interactions, controllers/views, tooling

4:Backend Design — services, routes/endpoints/HTTP methods, API, tooling & auth

5:Data Design — schema per model; CRUD plan

6:Project Audit – Client — walkthrough of client implementation with tests

7:Project Audit – Server — walkthrough of server implementation with tests

8:Project Audit – Data — walkthrough of data layer with tests

9:Final Project Full Demo — deploy & demo the complete application :contentReference[oaicite:0]{index=0}

---

## Folder layout (in this repo)

```

capstone/
capstone-01/   # Proposal
capstone-02/   # Planning & Specification
capstone-03/   # Frontend Design
capstone-04/   # Backend Design
capstone-05/   # Data Design
capstone-06/   # Audit – Client Layer
capstone-07/   # Audit – Server Layer
capstone-08/   # Audit – Data Layer
capstone-09/   # Final Demo

````

Each folder contains a **pointer** `README.md` (see template below).  
> Do **not** copy code here—keep all implementation, docs, and environment files in your **team repo**.

---

## Milestones & what to submit (high-level)

1. **Project Proposal** — team roster, idea, abstract  
2. **Planning & Specification** — user stories; features across frontend, backend, data  
3. **Frontend Design** — mockups, interactions, controllers/views, tooling  
4. **Backend Design** — services, routes/endpoints/HTTP methods, API, tooling & auth  
5. **Data Design** — schema per model; CRUD plan  
6. **Project Audit – Client** — walkthrough of client implementation with tests  
7. **Project Audit – Server** — walkthrough of server implementation with tests  
8. **Project Audit – Data** — walkthrough of data layer with tests  
9. **Final Project Full Demo** — deploy & demo the complete application  :contentReference[oaicite:0]{index=0}

Use the matching **key folders** above (`capstone-01` … `capstone-09`) and keep your team **Project (v2) board** updated for each phase.

---

## Submitting a milestone

1. In this repo, create `capstone/<capstone-key>/README.md` using the template below.  
2. Ensure your **team repo** and **Project (v2) board** are public (or grant instructor access).  
3. Open the matching **capstone issue** on your board and:
   - Check off acceptance items for the phase.
   - Add links to the **team repo**, **board**, and any **live/demo** assets.
   - Apply labels: `capstone`, `<capstone-key>`, and any track labels that apply (e.g., `Frontend`, `Backend`, `DB`).
   - Use status labels as you progress:  
     `peer-review-requested` → `reviewed` → `ready-for-approval` → `completed` (instructor may add `approved`).

> Keep the **key** exact (e.g., `capstone-03`)—keys are how updates are matched.

---

## Pointer README template (copy into each milestone folder)

> Save as: `capstone/<capstone-key>/README.md`, then replace placeholders.

```md
# <Capstone Milestone Title> — <capstone-key>

**Team repo:** https://github.com/<team>/<repo>  
**Project (v2) board:** <URL> (public or shared with instructors)  
**Live demo / recording (if applicable):** <URL>

## Deliverables for this phase
- <bullet 1 mapped to the rubric>
- <bullet 2>
- <bullet 3>

## Summary (what we produced)
- …

## Evidence / Artifacts
- Links to documents (design/spec/mockups/tests)
- Screenshots/GIFs
- Key PRs (if helpful)

## Notes & Risks
- …

````

---

## Review & grading flow

* Request peer feedback with `peer-review-requested`, then move to `reviewed`.
* When you believe the phase is ready, set `ready-for-approval`.
* After instructor review, you may receive `changes-requested` or the item will be marked `approved`.

---

## Tips

* Keep your **team repo README** professional: overview, features, architecture diagram, run/test/deploy steps, screenshots.
* Link your **board** and **docs** from the team repo README for a complete story.
* Do not commit secrets; use a `.env.example` in the **team repo** and document setup.

If any requirement here conflicts with the phase brief/rubric, the **rubric is the source of truth** for that milestone.

