# Portfolio (IT Support / Sysadmin)

A minimal, professional portfolio skeleton for an entry-level IT support / sysadmin / cloud candidate.

This repository is your personal portfolio site. It’s built with React, TypeScript, and Vite, and this README is a step-by-step guide to:

* Running the site locally
* Updating content (projects, skills, posts, profile)
* Using Git & GitHub for changes and deployments
* Knowing which files are safe to edit and which should usually be left alone

---

## 1. Before You Start: Tools & Setup

### 1.1 Accounts & tools you need

You’ll want these in place:

* A **GitHub account** (where this repo lives and where the site is deployed)
* **Git** installed on your machine

  * Check:

    ```bash
    git --version
    ```
* **Node.js LTS 20.x**

  * Download from the Node.js website (LTS version)
  * Check:

    ```bash
    node -v
    # Should show something like v20.x.x
    ```
* A code editor (IDE) – recommended:

  * **Visual Studio Code (VS Code)**

    * Built-in terminal
    * Git integration
    * Great support for TypeScript/JavaScript

You can use another IDE (WebStorm, etc.) if you already know it, but all instructions below assume VS Code + terminal.

---

### 1.2 Cloning the repository (first time)

Do this **once per machine** when you’re setting up:

```bash
# 0. Log in (if you haven't)
gh auth
 
# 1. Clone the repo from GitHub
git clone https://github.com/matthewcue/portfolio.git

# 2. Go into the project folder
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`) in your browser. You should see your portfolio homepage.

---

## 2. Everyday Git & GitHub Workflow

Think of it like this:

* This folder on your computer = your **working copy**.
* Git = keeps track of changes.
* GitHub = the **remote copy**; pushing there triggers deployment.

### 2.1 Minimum Git commands you’ll actually use

You can get surprisingly far with just a few commands:

```bash
git status           # See what changed
git pull origin main # Get latest changes from GitHub

git add .            # Stage all changes (for now, this is fine)
git commit -m "short message about what you changed"
git push origin main # Send changes to GitHub
```

Later, you can learn more granular staging (instead of `git add .`), but this is enough to start.

---

### 2.2 Recommended “normal day” flow

When you want to update content:

1. **Pull latest changes**

   ```bash
   git pull origin main
   ```

2. **Start the dev server**

   ```bash
   npm run dev
   ```

3. **Edit the content files** (`src/content/*.ts`) or other “green zone” files.

4. **Check the site** at `http://localhost:5173` in your browser.

5. (Optional but recommended) **Run a production build** to catch mistakes:

   ```bash
   npm run build
   ```

6. **Commit and push**

   ```bash
   git status
   git add .
   git commit -m "update projects / skills / posts"  # pick a meaningful message
   git push origin main
   ```

Once your changes are pushed to `main`, GitHub Actions will build and deploy the live site automatically.

---

### 2.3 Branches (later)

Right now it’s okay if you work directly on `main` for your personal portfolio.

Later, if you want a safer flow, you can:

* Create a new branch for risky changes
* Make a pull request (PR)
* Merge when everything looks good

That’s optional for now.

---

## 3. How the App Is Structured (Map of the Repo)

You don’t need to understand everything to use this site, but a mental map helps.

### 3.1 Important folders & files

* `src/content/` – **All the main content** (safe and intended for you to edit):

  * `src/content/profile.ts` – your name, title, links, and basic profile info
  * `src/content/projects.ts` – projects that appear on the Work page
  * `src/content/labEntries.ts` – smaller lab/experiment entries
  * `src/content/skills.ts` – skills, strengths, roadmap
  * `src/content/posts.ts` – blog / writing entries

* `src/pages/` – each top-level page:

  * `HomePage.tsx` – landing page
  * `WorkPage.tsx` – projects
  * `SkillsPage.tsx` – skills matrix & roadmap
  * `WritingPage.tsx` – blog index
  * `PostDetailPage.tsx` – individual post
  * `AboutPage.tsx` – about you
  * `ProjectDetailPage.tsx` / `LabDetailPage.tsx` – detail views

