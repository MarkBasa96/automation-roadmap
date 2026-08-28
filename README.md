# AI Automation VA Roadmap

An interactive, self-hosted learning roadmap for going from **technical virtual assistant** to
**AI automation specialist** — 12 weeks, 8 tracks, 84 daily tasks of about an hour each.

No build step, no framework, no backend. Three files, opened in a browser.

---

## What it is

A structured curriculum with progress tracking, built around the tools an automation-focused
VA actually gets hired for in 2026:

| Weeks | Track | Why it's here |
|------:|-------|---------------|
| 1–2   | **HubSpot** | Centralised CRM. Teaches the vocabulary — contact, deal, property, pipeline, workflow — that transfers to everything else |
| 3–4   | **GoHighLevel** | All-in-one agency stack. The most in-demand platform in the technical-VA market |
| 5     | **Airtable** | The data layer. Automations constantly need somewhere structured to read and write that isn't a CRM record |
| 6     | **Zapier** | Trigger/action automation with the least friction. Largest app library |
| 7–8   | **Make.com** | Visual, node-based. Where automation stops being magic and becomes debuggable |
| 9     | **AI Layer (Claude API)** | Calling an LLM from inside a workflow with constrained prompts and JSON output. The skill that changes the job title |
| 10–11 | **n8n** | Open-source, self-hostable, JavaScript inside workflows. Capstone build here |
| 12    | **Lovable** | AI app builder. Ship a real client tool on top of the stack you just learned |

Tracks unlock **in order** — each week opens only once every week before it is complete.

## Features

- **84 daily tasks**, one per day, each written to be finishable in about an hour
- **Sequential unlocking** so you can't skip ahead and lose the scaffolding
- **Per-track and overall progress**, with a completion ring and per-tool bars
- **"Continue where you left off"** — one click back to your exact next task
- **84-day calendar** mapping every day to a task, with real dates from your start date
- **Branded track pages** with an auto-playing intro video per tool
- **Tool comparison tables** — Zapier vs Make vs n8n, HubSpot vs GoHighLevel, Lovable vs no-code vs code
- **Certificates** — a badge per completed track, plus a printable Master Certificate (PDF or PNG)
- **Focus timer** that nudges you at the one-hour mark
- **Lofi background music** with volume and station control
- **Study Buddy** — a small WASD game in the gutter that switches to a calm companion mode while you study
- **Multiple profiles** on one browser, with export/import to move progress between devices
- **Light and dark themes**, fully responsive down to phone widths

Every video and documentation link in the roadmap was opened and verified rather than
guessed at. Several official pages that used to be canonical (n8n's `/video-courses/`,
`/courses/level-one/`) are now 404s and were replaced with live equivalents.

## Getting started

**Live site:** https://markbasa96.github.io/automation-roadmap/

**Just use it:** open `index.html` in any modern browser. That's it.

**Testing videos and music locally:** YouTube refuses to embed on a `file://` path — you'll
see *"Error 153 — Video player configuration error"* and the music won't start. This is a
YouTube restriction, not a bug, and it disappears once the site is hosted. To check it
locally first, serve the folder over `http://`:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then open **http://localhost:8080**. (`serve.ps1` is included, needs nothing installed.)
Any other static server works too — `npx serve .`, `python -m http.server`, or the VS Code
Live Server extension.

**Host it:** see [Deploying to GitHub Pages](#deploying-to-github-pages) below.

On first open it asks for your name (used on the certificates), an optional email, and a
start date. Skip any of it — you can set it later from **Your details** in the sidebar.

## How your progress is stored

Everything lives in your browser's `localStorage`. There is no server and no account.

- **Each visitor automatically gets their own progress.** Two people opening the same
  hosted URL never see each other's data.
- **Multiple profiles per browser** — useful for a shared computer. Sidebar → *Switch profile*.
- **Export / Restore** — download a `.json` of your progress and restore it on another
  device, another browser, or after clearing your data.

Because storage is per-browser, progress does **not** sync automatically between your laptop
and your phone. Use Export/Restore for that. Clearing site data erases progress that hasn't
been exported.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (public, no README — you already have one).
2. Push these files to the repository root:
   ```
   index.html
   style.css
   script.js
   README.md
   LICENSE
   ```
   ```bash
   git init
   git add .
   git commit -m "AI Automation VA Roadmap"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and the folder to **`/ (root)`** — not `/docs`. Click **Save**.
6. Wait a minute, then reload the Settings → Pages screen. Your URL appears at the top:
   `https://<your-username>.github.io/<your-repo>/`

**`index.html` must be in the folder you selected**, or you'll get a 404. That's the mistake
that catches most people.

Everything works identically when hosted — in fact the YouTube embeds and background music
are *more* reliable over `https://` than from a local `file://` path.

## Tech

Plain HTML, CSS and JavaScript. No dependencies, no build step, no package manager.

- `index.html` — structure and static content
- `style.css` — all styling, themes, print styles, responsive breakpoints
- `script.js` — roadmap data, state, progress, unlocking, certificates, timer, music, game

The only external requests are Google Fonts, YouTube embeds, and the YouTube IFrame API for
background music. Nothing else is loaded and nothing is sent anywhere.

## Credits

Roadmap content and site by [@joemarkloarbasa](https://github.com/joemarkloarbasa).

Learning resources link to their original creators — HubSpot Academy, GoHighLevel's support
portal, Zapier Academy, Make Academy, n8n Academy and docs, Airtable Academy, Lovable's
documentation, Anthropic's Claude docs, and a number of independent YouTube educators.
All links point at the originals; nothing is rehosted or embedded without attribution.

Brand colours are used only to identify each tool within the roadmap. Published brand values
are used where a vendor publishes them (HubSpot Coral `#FF7A59`, n8n Pink `#EA4B71`, Zapier
Zap Orange `#FF4F00`, Claude Crail `#C15F3C`, Airtable's logo palette, Lovable's). Make and
GoHighLevel publish no public brand guide, so those two are approximated from their sites.
No affiliation with, or endorsement by, any of these companies is claimed.

## License

[MIT](LICENSE) — use it, fork it, adapt it for your own roadmap.
