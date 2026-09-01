# AI Automation VA Roadmap

A self-paced 12-week study tracker I built to teach myself the tools an automation-focused
virtual assistant gets hired for.

**Live:** https://markbasa96.github.io/automation-roadmap/

---

## What it is

Eight tools, 12 weeks, 84 daily tasks of about an hour each. Tracks unlock in order, so you
can't skip ahead.

| Weeks | Track | Why it's in the roadmap |
|------:|-------|-------------------------|
| 1–2   | HubSpot | Centralised CRM. The vocabulary that transfers everywhere else |
| 3–4   | GoHighLevel | All-in-one agency stack, common in VA work |
| 5     | Airtable | The data layer automations read and write |
| 6     | Zapier | Simplest trigger/action automation, largest app library |
| 7–8   | Make.com | Visual and node-based, better for branching logic |
| 9     | Claude API | Calling an LLM from inside a workflow |
| 10–11 | n8n | Open-source, self-hostable, JavaScript inside workflows |
| 12    | Lovable | AI app builder. Capstone project |

## What it does

- **84 daily tasks**, each sized to about an hour, one per day
- **Sequential unlocking** — a week opens only when the one before it is finished
- **Progress tracking** per track and overall, saved between visits
- **"Continue where you left off"** jumps straight to your next unfinished task
- **84-day calendar** mapping each day to a task from a start date you set
- **Verified video and doc links** on every module — each one opened and checked, not guessed
- **Tool comparison tables** for Zapier vs Make vs n8n, and HubSpot vs GoHighLevel
- **Certificates** for each finished track plus one for the whole roadmap, printable to PDF
  or downloadable as PNG
- **Focus timer** that pauses when you close the tab and nudges you at the one-hour mark
- **Background music** — 11 stations across focus, calm and sing-along
- **Study Buddy** — a small WASD game with 12 difficulty levels that switches to a calm
  companion mode while you're actually studying
- **Multiple profiles** on one browser, with export/import to move progress between devices
- **Light and dark themes**, works down to phone widths

The certificates are not accredited and say so on the certificate itself. They record that
you finished this roadmap, nothing more.

## Tech

Plain HTML, CSS and JavaScript. No frameworks, no build step, no package manager, no backend.

- `index.html` — structure and static content
- `style.css` — styling, themes, print styles, responsive breakpoints
- `script.js` — roadmap data, progress, unlocking, certificates, timer, music, game

Progress is stored in the browser's `localStorage`, so every visitor keeps their own and
nothing is sent anywhere. Because it's per-browser, progress doesn't sync between devices on
its own — there's an export/import for that.

The only external requests are Google Fonts and YouTube (embedded videos and the IFrame API
for background music).

## Running it locally

Opening `index.html` directly works for reading the roadmap, but **YouTube refuses to embed
on a `file://` path**. You'll get "Error 153" on the videos and no music. That's a YouTube
restriction, not a bug, and it goes away over `http://`.

To run it properly, serve the folder:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Then open **http://localhost:8080**. Add `-Port 8081` to use a different port. `serve.ps1` is
included and needs nothing installed. Any static server works — `npx serve .`,
`python -m http.server`, or the VS Code Live Server extension.

## A note on what this is

This is a personal learning project. I built it to keep myself honest about studying an hour
a day, and I'm the main user. It's not a product and there's no team behind it.

I'm genuinely good with some of the tools in here and a complete beginner with others — the
roadmap exists because of the second half of that sentence.

## Credits

Built by [@MarkBasa96](https://github.com/MarkBasa96).

Learning resources link to their original creators — HubSpot Academy, GoHighLevel support,
Zapier, Make Academy, n8n docs, Airtable, Lovable, Anthropic's Claude docs, and a number of
independent YouTube educators. Nothing is rehosted.

Tool icons for HubSpot, Zapier, Make, n8n, Airtable and Claude come from
[Simple Icons](https://simpleicons.org) (CC0). GoHighLevel and Lovable have no published
mark there, so those two are neutral stand-ins rather than real logos. Brand names and
colours identify each tool only; no affiliation or endorsement is claimed.

## License

[MIT](LICENSE)