* `src/layout/SiteLayout.tsx`

  * Shared layout: navbar at the top, main content area, footer at the bottom.

* `src/components/`

  * Reusable components (Navbar, Footer, cards, custom cursor, etc.).

* `src/theme/`

  * `ThemeProvider.tsx` – light/dark mode logic
  * `TypographyProvider.tsx` – font choices (and randomization variant)

* `src/styles/globals.css`

  * Global styles and layout CSS.

* `.github/workflows/deploy.yml`

  * GitHub Actions workflow that builds and deploys the site.

* `scripts/copy-404.js`

  * Small script that copies `dist/index.html` to `dist/404.html` during build so React Router deep links work on GitHub Pages.

---

### 3.2 “Green / Yellow / Red” zones (what’s safe to edit)

**Green (safe to edit anytime)**

These are designed to be edited:

* `src/content/profile.ts`
* `src/content/projects.ts`
* `src/content/labEntries.ts`
* `src/content/skills.ts`
* `src/content/posts.ts`
* Text in `src/pages/*` **when it is clearly just content copy** (headings, paragraphs, descriptions).

Rule of thumb: If it’s just text between quotes (strings) and you’re not changing the *shape* of objects or JSX, you’re safe.

---

**Yellow (edit carefully)**

Touch these when you’re more comfortable:

* Minor text changes inside page components or components (`src/pages/*.tsx`, `src/components/*.tsx`) if you’re not restructuring the JSX.
* Adding image files and updating image paths where they are already expected.

If you change something in a Yellow zone and the page crashes, undo or ask for help with the error message.

---

**Red (avoid unless you’re debugging with help)**

These are core wiring and infrastructure:

* `src/App.tsx` – router setup (`BrowserRouter`, routes, animations).
* `src/layout/SiteLayout.tsx` – overall shell (navbar + main + footer).
* `src/components/Navbar.tsx`, `CustomCursor`, `ThemeToggle`, `DotGridOverlay`, etc.
* `src/theme/ThemeProvider.tsx`, `TypographyProvider.tsx`.
* `src/styles/globals.css` (especially layout and global structure).
* `vite.config.*`, `tsconfig.*`, `package.json`, `package-lock.json`.
* `.github/workflows/*`.
* `scripts/copy-404.js`.

Changing these can make the entire app fail to build or load. If you ever need to change them:

1. Make a separate branch.
2. Test with `npm run dev` and `npm run build`.
3. If something breaks, copy the error into ChatGPT for help.

---

## 4. Running, Building & Deploying

These are the core commands from the original README, with extra explanation.

### 4.1 Quick start (local dev)

From the project folder:

```bash
npm install
npm run dev
```

The dev server will print a local URL (usually `http://localhost:5173`). Open that in your browser to preview changes as you edit.

---

### 4.2 Build & preview (production build locally)

```bash
npm run build
npm run preview
```

* `npm run build` creates an optimized, production build in `dist/`.
* `npm run preview` serves that build locally so you can test the “real” version before deploying.

If `npm run build` fails, **check the error message**—it often points to a typo or missing field in one of your content files.

---

### 4.3 Deployment (GitHub Pages + Actions)

Deployment is automated:

1. You push to `main`:

   ```bash
   git push origin main
   ```

2. GitHub Actions runs the workflow in `.github/workflows/deploy.yml`.

3. The workflow:

   * Installs dependencies
   * Runs `npm run build`
   * Uses `scripts/copy-404.js` to copy `dist/index.html` → `dist/404.html` so deep links work with React Router’s `BrowserRouter`
   * Uploads `dist/` to GitHub Pages

4. When the workflow is green (success), your live site updates.

If something goes wrong:

* Go to the **Actions** tab in GitHub.
* Click the failed run.
* Look for the “Build” step logs.
* Copy the error and ask for help if needed.

