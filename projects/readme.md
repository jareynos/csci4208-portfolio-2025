# Projects — Submission Guidelines (Pointer-Only)

**This folder does not contain project code.**  
Each project is built in its **own standalone GitHub repository** (your “real” codebase).  
In this repo, you submit a **pointer README** per project that links to your external repo, the live site, and demo instructions.

---

## Before you start
- **Read the project brief end-to-end.** Know the goals, rubric, and required deliverables.
- Create a **public GitHub repo** for your project (self-contained, standard structure, clear README).
- If the brief requires deployment (static phase): plan your host (GitHub Pages / Netlify / Vercel) and get a **live URL**.

---

## What belongs in `projects/<project-key>/` here
Create a subfolder using the roadmap key (e.g., `projects/project-01/`) and add **only**:
- `README.md` — a **pointer** file that includes:
  - **External repo URL** (public)
  - **Live URL** (if required/available)
  - **How to demo** (quick script for the grader)
  - Short **feature checklist** (mapped to the brief)
  - **How to run locally** (link to sections in your external repo’s README)
  - Optional: one **screenshot/GIF** link

> Do **not** copy your project code into this repo. Keep all code, assets, and environment files in your **external project repo**.

---

## Submitting a project
1. Build your project in your **external repo** and (if required) **deploy** it.  
2. In this roadmap repo, create `projects/<project-key>/README.md` using the template below.  
3. Update the root `index.html` to link to your **live URL** (preferred) or pointer page.  
4. Open the corresponding **project issue** on your board and:
   - Check off the acceptance items.
   - Add the **live URL** and **external repo URL**.
   - Apply labels: `project`, `<project-key>`, and (when applicable) `deployed`.  
   - Move status via labels: `peer-review-requested` → `reviewed` → `ready-for-approval` → `completed` (instructor adds `approved`).

---

## Naming & consistency
- Use the **key** exactly (e.g., `project-01`) for the subfolder and labels.
- Keep your external repo **public** with a professional README and clear run instructions.
- Do not commit secrets; if needed, provide a `.env.example` **in the external repo** with setup notes.

---

## Pointer README template
> Save as: `projects/<project-key>/README.md` and replace placeholders.

```md
# <Project Title> — <project-key>

**Live URL:** https://<username>.github.io/<EXT-REPO>/   <!-- or Netlify/Vercel URL -->
**External Repo:** https://github.com/<username>/<EXT-REPO>
**Demo Video/GIF (optional):** <link>

## How to Demo (grader script)
1) Open the live URL above.
2) Navigate to …
3) Show feature X by …
4) (If credentials are needed) Use: user=`demo@site.tld`, pass=`*****`  <!-- avoid personal secrets -->

## Feature Checklist
- [ ] Feature A (maps to brief)
- [ ] Feature B
- [ ] Feature C

## Run Locally
See the external repo’s README:
- **Prereqs / Install:** <link to README section>
- **Start / Dev:** <link to README section>
- **Tests (if any):** <link to README section>

## Screenshot
![screenshot](https://raw.githubusercontent.com/<username>/<EXT-REPO>/main/docs/screenshot.png)

## Notes
- Known issues / next steps / tradeoffs.
````

---

## Tips

* Keep your **external repo README** polished: purpose, features, screenshots, setup, run, and deploy notes.
* If the project has both frontend and backend, link both repos and provide a **single demo path**.
* Use clear, informative commit messages in your external repo.

If anything in the project brief conflicts with this page, **follow the brief**—it’s the source of truth for the assignment.