You almost never need to edit the workflow YAML file itself.

---

## 5. Editing Content: Profile, Projects, Lab, Skills, Writing

All main content is stored as TypeScript objects in `src/content/`. Each file has comments and example entries.

### 5.1 Profile: `src/content/profile.ts`

This controls:

* Your **name** and **headline/role**
* Location
* Contact email
* Social links (GitHub, LinkedIn, etc.)
* Short/about info used around the site

**How to update:**

1. Open `src/content/profile.ts` in VS Code.
2. Look for the exported `profile` object (for example `export const profile = { ... }`).
3. Update values (strings like `"Your Name"`, `"your@email.com"`, etc.).
4. **Do not** rename keys; just change their values.
5. Save and check the dev server.

---

### 5.2 Projects (Work page): `src/content/projects.ts`

This file powers the **Work** section and project detail pages.

Each project entry typically includes (exact keys may vary):

* `slug` – URL-friendly ID, e.g. `"home-lab-kubernetes"`.
* `title` – human-readable title.
* `summary` or `description` – short blurb for the card.
* `tech` / `tags` – list of technologies or tools used.
* `role` / `type` – e.g. “Personal lab”, “Client project”.
* `status` – e.g. “In progress”, “Completed”.
* Possibly: links, highlights, bullets, or meta info.

**How to add a project:**

1. Open `src/content/projects.ts`.
2. Find an existing project object that looks close to what you want.
3. Duplicate it (copy/paste).
4. Change:

   * `slug` – must be unique; only lowercase letters, numbers, and hyphens (no spaces).
   * `title` – describe the project clearly.
   * Text fields – summarize what you built and why it matters.
   * Tech/tags – list the main tools (e.g. `["Proxmox", "Windows Server", "Active Directory"]`).
5. Keep the same **shape** (don’t remove required keys).
6. Save and check:

   * The project appears on the Work page.
   * If detail pages are wired, clicking it opens a detail view.

**Existing seed projects**

The repo likely includes sample projects that:

* Show a homelab or test environment
* Demonstrate helpdesk workflows
* Represent basic cloud or monitoring setups

Over time, you should replace these example entries with **your real projects**, keeping their structure but changing the content.

---

### 5.3 Lab entries: `src/content/labEntries.ts`

Lab entries are for **smaller experiments** and “learning labs,” such as:

* “Set up a simple Docker host on my homelab”
* “Tested Uptime Kuma for monitoring”
* “Practiced PowerShell remoting”

Each entry is typically similar to a project but smaller in scope.

**How to add a lab entry:**

1. Open `src/content/labEntries.ts`.
2. Duplicate an existing entry.
3. Change the title, description, and tags to match what you did.
4. Keep the same object shape.
5. Save and verify the Lab/secondary section where they appear.

---

### 5.4 Skills & roadmap: `src/content/skills.ts`

This file feeds the **Skills** page: skills matrix, strengths, roadmap, etc.

Typical content includes:

* Skill categories or areas (e.g. “Networking”, “Scripting & Automation”, “Cloud”)
* Individual skills with levels (e.g. `beginner` / `intermediate` / `experienced`)
* Tags/keywords
* Roadmap items – things you plan to learn or build soon

**How to update skills:**

1. Open `src/content/skills.ts`.
2. Find the section listing skills (there may be arrays like `coreSkills`, `skillsByArea`, `roadmap`, etc.).
3. To **add** a skill:

   * Duplicate an existing skill entry.
   * Change `name`, `level`, tags, and notes.
4. To **update** your level:

   * Change something like `level: "beginner"` to `"intermediate"` when you’ve actually grown that skill.
5. To **update the roadmap**:

   * Adjust roadmap items to reflect the next 3–6 months of learning goals.

Try not to:

* Delete entire arrays
* Rename keys that the UI depends on

If something breaks, undo or compare to the last working version.

---

### 5.5 Writing (blog / notes): `src/content/posts.ts`

This file powers the **Writing** section and the detail pages for posts.

Each post usually has:

* `slug` – used in the URL, e.g. `home-lab-2025-notes`
* `title` – post title
* `date` – string date, e.g. `"2025-01-20"`
* `summary` – short teaser for the index page
* Some kind of `body` or structured content (paragraphs, sections, etc.)

**How to create a new post:**

1. Open `src/content/posts.ts`.

2. Find a **simple existing post object**.

3. Duplicate it.

4. Change:

   * `slug` – lowercase, words separated by `-`, no spaces. Example: `"first-windows-domain-lab"`.
   * `title` – clear and descriptive.
   * `date` – today’s date.
   * `summary` – 1–2 sentences describing the post.
   * Body content – write the actual post.

5. Save and check:

   * The new post appears on `/writing`.
   * Clicking it opens the detail page at `/writing/<slug>`.

**Suggested structure for posts:**

* **Context:** What problem you wanted to solve or what you wanted to learn.
* **Environment:** Which tools/OS/cloud provider you used.
* **Steps (high level):** Main actions you took, not necessarily every single command.
* **Problems:** What went wrong, how you debugged.
* **What I learned:** Short bullet list of takeaways.

Short notes are totally fine—it’s better to have many small posts than to wait forever for a “perfect” essay.

---

## 6. The Projects Section: How to Think About It

The Work/Projects page is one of the most important parts of your portfolio. A hiring manager should be able to glance at it and immediately see:

* You can **set up**, **troubleshoot**, and **maintain** real systems.
* You have experience with the types of tools they care about (AD, networking, scripting, cloud, monitoring, etc.).
* You can explain your work clearly.

### 6.1 Great project types for this portfolio

Good candidates for project entries:

* **Homelab infrastructure**

  * Hypervisor (Proxmox, Hyper-V, ESXi, etc.)
  * Virtualized services (domain controller, file server, etc.)

* **Networking**

  * VLANs, firewall rules, basic segmentation
  * VPN or remote access configuration

* **Cloud experiments**

  * Small AWS/Azure/GCP sandboxes
  * Simple workloads, IAM, basic architectures

* **Monitoring & logging**

  * Prometheus + Grafana
  * ELK stack / Loki
  * Health dashboards and alerts

* **Automation**

  * PowerShell/Bash scripts
  * Ansible playbooks
  * Scripts that automate repetitive sysadmin tasks

---

### 6.2 For each project, try to answer:

When you fill out `projects.ts`, aim to communicate:

* **What** problem you tried to solve
* **Why** it mattered (for you, or for a hypothetical team)
* **How** you solved it (major tools and approach)
* **What** the environment looked like (number of VMs, network shape)
* **What you’d do next** if you had more time

You don’t need to write a book; 3–5 sentences or a few bullet points can be enough if they’re clear.

---

### 6.3 Using the existing template projects

The starter projects in `src/content/projects.ts` are there as **examples**:

* Some might represent:

  * A basic help desk / ticketing environment
  * A small on-prem domain with file shares
  * A minimal cloud experiment or migration
  * A monitoring/observability stack

Use them as a template:

1. Read each one and understand what scenario it is simulating.
2. Replace its content with **your real scenario** when you have one.
3. Keep the same object structure (keys and general fields), but change titles, descriptions, and tags.

---

## 7. Writing Workflow: From Idea to Published Post

Here’s a simple 6-step flow for writing new posts.

1. **Pick a topic**

   * Usually one of:

     * A new project you finished
     * A lab you ran
     * A troubleshooting story

2. **Open the posts file**

   ```bash
   code src/content/posts.ts
   ```

3. **Duplicate an existing post**

   * Use a short, clean one as a template.

4. **Fill in the fields**

   * `slug` – URL path
   * `title` – use clear, descriptive language
   * `date` – today’s date
   * `summary` – 1–2 sentence teaser
   * Body – 3–5 short sections following: Context → What I did → Problems → What I learned

5. **Run the dev server & check**

   ```bash
   npm run dev
   ```

   * Visit `/writing` to see the list.
   * Click your post to verify the detail view.

6. **Commit & push**

   ```bash
   git add src/content/posts.ts
   git commit -m "add post: <short title>"
   git push origin main
   ```

---

## 8. What Not to Touch (Until You’re Ready)

You can get a fully-functional, good-looking portfolio by **only** editing:

* `src/content/*`
* Some text-only content in `src/pages/*`

You can safely ignore the rest.

### 8.1 Files you can ignore for now

* `src/App.tsx`
* `src/layout/SiteLayout.tsx`
* `src/components/Navbar.tsx`, `CustomCursor`, `DotGridOverlay`, etc.
* `src/theme/ThemeProvider.tsx`, `TypographyProvider.tsx`
* `src/styles/globals.css` (beyond small color/typography tweaks, and only if you’re comfortable)
* `.github/workflows/*`
* `scripts/copy-404.js`
* `vite.config.*`, `tsconfig.*`, `package.json`

They are already configured to:

* Route between pages
* Handle light/dark theme
* Provide the floating navbar and custom cursor
* Deploy automatically via GitHub Pages

When you’re ready to start customizing design or layout more deeply, you can:

1. Create a new branch (e.g. `design-tweaks`).
2. Change one thing at a time.
3. Test with `npm run dev` and `npm run build`.
4. If something breaks, use `git diff` / `git status` to see what changed, and revert if necessary.

---

## 9. Troubleshooting & FAQ

### “`npm run dev` doesn’t start”

Possible causes:

* Node version mismatch
* Missing dependencies

Try:

```bash
# Ensure you're in the project folder
cd <your-portfolio-repo>

# Reinstall dependencies
rm -rf node_modules
npm install

# Try again
npm run dev
```

If it still fails, read the error message in the terminal and copy it into ChatGPT for help.

---

### “`npm run build` fails”

This usually means:

* A TypeScript error (e.g. missing property, wrong type)
* A syntax error (accidental comma, missing bracket, etc.)
* A missing field in one of your content objects

Check the error:

* Look for a filename like `src/content/projects.ts:123:4`
* Open that file and line
* Compare your new object to a working one above it

If stuck, copy the error and the relevant object into ChatGPT.

---

### “GitHub Actions / deployment failed”

Steps:

1. Go to the **Actions** tab in your GitHub repo.
2. Click the failed run (red ❌).
3. Look at the logs for the “Build” step.
4. If you see TypeScript or build errors, fix them locally and push again.
5. If it’s unrelated (e.g. network or GitHub issue), re-run the workflow or push a small change.

---

### “I totally broke something and don’t know how to fix it”

If you haven’t committed yet:

```bash
git status   # to see changed files
```

To throw away **all local changes** since the last commit:

```bash
git restore .
```

Then:

```bash
npm run dev
```

If you **already committed and pushed** something broken, you can:

* Make another commit that restores working content.
* Or ask for help with the current state of the repo.

---

## 10. Command Cheat Sheet (Quick Reference)

### Setup (once per machine)

```bash
git clone https://github.com/<your-user>/<your-portfolio-repo>.git
cd <your-portfolio-repo>
npm install
```

### Local development

```bash
npm run dev
# Then open the printed URL, usually http://localhost:5173
```

### Build & preview

```bash
npm run build
npm run preview
```

### Everyday Git commands

```bash
git status                    # See changes
git pull origin main          # Get latest from GitHub

git add .                     # Stage changes
git commit -m "short message" # Save a snapshot
git push origin main          # Deploy (via GitHub Actions)
```

If you’re ever unsure what to do next:

* Open this README in GitHub or VS Code.
* Follow the steps in:

  * **Section 2:** Everyday Git & GitHub Workflow
  * **Section 5:** Editing Content
  * **Section 9:** Troubleshooting & FAQ
