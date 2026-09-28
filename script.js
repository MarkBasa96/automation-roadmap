/* =========================================================
   AI Automation VA Roadmap
   12 weeks · 8 tracks · 12 modules · 84 daily tasks (1 per day, ~1hr)
   Every resource URL below was found and verified during research.
   ========================================================= */

'use strict';

/* ---------------------------------------------------------
   ROADMAP DATA
   Each module = 1 week = exactly 7 daily tasks.
   --------------------------------------------------------- */
const TRACKS = [
  /* ============ 1. HUBSPOT ============ */
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: '🧭',
    color: '#ea580c',
    colorSoft: 'rgba(234,88,12,.12)',
    weeksLabel: 'Weeks 1–2',
    tagline: 'One centralized CRM record shared across sales, marketing and service. Free to start, and the cleanest place to learn CRM vocabulary that transfers everywhere else.',
    whatItIs: 'A <strong>centralized CRM</strong>. One contact record is shared by the sales, marketing and service teams, so nobody keeps a private spreadsheet. Free tier is genuinely usable; paid tiers climb steeply per seat and per contact.',
    whenToReach: 'When a client has an actual sales team, cares about clean data and real reporting, and will grow into paid tiers. Also when you need attribution — HubSpot answers "which campaign produced this deal" better than anything else on this list.',
    modules: [
      {
        week: 1,
        title: 'CRM foundations: contacts, companies, deals, pipelines',
        goal: 'Get a free account and model a real client\'s sales process inside it.',
        deliverable: 'A HubSpot portal containing 20+ contacts, 2 companies, custom properties and a working 5-stage deal pipeline.',
        resources: [
          { t: 'video',  title: 'HubSpot CRM Tutorial for Beginners 2026 (Step-by-Step)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=JmQkw862ob4' },
          { t: 'video',  title: 'HubSpot CRM FULL Beginners Tutorial 2026 | Complete Training Course', src: 'YouTube · long-form reference', url: 'https://www.youtube.com/watch?v=T9tnDlEvlQg' },
          { t: 'course', title: 'HubSpot CRM Training: Setting up your CRM', src: 'HubSpot Academy (official)', url: 'https://academy.hubspot.com/lessons/setting-up-your-crm' },
          { t: 'course', title: 'Designing your Sales Process in HubSpot', src: 'HubSpot Academy (official)', url: 'https://academy.hubspot.com/lessons/designing-your-sales-process-in-hubspot-crm' }
        ],
        tasks: [
          'Create a free HubSpot account. Tour the main nav — Contacts, Companies, Deals, Marketing, Automation, Reports. Write down what you think each one is for before you look it up.',
          'Learn the object model: Contact vs Company vs Deal vs Ticket. Create 5 contacts and 2 companies by hand, and associate the contacts to the right companies.',
          'Custom properties. Add three to the contact record — Lead Source, Service Interest, Budget — and learn the difference between single-line text, dropdown, and number property types.',
          'Build a deal pipeline with 5 stages for an imaginary client (e.g. New Lead → Discovery Booked → Proposal Sent → Negotiation → Closed Won). Create 4 deals and drag them through.',
          'Import a CSV of 20 fake contacts. Learn column mapping, required fields, and how HubSpot deduplicates on email — this is the #1 thing you\'ll do for real clients.',
          'Activity logging: add tasks, notes, and a logged call on one contact. Understand the activity timeline — it is the reason CRMs exist.',
          'Lists: build one static list and one active list. Write a one-sentence explanation of the difference in your own words. If you can\'t, rewatch that section.'
        ]
      },
      {
        week: 2,
        title: 'Marketing tools, workflows, reporting + certification',
        goal: 'Automate inside the CRM, then start a free HubSpot Academy certification you can put on a profile.',
        deliverable: 'A working form → workflow → dashboard loop, plus a HubSpot certification in progress.',
        resources: [
          { t: 'video',  title: 'Create your first HubSpot workflow: automation tutorial for beginners', src: 'YouTube', url: 'https://www.youtube.com/watch?v=dKSO4DTuYeY' },
          { t: 'video',  title: 'HubSpot Automation Tutorial | Workflows & Sequences Explained', src: 'YouTube', url: 'https://www.youtube.com/watch?v=FzvSpjDeSOw' },
          { t: 'video',  title: 'HubSpot Reports & Dashboards Tutorial for Beginners (Complete Guide 2026)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=3lWnXiDk5Z0' },
          { t: 'course', title: 'HubSpot Marketing Hub Software certification (free)', src: 'HubSpot Academy (official)', url: 'https://academy.hubspot.com/courses/hubspot-marketing-hub-software' },
          { t: 'course', title: 'HubSpot Sales Hub Software certification (free)', src: 'HubSpot Academy (official)', url: 'https://academy.hubspot.com/courses/hubspot-sales-hub-software' },
          { t: 'doc',    title: 'All HubSpot Academy certifications', src: 'HubSpot Academy (official)', url: 'https://academy.hubspot.com/certification-overview' }
        ],
        tasks: [
          'Build a form with 5 fields and put it on a HubSpot landing page. Submit it yourself and watch the contact record appear — this is the trigger everything else hangs off.',
          'Build and send a marketing email to a test list. Use personalization tokens so the name pulls from the contact record. Note what happens when the token is empty.',
          'Your first workflow: form submission → set the Lead Source property → send an internal notification email. Turn it on and test it end to end.',
          'Add branching: an if/then branch on Budget, plus a delay step. Understand enrollment triggers vs re-enrollment — getting this wrong spams real people.',
          'Workflows vs Sequences. Build one sales sequence. Write down when you\'d use each (hint: one is marketing automation, one is 1-to-1 sales follow-up).',
          'Build a dashboard with 4 reports: deals by stage, contacts by source, activity by owner, and a revenue forecast. Schedule it to email weekly.',
          'Enrol in the free HubSpot Marketing Hub Software certification (3–6 hrs). Start it today; finish it in gaps over the coming weeks. It is a real, listable credential.'
        ]
      }
    ]
  },

  /* ============ 2. GOHIGHLEVEL ============ */
  {
    id: 'ghl',
    name: 'GoHighLevel',
    icon: '🏗️',
    color: '#0d9488',
    colorSoft: 'rgba(13,148,136,.12)',
    weeksLabel: 'Weeks 3–4',
    tagline: 'The all-in-one agency stack — CRM + SMS + email + funnels + sites + automation on a flat fee, built for running many client sub-accounts at once.',
    whatItIs: 'An <strong>all-in-one agency platform</strong>: CRM, two-way SMS, email, funnels, websites, calendars and automation in one login. Flat pricing, roughly <strong>$97–$297/mo</strong>, with unlimited client sub-accounts on the agency plan.',
    whenToReach: 'When the client is a local service business (dentist, gym, contractor, coach) that needs to text leads back fast, or when you\'re running several clients and want one flat-fee platform instead of stitching six subscriptions together. This is the single most in-demand platform in the technical-VA job market.',
    modules: [
      {
        week: 3,
        title: 'Sub-accounts, contacts, pipelines, funnels & sites',
        goal: 'Set up a client sub-account from scratch and ship a working two-page funnel.',
        deliverable: 'A GHL sub-account with tagged contacts, a live pipeline, and a published opt-in funnel — saved as a reusable snapshot.',
        resources: [
          { t: 'video',  title: 'GoHighLevel Tutorial For 2026: How to Master GHL For Beginners — FULL COURSE', src: 'YouTube · long-form reference', url: 'https://www.youtube.com/watch?v=x-R0Z4qA_Wc' },
          { t: 'video',  title: 'GoHighLevel Tutorial for Beginners 2026 — How to Use GoHighLevel', src: 'YouTube · quick orientation', url: 'https://www.youtube.com/watch?v=CUe2HnyrXps' },
          { t: 'video',  title: 'How To Create A Funnel In GoHighLevel 2026 (Full Step-By-Step)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=J4U49bAazF4' },
          { t: 'doc',    title: 'Getting Started with HighLevel — foundational setup', src: 'HighLevel Support Portal (official)', url: 'https://help.gohighlevel.com/support/solutions/155000000204' }
        ],
        tasks: [
          'Start a GHL trial. Learn the two views: Agency view (all clients) vs Sub-account view (one client). Create a sub-account for an imaginary client — this distinction confuses everyone at first.',
          'Contacts, tags and Smart Lists. Import 20 contacts and tag them by source. Tags in GHL do the job custom properties do in HubSpot — note the difference.',
          'Opportunities and pipelines. Build a 5-stage pipeline. Now write down 3 concrete differences between a GHL Opportunity and a HubSpot Deal.',
          'Sites → Funnels. Build a 2-step lead funnel from a template: opt-in page + thank-you page. Publish it and open it on your phone.',
          'Add a form or survey to the opt-in page and map its fields to contact fields. Submit a real test and confirm the contact lands in the CRM with the right tags.',
          'Custom values and domains. Set up custom values for business name/phone, and read how a real domain would be connected. You don\'t need to buy one — just know the steps.',
          'Snapshots: learn what they are and why agencies live on them. Save your sub-account setup as a snapshot. This is how you deliver client #2 in an hour instead of a week.'
        ]
      },
      {
        week: 4,
        title: 'Automation builder, calendars, conversations & campaigns',
        goal: 'Build enough workflows that the trigger/action model becomes automatic, not effortful.',
        deliverable: 'Five working workflows including missed-call text-back and appointment reminders, plus a written GHL vs HubSpot cheat sheet.',
        resources: [
          { t: 'video',  title: 'Master GoHighLevel Workflow Triggers, Actions & Automation — Complete Beginner\'s Tutorial', src: 'YouTube', url: 'https://www.youtube.com/watch?v=4YfeOuHGBt0' },
          { t: 'video',  title: 'GoHighLevel Workflows Tutorial 2026 (Beginner to Advanced)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=pgKCulPwEqg' },
          { t: 'video',  title: 'GoHighLevel Calendar Booking Tutorial For Beginners 2026 (Step-By-Step)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=YnaDsrPP8VI' }
        ],
        tasks: [
          'Workflow builder tour: trigger, action, wait, if/else. Build workflow #1 — form submitted → send SMS + email. This is the same trigger/action logic Zapier uses, in a CRM-shaped wrapper.',
          'Calendars: build a Simple calendar with real availability, then embed it on your funnel\'s thank-you page.',
          'Appointment automation: booked → instant confirmation SMS; 24 hours before → reminder with a reschedule option. Appointment triggers are their own category — learn them properly.',
          'Conversations inbox: two-way SMS and email in one thread, snippets, and manual outreach. This is where a VA actually spends time day to day.',
          'Send a bulk email and a bulk SMS campaign to a Smart List. Read up on A2P 10DLC registration — sending SMS for a client without it will get the client blocked.',
          'Confidence reps: build three more workflows — missed-call text-back, stale-lead nurture (no reply in 3 days), and a post-appointment review request. Volume is the point today.',
          'Write a one-page GHL vs HubSpot cheat sheet: pricing model, ideal client, what each does better, and which one you\'d pitch to a 10-person plumbing company vs a 40-person SaaS.'
        ]
      }
    ]
  },

  /* ============ 3. AIRTABLE ============ */
  {
    id: 'airtable',
    name: 'Airtable',
    icon: '🗂️',
    color: '#d97706',
    colorSoft: 'rgba(217,119,6,.13)',
    weeksLabel: 'Week 5',
    tagline: 'The lightweight database layer under everything else. Added to the roadmap because automations constantly need somewhere to read and write structured data that isn\'t a CRM record.',
    whatItIs: 'A <strong>spreadsheet-shaped relational database</strong> with an API. Tables, linked records, views, forms and interfaces — plus native connectors in Zapier, Make and n8n.',
    whenToReach: 'Any time the data doesn\'t belong on a contact record: content calendars, client request queues, inventory, job trackers, order lines, AI output logs. <strong>Why it earns a week:</strong> without a data layer, most interesting automations are impossible, and spinning up a real database is out of scope for a VA. This is the cheapest possible version of "backend."',
    modules: [
      {
        week: 5,
        title: 'Bases, linked records, views, interfaces & the API',
        goal: 'Think relationally, then expose the base so your automation tools can read and write to it.',
        deliverable: 'A three-table relational base with an interface dashboard, a public form, and your API credentials saved for later weeks.',
        resources: [
          { t: 'video',  title: 'How To Use Airtable (2026) | Beginner Tutorial', src: 'YouTube', url: 'https://www.youtube.com/watch?v=dWxPUpHwpkc' },
          { t: 'video',  title: 'Learn Airtable in 25 Minutes (Crash Course)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=lBsGOWV216Y' },
          { t: 'course', title: 'Airtable Academy — free guided learning paths & certification', src: 'Airtable (official)', url: 'https://academy.airtable.com/' }
        ],
        tasks: [
          'Create a base. Learn the hierarchy: workspace → base → table → record → field. Build a "Client Requests" table with 8 fields.',
          'Field types deep dive: single select, multiple select, date, checkbox, formula, and attachment. Field type choice is what makes a base usable or useless later.',
          'Linked records: build Clients ↔ Projects ↔ Tasks. Add a rollup showing open task count per project. This relational step is the whole reason to use Airtable over Sheets.',
          'Views: grid, kanban and calendar, each with filters and sorts. Build a "Due this week" view. Views are per-person lenses on the same data — no duplication.',
          'Interfaces: build a simple client-facing dashboard showing project status. This is the free preview of what you\'ll build properly in Lovable in Week 12.',
          'Airtable Forms + native automations: form submission → set status → send an email. Note how limited it is compared to Make — that limit is exactly why the next tracks exist.',
          'API readiness: find your base ID, table ID, and generate a personal access token. Store them somewhere safe. Zapier, Make and n8n will all need these.'
        ]
      }
    ]
  },

  /* ============ 4. ZAPIER ============ */
  {
    id: 'zapier',
    name: 'Zapier',
    icon: '⚡',
    color: '#f97316',
    colorSoft: 'rgba(249,115,22,.12)',
    weeksLabel: 'Week 6',
    tagline: 'The most beginner-friendly connector, with the largest app library. Best for simple linear "when this happens, do that" workflows.',
    whatItIs: 'A <strong>linear automation connector</strong>. A Zap is a trigger followed by a list of actions. Biggest app library of any tool here; you pay per task (per action that runs).',
    whenToReach: 'When the workflow is a straight line, the client is non-technical and might need to read it themselves, or when the app you need only has a Zapier integration. It\'s the most expensive per task — so reach for it for speed and simplicity, not for volume.',
    modules: [
      {
        week: 6,
        title: 'Triggers, actions, multi-step Zaps, filters & paths',
        goal: 'Internalise the trigger/action model and connect Zapier to the CRM work from Weeks 1–4.',
        deliverable: 'A live multi-step Zap with a filter and a path, connecting a form → CRM → Airtable → notification.',
        resources: [
          { t: 'course', title: 'Zapier Academy — free self-paced official courses', src: 'Zapier (official)', url: 'https://learn.zapier.com/' },
          { t: 'video',  title: 'Zapier Tutorial For Beginners 2026 (Ultimate Guide To Master Zapier)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=awRAuC6WRto' },
          { t: 'video',  title: 'Zapier For Beginners Tutorial', src: 'YouTube', url: 'https://www.youtube.com/watch?v=QufC08E_zjU' },
          { t: 'video',  title: 'How to Use Multi Step Zaps in Zapier — Full Guide 2026', src: 'YouTube', url: 'https://www.youtube.com/watch?v=ShSfMl2P398' },
          { t: 'doc',    title: 'Learn key concepts in Zap workflows', src: 'Zapier Help (official)', url: 'https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zaps' },
          { t: 'doc',    title: 'Add conditions to Zap workflows with filters', src: 'Zapier Help (official)', url: 'https://help.zapier.com/hc/en-us/articles/8496276332557-Add-conditions-to-Zap-workflows-with-filters' },
          { t: 'doc',    title: 'Add branching logic to Zaps with Paths', src: 'Zapier Help (official)', url: 'https://help.zapier.com/hc/en-us/articles/8496288555917-Add-branching-logic-to-Zaps-with-Paths' },
          { t: 'video',  title: 'How To Integrate Zapier With HubSpot (Tutorial 2026)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=gunIlcaNBeA' }
        ],
        tasks: [
          'Vocabulary first: trigger, action, Zap, task, step. Then build Zap #1 — Google Form submission → new row in Google Sheets. Ten minutes, start to finish.',
          'Understand billing: a "task" is one action that successfully runs. Read the pricing page and estimate the monthly task count for a client getting 200 leads/month through a 4-step Zap.',
          'Multi-step Zap: form → Google Sheet → Airtable record → Gmail notification. Watch how data from step 1 maps into steps 2, 3 and 4.',
          'Filters: add "only continue if Budget is greater than 1000" to the Zap above. Note that filtered-out runs consume no tasks — that\'s a real cost lever.',
          'Paths: split into two branches — hot lead vs cold lead — with different actions on each. Then note the limit on how many paths a Zap allows; you\'ll feel this constraint in Make next week.',
          'Utilities tour: Formatter (dates, text, numbers), Delay, and Webhooks by Zapier. Use each one at least once. Formatter alone will save you constantly.',
          'Tie it back to the CRM: build a Zap connecting Zapier to HubSpot (or GHL) — new contact → create Airtable record → send yourself a summary email. Write down everything that broke and why.'
        ]
      }
    ]
  },

  /* ============ 5. MAKE ============ */
  {
    id: 'make',
    name: 'Make.com',
    icon: '🧩',
    color: '#7c3aed',
    colorSoft: 'rgba(124,58,237,.12)',
    weeksLabel: 'Weeks 7–8',
    tagline: 'Visual, node-based automation. More powerful than Zapier for branching and complex logic, still genuinely no-code.',
    whatItIs: 'A <strong>visual scenario builder</strong>. Modules are wired on a canvas and you can watch actual data bundles flow between them. Routers give unlimited branches, and error handling is explicit and per-module.',
    whenToReach: 'When the workflow branches, loops over a list, needs real error handling, or when Zapier\'s task pricing stops making sense at volume. This is the tool where automation stops being magic and starts being something you can debug.',
    modules: [
      {
        week: 7,
        title: 'Scenarios, modules, mapping, functions & routers',
        goal: 'Learn to see data moving. This is the week the mental model upgrades from "list of steps" to "flow of data".',
        deliverable: 'A multi-route scenario with a router, filters, an iterator and formatted output.',
        resources: [
          { t: 'course', title: 'Make Academy — free official self-paced courses & badges', src: 'Make (official)', url: 'https://academy.make.com/' },
          { t: 'course', title: 'Make Academy: Introduction to Modules', src: 'Make Academy (official)', url: 'https://academy.make.com/courses/BasicsC01' },
          { t: 'video',  title: 'Make.com Tutorial for Beginners 2026 (Full Guide)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=CLutx-rqGgc' },
          { t: 'video',  title: 'Make.com Tutorial for Beginners (2026) – Full Guide', src: 'YouTube · alternate teacher', url: 'https://www.youtube.com/watch?v=SVkiqiSVo3k' },
          { t: 'video',  title: 'How to Use Router in Make.com [2026 Full Guide]', src: 'YouTube', url: 'https://www.youtube.com/watch?v=meKll1OyKUE' }
        ],
        tasks: [
          'Sign up and tour the canvas. Build scenario #1: a custom webhook → add a row to Google Sheets. Send it a test payload and watch the bundle arrive.',
          'Module categories — trigger, action, search, aggregator, iterator. Complete Make Academy\'s "Introduction to Modules" course while you do it.',
          'Mapping and data structures: bundles, collections, arrays. Map a nested field from one module into another. This is the concept Zapier hides from you.',
          'Functions: text, date and math functions. Format a phone number to E.164 and reformat a date. Right-click any mapped field to see what\'s available.',
          'Routers: split a scenario into three routes with a filter on each. Now rebuild your Zapier hot/cold lead path here — notice there\'s no limit on routes.',
          'Iterator + Array Aggregator: take an array of line items, process each one, then recombine them into a single summary. This pair is unavoidable in real client work.',
          'Scheduling and operations budget: instant (webhook) vs scheduled runs. Count the operations your scenario uses per run and calculate the monthly cost at 500 runs.'
        ]
      },
      {
        week: 8,
        title: 'Error handling, HTTP, data stores — and Make vs Zapier head-to-head',
        goal: 'Build automations that survive contact with reality, then form your own opinion on when to use which tool.',
        deliverable: 'A fault-tolerant scenario plus a written decision rule you could say out loud to a client.',
        resources: [
          { t: 'video',  title: 'Make.com Error Handling Quick Reference Guide — How to Handle Errors', src: 'YouTube', url: 'https://www.youtube.com/watch?v=pw0z-6pnk94' },
          { t: 'doc',    title: 'Overview of error handling', src: 'Make Help Center (official)', url: 'https://help.make.com/overview-of-error-handling' },
          { t: 'course', title: 'Make Academy — continue your learning path', src: 'Make (official)', url: 'https://academy.make.com/' }
        ],
        tasks: [
          'Error handler routes. Learn the five directives — Ignore, Resume, Commit, Rollback, Break — and attach an error route to a module that could realistically fail.',
          'Break and incomplete executions: deliberately break a module, let it fail, then find the incomplete execution and reprocess it without losing the data.',
          'The HTTP module: call a public API that has no prebuilt Make connector. Parse the JSON response and map a field out of it. This unlocks every API on the internet.',
          'Webhooks both directions: have a Zapier Zap fire a Make webhook, and a Make scenario call a Zapier webhook. Watch data cross a tool boundary — clients pay for this.',
          'Data stores: persist a value between runs (e.g. "last processed record ID"). Use it to stop a scenario from double-processing.',
          'Head-to-head: rebuild your Week 6 multi-step Zap in Make, identically. Time both builds. Count the operations vs tasks. Note which was more annoying and why.',
          'Write your decision rule — three or four sentences on when you\'d choose Zapier vs Make, covering cost, branching, error handling, and whether the client will maintain it.'
        ]
      }
    ]
  },

  /* ============ 6. AI LAYER ============ */
  {
    id: 'ai',
    name: 'AI Layer (Claude API)',
    icon: '🧠',
    color: '#e11d48',
    colorSoft: 'rgba(225,29,72,.12)',
    weeksLabel: 'Week 9',
    tagline: 'Calling an LLM API from inside a workflow, with constrained prompts and structured JSON output. This is the week that turns "automation VA" into "AI automation specialist".',
    whatItIs: 'Using an <strong>LLM API as one step in a workflow</strong> — not a chat window. You send a tightly constrained prompt, force JSON back, and map those fields into the next module like any other data.',
    whenToReach: 'Whenever a step needs judgement rather than rules: classifying inbound leads, summarising a long email thread, extracting fields from messy text, drafting a reply. <strong>Why it earns a week:</strong> in 2026 this is the highest-leverage skill on the entire roadmap, and it\'s the difference between a $15/hr VA and a $50/hr automation specialist.',
    modules: [
      {
        week: 9,
        title: 'LLM APIs inside workflows: prompts, JSON output, cost & failure',
        goal: 'Make an AI call a boring, reliable step in a scenario — one you can map fields out of.',
        deliverable: 'A Make (or Zapier) scenario that sends messy inbound text to an LLM and gets back clean, mapped JSON fields.',
        resources: [
          { t: 'course', title: 'Build with Claude — official courses & tutorials', src: 'Anthropic (official)', url: 'https://www.anthropic.com/learn/build-with-claude' },
          { t: 'doc',    title: 'Tutorial: Build a tool-using agent', src: 'Claude Platform Docs (official)', url: 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/build-a-tool-using-agent' },
          { t: 'doc',    title: 'Claude Agent SDK — Quickstart', src: 'Claude Platform Docs (official)', url: 'https://platform.claude.com/docs/en/agent-sdk/quickstart' },
          { t: 'doc',    title: 'claude-quickstarts — runnable starter projects', src: 'GitHub · Anthropic (official)', url: 'https://github.com/anthropics/claude-quickstarts' }
        ],
        tasks: [
          'Vocabulary: model, system prompt, user prompt, token, context window, temperature. Create an API key and store it somewhere safe — never paste it into a shared doc.',
          'First API call from an automation tool: use Make\'s HTTP module (or Zapier Webhooks) to send a prompt and read the response text back. No SDK, no code — just HTTP.',
          'Structured output: rewrite the prompt so the model must return JSON with fixed keys. Now map those keys into downstream modules. This is the single most important skill this week.',
          'Prompt engineering for automation is not chat prompting. Practise constraining: give the model a fixed list of allowed categories, a max length, and an explicit "if unsure, return unknown".',
          'Practical build: inbound message → AI summarises it, categorises it, drafts a reply → save all three fields into Airtable. Run it against 10 real-ish messages.',
          'Cost and failure modes: calculate the token cost per run at 500 runs/month. Then deliberately feed it garbage and see what breaks — add a validation step that catches non-JSON responses.',
          'AI step vs AI agent: write down when a workflow just needs one prompt call (most of the time) versus when it needs an agent that can call tools in a loop. You\'ll build the second in Week 11.'
        ]
      }
    ]
  },

  /* ============ 7. N8N ============ */
  {
    id: 'n8n',
    name: 'n8n',
    icon: '🔧',
    color: '#0891b2',
    colorSoft: 'rgba(8,145,178,.12)',
    weeksLabel: 'Weeks 10–11',
    tagline: 'Open-source, self-hostable, and the deepest technical flexibility of the three — you can write JavaScript inside workflows. The closest thing here to a developer tool.',
    whatItIs: 'An <strong>open-source workflow automation tool</strong> you can run in the cloud or self-host. Node-based like Make, but with first-class JavaScript/Python Code nodes, full error workflows, and strong AI-agent tooling.',
    whenToReach: 'When you need custom code, when the client has data-privacy reasons to self-host, when volume makes per-task pricing painful, or when you\'re building AI agents with tools and memory. The trade-off: you become the maintainer, so price accordingly.',
    modules: [
      {
        week: 10,
        title: 'Setup, core nodes, webhooks and the Code node',
        goal: 'Get n8n running, then get comfortable writing small pieces of JavaScript inside a workflow.',
        deliverable: 'A running n8n instance and a workflow using a webhook, an HTTP request with auth, and a Code node.',
        resources: [
          { t: 'video',  title: 'n8n Tutorial for Beginners 2026 — Full Guide', src: 'YouTube', url: 'https://www.youtube.com/watch?v=1jDEZGjvXbk' },
          { t: 'video',  title: 'How to Use n8n for FREE in 2026 — n8n Self Hosting Setup', src: 'YouTube', url: 'https://www.youtube.com/watch?v=oRI0lA-ZQ3w' },
          { t: 'video',  title: 'n8n Full Course Masterclass 2026 — Part 1/2: Installation, Core Nodes, Data & Error Handling', src: 'YouTube · long-form reference', url: 'https://www.youtube.com/watch?v=HaSaDsn3AMg' },
          { t: 'doc',    title: 'Host n8n — self-hosting options (Docker Compose, one-line setup, cloud providers)', src: 'n8n Docs (official)', url: 'https://docs.n8n.io/deploy/host-n8n' },
          { t: 'doc',    title: 'Webhook node reference', src: 'n8n Docs (official)', url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook' },
          { t: 'course', title: 'n8n Academy — interactive courses, badges & certificates', src: 'n8n (official)', url: 'https://learn.n8n.io/' }
        ],
        tasks: [
          'Decide: n8n Cloud trial (fastest) or self-host via Docker (more valuable to learn). Pick one and get an instance actually running before you do anything else.',
          'Core nodes: Manual Trigger, Edit Fields (Set), IF, and HTTP Request. Build a 4-node workflow and inspect the item data at each step.',
          'Webhook node: receive a POST request, inspect the incoming payload, and send a custom response. Fire it from Make or Zapier so you can see the tools connect.',
          'Code node (JavaScript): write three small snippets — transform every item, filter a list, and build a custom payload object. This is what n8n has that the others don\'t.',
          'Credentials: connect to an API using a bearer token stored as a credential rather than hardcoded in a URL. Understand why that distinction matters for client work.',
          'Debugging: execution history, pinned data, retries, and a dedicated error workflow. Break something on purpose and trace it back through the execution log.',
          'Compare: rebuild your Week 8 Make scenario in n8n. Note what was easier (code, HTTP, loops) and what was harder (setup, credentials, no polished UI).'
        ]
      },
      {
        week: 11,
        title: 'Capstone: CRM + AI API + notification, end to end',
        goal: 'Build one production-quality automation you could hand to a paying client — and document it.',
        deliverable: 'Portfolio piece #1: a hardened, documented workflow that qualifies a lead with AI, writes it to a CRM, and notifies a human.',
        resources: [
          { t: 'video',  title: 'n8n Tutorial for Beginners 2026: How to Build AI Agents', src: 'YouTube', url: 'https://www.youtube.com/watch?v=TKnaDGpN7Ns' },
          { t: 'doc',    title: 'n8n Documentation', src: 'n8n Docs (official)', url: 'https://docs.n8n.io/' },
          { t: 'course', title: 'n8n Academy — all courses', src: 'n8n (official)', url: 'https://learn.n8n.io/courses' }
        ],
        tasks: [
          'Design it on paper first: trigger → look up existing record → AI qualify → write to CRM → notify. Draw the boxes before you touch the canvas. Professionals design first.',
          'Build steps 1–2: a webhook or form trigger, then look the contact up in Airtable or HubSpot to check whether they already exist.',
          'Build step 3: call the LLM (AI Agent node or HTTP request) to qualify the lead, score it, and write a two-sentence summary. Force JSON output like you learned in Week 9.',
          'Build step 4: write back to HubSpot or GHL — create or update the contact, set the score property, and create a deal/opportunity in the right stage.',
          'Build step 5: notify a human — email, Slack or SMS — with the AI summary and a link straight to the CRM record. The human should never have to go looking.',
          'Harden it: error handling on every external call, retries, deduplication, and a fallback if the AI returns junk. Then test with 10 deliberately awful inputs.',
          'Document it: a one-page client-facing writeup (what it does, what it costs to run, what to do if it breaks) plus a short screen recording walking through it. This is portfolio piece #1.'
        ]
      }
    ]
  },

  /* ============ 8. LOVABLE ============ */
  {
    id: 'lovable',
    name: 'Lovable',
    icon: '🚀',
    color: '#c026d3',
    colorSoft: 'rgba(192,38,211,.12)',
    weeksLabel: 'Week 12',
    tagline: 'AI app builder — natural-language prompts become working web apps. The capstone, because by now you have a CRM, a database and a workflow engine to wire it into.',
    whatItIs: 'An <strong>AI app builder</strong>. You describe an app in plain English and it writes real React code you can host, connect to a database, and export to GitHub.',
    whenToReach: 'When a client needs a custom-facing tool that no platform provides — a branded intake form, a status dashboard, a small internal portal. It sits above no-code (which hits ceilings fast) and below traditional development (which takes weeks). For a VA, "I can ship you a custom tool in a week" is a genuine differentiator.',
    modules: [
      {
        week: 12,
        title: 'Prompt-to-app, a real client tool, and career positioning',
        goal: 'Ship one real, published tool connected to your automation stack — then work out how to sell this skill.',
        deliverable: 'Portfolio piece #2: a published client intake tool with a real database and a webhook into your n8n/Make workflow.',
        resources: [
          { t: 'video',  title: 'Lovable Tutorial for Beginners 2026: Build Your First SaaS App in 20 Minutes With AI', src: 'YouTube', url: 'https://www.youtube.com/watch?v=ySL32QNidBY' },
          { t: 'video',  title: 'Lovable Tutorial for Beginners 2026 – Build Your Own App (No Code)', src: 'YouTube', url: 'https://www.youtube.com/watch?v=kGu3ykN0Dx4' },
          { t: 'video',  title: 'How To Create A Publishable App In 60 Minutes — Lovable AI Tutorial 2026', src: 'YouTube', url: 'https://www.youtube.com/watch?v=VKn_6tw9W28' },
          { t: 'video',  title: 'How to Connect Lovable to Supabase [2026 Guide]', src: 'YouTube', url: 'https://www.youtube.com/watch?v=EOj2JifHrHw' },
          { t: 'doc',    title: 'Lovable Documentation — getting started, prompting, integrations', src: 'Lovable (official)', url: 'https://docs.lovable.dev/' },
          { t: 'doc',    title: 'Lovable Guides — building apps & websites with AI', src: 'Lovable (official)', url: 'https://lovable.dev/guides' },
          { t: 'course', title: 'Lovable + Supabase video library', src: 'Lovable (official)', url: 'https://lovable.dev/videos/supabase' }
        ],
        tasks: [
          'Prompt-to-app basics: build a throwaway app in one prompt. Learn the loop — prompt, preview, refine — and get a feel for how much detail one prompt should carry.',
          'Prompting for structure: rewrite your spec explicitly — pages, data fields, states, empty states, validation. Rebuild the app from that spec and compare quality to yesterday.',
          'Real build, part 1: a client intake form tool — fields, validation, a confirmation screen, and your (or a fake client\'s) branding.',
          'Connect Supabase so submissions land in a real database rather than vanishing. This is the step that makes it an app instead of a mockup.',
          'Real build, part 2: add a simple dashboard view of submissions with filter, sort and a status field a human can update.',
          'Publish it, then wire it in: fire a webhook on each submission into your n8n or Make workflow so a submission flows through AI qualification into the CRM. Full stack, end to end.',
          'Positioning: write where Lovable fits versus no-code versus real code, list both portfolio pieces with what each demonstrates, and set a rate you can defend for "AI automation specialist."'
        ]
      }
    ]
  }
];

/* ---------------------------------------------------------
   BRAND IDENTITIES + INTRO VIDEOS
   Hex codes taken from each vendor's published brand assets where
   one exists (HubSpot Coral/Atomic, n8n Pink, Zapier Zap Orange,
   Claude Crail/Pampas, Airtable logo palette, Lovable). Make and
   GoHighLevel publish no public brand guide, so those two are
   matched by eye to their current sites.
   Every intro video ID below was opened and title-checked.
   --------------------------------------------------------- */
const BRAND = {
  hubspot: {
    primary: '#FF7A59', ink: '#33475B', onDark: true,
    grad: 'linear-gradient(135deg,#33475B 0%,#425B76 45%,#FF7A59 100%)',
    intro: { id: 'JmQkw862ob4', title: 'HubSpot CRM Tutorial for Beginners 2026 (Step-by-Step)' }
  },
  ghl: {
    primary: '#188BF6', ink: '#24313D', onDark: true,
    grad: 'linear-gradient(135deg,#1B2A38 0%,#245C86 50%,#188BF6 100%)',
    intro: { id: 'CUe2HnyrXps', title: 'GoHighLevel Tutorial for Beginners 2026 — How to Use GoHighLevel' }
  },
  airtable: {
    primary: '#F82B60', ink: '#181D26', onDark: true,
    grad: 'linear-gradient(135deg,#FCB400 0%,#F82B60 45%,#2D7FF9 100%)',
    intro: { id: 'lBsGOWV216Y', title: 'Learn Airtable in 25 Minutes (Crash Course)' }
  },
  zapier: {
    primary: '#FF4F00', ink: '#201515', onDark: true,
    grad: 'linear-gradient(135deg,#201515 0%,#8A2B00 45%,#FF4F00 100%)',
    intro: { id: 'QufC08E_zjU', title: 'Zapier For Beginners Tutorial' }
  },
  make: {
    primary: '#6D00CC', ink: '#2A0A47', onDark: true,
    grad: 'linear-gradient(135deg,#2A0A47 0%,#6D00CC 55%,#B14BF4 100%)',
    intro: { id: 'CLutx-rqGgc', title: 'Make.com Tutorial for Beginners 2026 (Full Guide)' }
  },
  ai: {
    primary: '#C15F3C', ink: '#3B2417', onDark: true,
    grad: 'linear-gradient(135deg,#3B2417 0%,#8A452A 50%,#C15F3C 100%)',
    intro: { id: 'GSPIbMDk7aY', title: 'How To Get Claude (Anthropic) API Key — 2026 Full Guide' }
  },
  n8n: {
    primary: '#EA4B71', ink: '#040506', onDark: true,
    grad: 'linear-gradient(135deg,#040506 0%,#7A2740 50%,#EA4B71 100%)',
    intro: { id: '1jDEZGjvXbk', title: 'n8n Tutorial for Beginners 2026 — Full Guide' }
  },
  lovable: {
    primary: '#FE7B02', ink: '#1E2433', onDark: true,
    grad: 'linear-gradient(135deg,#1E2433 0%,#4B73FF 50%,#FE7B02 100%)',
    intro: { id: 'ySL32QNidBY', title: 'Lovable Tutorial for Beginners 2026: Build Your First SaaS App' }
  }
};

/* =========================================================
   CONFETTI — fired when a track reaches 100%.
   A throwaway full-screen canvas that removes itself when the
   last piece falls, so it costs nothing the rest of the time.
   ========================================================= */
function confetti(opts) {
  const o = opts || {};
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cv = document.createElement('canvas');
  cv.className = 'confetti-layer';
  document.body.appendChild(cv);
  const ctx = cv.getContext('2d');

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  function size() {
    cv.width  = Math.floor(window.innerWidth  * dpr);
    cv.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();

  const W = () => window.innerWidth, H = () => window.innerHeight;
  const colors = o.colors && o.colors.length
    ? o.colors
    : ['#4f46e5', '#f59e0b', '#38bdf8', '#22c55e', '#ef4444', '#a855f7', '#fbbf24'];

  const N = o.count || 130;
  const bits = [];
  for (let i = 0; i < N; i++) {
    bits.push({
      x: W() * (0.5 + (Math.random() - 0.5) * 0.5),
      y: H() * 0.34 + Math.random() * 40,
      vx: (Math.random() - 0.5) * 11,
      vy: -6 - Math.random() * 9,
      w: 5 + Math.random() * 6,
      h: 8 + Math.random() * 8,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.32,
      c: colors[Math.floor(Math.random() * colors.length)],
      life: 150 + Math.random() * 90
    });
  }

  let frame = 0, raf;
  function tick() {
    frame++;
    ctx.clearRect(0, 0, W(), H());
    let alive = 0;
    bits.forEach(b => {
      if (b.life <= 0) return;
      alive++;
      b.life--;
      b.vy += 0.32;                     // gravity
      b.vx *= 0.99;                     // drag
      b.x += b.vx;
      b.y += b.vy;
      b.rot += b.vr;
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, b.life / 55));
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot);
      ctx.fillStyle = b.c;
      ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
      ctx.restore();
    });
    if (alive && frame < 400) raf = requestAnimationFrame(tick);
    else { cancelAnimationFrame(raf); cv.remove(); window.removeEventListener('resize', size); }
  }
  window.addEventListener('resize', size);
  tick();
}

/* =========================================================
   TOOL ICONS — the real brand marks.

   Six come from Simple Icons, which publishes brand SVGs under
   CC0, so they are the actual logos and are free to embed. Simple
   Icons has no mark for GoHighLevel or Lovable, so those two are
   simple shapes drawn to suit (growth bars / a heart) rather than
   fake logos — flagged with `real: false`.

   Paths are inlined instead of loaded from a CDN so the site keeps
   working with no external dependency.
   ========================================================= */
const TOOL_ICON = {
  hubspot: { real: true, d: 'M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z' },
  ghl:     { real: false, d: 'M3.5 13.5h4v7h-4zM10 8.5h4v12h-4zM16.5 3.5h4v17h-4z' },
  airtable:{ real: true, d: 'M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z' },
  zapier:  { real: true, d: 'M4.157 0A4.151 4.151 0 0 0 0 4.161v15.678A4.151 4.151 0 0 0 4.157 24h15.682A4.152 4.152 0 0 0 24 19.839V4.161A4.152 4.152 0 0 0 19.839 0H4.157Zm10.61 8.761h.03a.577.577 0 0 1 .23.038.585.585 0 0 1 .201.124.63.63 0 0 1 .162.431.612.612 0 0 1-.162.435.58.58 0 0 1-.201.128.58.58 0 0 1-.23.042.529.529 0 0 1-.235-.042.585.585 0 0 1-.332-.328.559.559 0 0 1-.038-.235.613.613 0 0 1 .17-.431.59.59 0 0 1 .405-.162Zm2.853 1.572c.03.004.061.004.095.004.325-.011.646.064.937.219.238.144.431.355.552.609.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265.714.714 0 0 0 .484-.136.642.642 0 0 0 .23-.318l.915.257a1.398 1.398 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.234 2.234 0 0 1-.836.136 1.923 1.923 0 0 1-1.001-.245 1.618 1.618 0 0 1-.665-.703 2.221 2.221 0 0 1-.227-1.036 1.95 1.95 0 0 1 .48-1.398 1.9 1.9 0 0 1 1.3-.488Zm-9.607.023c.162.004.325.026.48.079.207.065.4.174.563.314.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065c-.064.163-.155.31-.272.439a1.122 1.122 0 0 1-.374.264 1.023 1.023 0 0 1-.453.083 1.334 1.334 0 0 1-.866-.264.965.965 0 0 1-.329-.801.993.993 0 0 1 .076-.431 1.02 1.02 0 0 1 .242-.363 1.478 1.478 0 0 1 1.043-.303h.952v-.181a.696.696 0 0 0-.136-.454.553.553 0 0 0-.438-.154.695.695 0 0 0-.378.086.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378.261-.091.54-.136.82-.129.053-.003.106-.007.163-.007Zm4.384.007c.174 0 .347.038.506.114.182.083.34.211.458.374.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448 1.148 1.148 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.052 1.052 0 0 1-.48-.457 1.298 1.298 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.129 1.129 0 0 1 .843-.344h.076v-.004Zm7.559.084h.903l.113.805h.053a1.37 1.37 0 0 1 .235-.484.813.813 0 0 1 .313-.242.82.82 0 0 1 .39-.076h.234v1.051h-.401a.662.662 0 0 0-.313.008.623.623 0 0 0-.272.155.663.663 0 0 0-.174.26.683.683 0 0 0-.027.314v1.875h-1.054v-3.666Zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754-.045-.117H2.441v-.896Zm11.815 0h1.055v3.659h-1.055V10.45Zm3.443.684.019.016a.69.69 0 0 0-.351.045.756.756 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787h.003Zm-5.718.163c-.026 0-.057 0-.083.004a.78.78 0 0 0-.31.053.746.746 0 0 0-.257.189 1.016 1.016 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.634.634 0 0 0 .253.196.638.638 0 0 0 .314.061.644.644 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.216 1.216 0 0 0-.181-.711.677.677 0 0 0-.503-.257Zm-4.509 1.266a.464.464 0 0 0-.268.102.373.373 0 0 0-.114.276c0 .053.008.106.027.155a.375.375 0 0 0 .087.132.576.576 0 0 0 .397.11v.004a.863.863 0 0 0 .563-.182.573.573 0 0 0 .211-.457v-.14h-.903Z' },
  make:    { real: true, d: 'M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z' },
  ai:      { real: true, d: 'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z' },
  n8n:     { real: true, d: 'M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632' },
  lovable: { real: false, d: 'M12 21.1s-7.6-4.8-9.6-9.3C1.1 8.5 2.9 5.3 6.1 5.3c2 0 3.3 1.2 4 2.3.7-1.1 2-2.3 4-2.3 3.2 0 5 3.2 3.7 6.5-2 4.5-9.8 9.3-9.8 9.3z' }
};

/* =========================================================
   CERTIFICATE CATS
   A different cat on every certificate. These are drawn, not
   stock photos: a public repo full of downloaded cat pictures
   is a licensing headache, and drawn cats can take each tool's
   brand colour. Swap in real photos any time by pointing
   catPortrait() at an <img> instead.
   ========================================================= */
const CAT_FUR = [
  { name: 'ginger',   base: '#f0a35e', dark: '#c9773a', belly: '#fde3c4' },
  { name: 'grey',     base: '#9aa4b0', dark: '#6b7683', belly: '#e3e8ee' },
  { name: 'tuxedo',   base: '#3b3f46', dark: '#22262b', belly: '#f4f4f5' },
  { name: 'cream',    base: '#e8d5b5', dark: '#c0a880', belly: '#fbf3e6' },
  { name: 'siamese',  base: '#e6d9c8', dark: '#6b5344', belly: '#faf4ec' },
  { name: 'calico',   base: '#f2c37b', dark: '#8a5a3b', belly: '#fff6e8' },
  { name: 'black',    base: '#4a4550', dark: '#2c2932', belly: '#6b6575' },
  { name: 'blue',     base: '#8fa8bf', dark: '#5f7a91', belly: '#dce7f0' },
  { name: 'tabby',    base: '#c99a63', dark: '#8a663c', belly: '#f0dcc2' }
];

/** One cat portrait as inline SVG. `i` picks the fur, `eye` the colour. */
function catPortrait(i, eyeColor) {
  const f = CAT_FUR[i % CAT_FUR.length];
  const stripes = (i % 3 === 0);
  const wink    = (i % 4 === 2);
  return `
  <svg viewBox="0 0 100 100" class="catpic-svg" aria-hidden="true">
    <rect width="100" height="100" fill="${f.belly}" opacity=".35"/>
    <!-- ears -->
    <path d="M22 40 L26 15 L44 30 Z" fill="${f.base}"/>
    <path d="M78 40 L74 15 L56 30 Z" fill="${f.base}"/>
    <path d="M27 37 L29.5 22 L40 31 Z" fill="#f6b8c4"/>
    <path d="M73 37 L70.5 22 L60 31 Z" fill="#f6b8c4"/>
    <!-- head -->
    <ellipse cx="50" cy="56" rx="30" ry="27" fill="${f.base}"/>
    <ellipse cx="50" cy="64" rx="19" ry="16" fill="${f.belly}"/>
    ${stripes ? `
      <path d="M38 33 q4 7 2 13" stroke="${f.dark}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      <path d="M50 30 q0 8 0 13" stroke="${f.dark}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      <path d="M62 33 q-4 7 -2 13" stroke="${f.dark}" stroke-width="3.2" fill="none" stroke-linecap="round"/>` : ''}
    <!-- eyes -->
    ${wink
      ? `<path d="M34 53 q5 -4 10 0" stroke="#2b2b2b" stroke-width="3" fill="none" stroke-linecap="round"/>
         <ellipse cx="61" cy="53" rx="5.5" ry="6.5" fill="#fff"/>
         <ellipse cx="61" cy="53.5" rx="3" ry="4.5" fill="${eyeColor || '#3a3a3a'}"/>
         <circle cx="62.3" cy="51.4" r="1.2" fill="#fff"/>`
      : `<ellipse cx="39" cy="53" rx="5.5" ry="6.5" fill="#fff"/>
         <ellipse cx="61" cy="53" rx="5.5" ry="6.5" fill="#fff"/>
         <ellipse cx="39" cy="53.5" rx="3" ry="4.5" fill="${eyeColor || '#3a3a3a'}"/>
         <ellipse cx="61" cy="53.5" rx="3" ry="4.5" fill="${eyeColor || '#3a3a3a'}"/>
         <circle cx="40.3" cy="51.4" r="1.2" fill="#fff"/>
         <circle cx="62.3" cy="51.4" r="1.2" fill="#fff"/>`}
    <!-- nose + mouth -->
    <path d="M47 62 L53 62 L50 66 Z" fill="#e98a9c"/>
    <path d="M50 66 q-4 5 -8 2" stroke="${f.dark}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M50 66 q4 5 8 2" stroke="${f.dark}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- whiskers -->
    <g stroke="${f.dark}" stroke-width="1.6" stroke-linecap="round" opacity=".8">
      <path d="M20 60 L36 62"/><path d="M20 67 L36 66"/>
      <path d="M80 60 L64 62"/><path d="M80 67 L64 66"/>
    </g>
  </svg>`;
}

/** Inline SVG for a tool's icon. `size` is in px. */
function toolIcon(trackId, size) {
  const i = TOOL_ICON[trackId];
  if (!i) return '';
  const s = size || 24;
  return `<svg class="ticon" viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true"><path d="${i.d}"/></svg>`;
}

// Re-point each track's accent colour at its real brand colour.
TRACKS.forEach(t => {
  const b = BRAND[t.id];
  if (!b) return;
  t.color = b.primary;
  t.colorSoft = b.primary + '1f';   // 12% alpha
});

/* ---------------------------------------------------------
   DERIVED STRUCTURES
   --------------------------------------------------------- */
const DAYS_PER_WEEK = 7;

// Flat list of all modules in program order, with global day offsets.
const MODULES = [];
TRACKS.forEach(track => {
  track.modules.forEach(mod => {
    MODULES.push({
      track,
      mod,
      startDay: (mod.week - 1) * DAYS_PER_WEEK   // 0-indexed global day
    });
  });
});
MODULES.sort((a, b) => a.startDay - b.startDay);

const TOTAL_DAYS = MODULES.length * DAYS_PER_WEEK;   // 84

// Fast lookup: 'trackId:week' -> position in MODULES (0 = Week 1 ... 11 = Week 12)
const MODULE_IDX = {};
MODULES.forEach((entry, i) => { MODULE_IDX[`${entry.track.id}:${entry.mod.week}`] = i; });

const taskId = (trackId, week, i) => `${trackId}:w${week}:t${i}`;

// Global day index (0-83) -> { track, mod, taskIndex, text }
function dayInfo(dayIdx) {
  if (dayIdx < 0 || dayIdx >= TOTAL_DAYS) return null;
  const entry = MODULES[Math.floor(dayIdx / DAYS_PER_WEEK)];
  const taskIndex = dayIdx % DAYS_PER_WEEK;
  return {
    track: entry.track,
    mod: entry.mod,
    taskIndex,
    text: entry.mod.tasks[taskIndex],
    id: taskId(entry.track.id, entry.mod.week, taskIndex)
  };
}

/* ---------------------------------------------------------
   STORAGE (with graceful in-memory fallback)
   --------------------------------------------------------- */
/* Multi-profile storage.
   Every profile gets its own namespaced key, so several people can share
   one browser (or one person can keep separate runs) without colliding.
     aiVaRoadmap.profiles  -> [{ id, name, created }]
     aiVaRoadmap.active    -> id of the profile in use
     aiVaRoadmap.v1.<id>   -> that profile's saved state                     */
const ROOT       = 'aiVaRoadmap';
const IDX_KEY    = ROOT + '.profiles';
const ACTIVE_KEY = ROOT + '.active';
const LEGACY_KEY = ROOT + '.v1';                 // pre-profiles single store
const dataKey    = id => `${ROOT}.v1.${id}`;
const newId      = () => 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

let storageOK = true;

(function testStorage() {
  try {
    const probe = '__probe__';
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
  } catch (e) {
    storageOK = false;
  }
})();

let memoryStore = null;
let memProfiles = [];        // in-memory fallbacks when localStorage is blocked
let memActive   = null;

const defaultState = () => ({
  done: {},            // taskId -> true
  startDate: '',       // 'YYYY-MM-DD'
  name: '',
  theme: 'light',
  view: 'overview',
  activeTrack: null,
  openModules: {},     // 'trackId:week' -> true
  autoplay: true,      // autoplay track intro videos (muted)
  fish: 0,             // study-buddy score
  fishBest: 0,         // highest score ever recorded
  muted: false,        // study-buddy sound
  dockHidden: false,
  dockPos: null,       // legacy, cleared on load
  dockSize: null,      // legacy, cleared on load
  email: '',           // stays in this browser; only used to pre-fill mailto
  photo: '',           // 256px data-URI avatar, this browser only
  onboarded: false,
  musicOn: true,       // lofi player
  musicVol: 35,
  musicId: 'CFGLoQIhmow',
  aboutVol: 45,        // About-panel theme song
  aboutMuted: false,
  utilHidden: false,
  tracksOpen: true,      // sidebar Tracks dropdown
  timer: { running: false, accum: 0, notified: false }
});

/* ---------- profile registry ---------- */
function readProfiles() {
  if (!storageOK) return memProfiles;
  try { return JSON.parse(window.localStorage.getItem(IDX_KEY)) || []; }
  catch (e) { return []; }
}
function writeProfiles(list) {
  if (!storageOK) { memProfiles = list; return; }
  try { window.localStorage.setItem(IDX_KEY, JSON.stringify(list)); } catch (e) {}
}
function activeId() {
  if (!storageOK) return memActive;
  try { return window.localStorage.getItem(ACTIVE_KEY) || null; } catch (e) { return null; }
}
function setActiveId(id) {
  if (!storageOK) { memActive = id; return; }
  try { window.localStorage.setItem(ACTIVE_KEY, id); } catch (e) {}
}
function createProfile(name) {
  const id = newId();
  const list = readProfiles();
  list.push({ id, name: (name || 'New profile').trim(), created: Date.now() });
  writeProfiles(list);
  setActiveId(id);
  return id;
}

/** One-time move of pre-profile progress into "Profile 1" so nobody loses work. */
function migrateLegacy() {
  if (!storageOK) return;
  let legacy = null;
  try { legacy = window.localStorage.getItem(LEGACY_KEY); } catch (e) { return; }
  if (!legacy || readProfiles().length) return;
  let parsed = {};
  try { parsed = JSON.parse(legacy) || {}; } catch (e) {}
  const id = newId();
  writeProfiles([{ id, name: (parsed.name || '').trim() || 'Profile 1', created: Date.now() }]);
  setActiveId(id);
  try {
    window.localStorage.setItem(dataKey(id), legacy);
    window.localStorage.removeItem(LEGACY_KEY);
  } catch (e) {}
}

function loadState() {
  if (!storageOK) return memoryStore || (memoryStore = defaultState());
  migrateLegacy();
  let id = activeId();
  const list = readProfiles();
  if (!id || !list.some(p => p.id === id)) id = list.length ? list[0].id : null;
  if (!id) return defaultState();               // no profile yet — welcome will make one
  setActiveId(id);
  try {
    const raw = window.localStorage.getItem(dataKey(id));
    if (!raw) return defaultState();
    return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  if (!storageOK) { memoryStore = state; return; }
  try {
    let id = activeId();
    if (!id) id = createProfile(state.name || 'Profile 1');
    window.localStorage.setItem(dataKey(id), JSON.stringify(state));
    // keep the display name in the registry in step with the profile's own name
    const list = readProfiles();
    const me   = list.find(p => p.id === id);
    if (me && (state.name || '').trim() && me.name !== state.name.trim()) {
      me.name = state.name.trim();
      writeProfiles(list);
    }
  } catch (e) {
    storageOK = false;
    showStorageWarning('Saving to this browser just failed (storage may be full or blocked). Progress is now held in memory only and will be lost on refresh.');
  }
}

let state = loadState();

/* ---------------------------------------------------------
   DOM SHORTCUTS
   --------------------------------------------------------- */
const $  = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const el = {
  sidebar:      $('#sidebar'),
  scrim:        $('#scrim'),
  menuToggle:   $('#menuToggle'),
  trackNav:     $('#trackNav'),
  trackGrid:    $('#trackGrid'),
  trackDetail:  $('#trackDetail'),
  calendar:     $('#calendar'),
  calLegend:    $('#calLegend'),
  badgeGrid:    $('#badgeGrid'),
  ringFg:       $('#ringFg'),
  ringPct:      $('#ringPct'),
  doneCount:    $('#doneCount'),
  totalCount:   $('#totalCount'),
  tracksDone:   $('#tracksDone'),
  tracksFoot:   $('#tracksFoot'),
  currentWeek:  $('#currentWeek'),
  currentWeekFoot: $('#currentWeekFoot'),
  daysLeft:     $('#daysLeft'),
  startDate:    $('#startDate'),
  focusBody:    $('#focusBody'),
  focusDayChip: $('#focusDayChip'),
  storageAlert: $('#storageAlert'),
  storageAlertText: $('#storageAlertText'),
  toast:        $('#toast'),
  certModal:    $('#certModal'),
  badgeModal:   $('#badgeModal'),
  badgeCert:    $('#badgeCert'),
  certName:     $('#certName'),
  certNameOut:  $('#certNameOut'),
  certTools:    $('#certTools'),
  certDate:     $('#certDate'),
  masterLock:   $('#masterLock'),
  masterOpen:   $('#masterOpen'),
  masterBarFill:$('#masterBarFill'),
  masterDone:   $('#masterDone'),
  navBadgeCount:$('#navBadgeCount'),
  themeLabel:   $('#themeLabel'),
  resumeBar:    $('#resumeBar'),
  resumeIco:    $('#resumeIco'),
  resumeLabel:  $('#resumeLabel'),
  resumeTask:   $('#resumeTask'),
  autoplayLabel:$('#autoplayLabel'),
  dock:         $('#dock'),
  dockToggle:   $('#dockToggle'),
  gameCanvas:   $('#gameCanvas'),
  gameScore:    $('#gameScore'),
  gameHint:     $('#gameHint'),
  gameBest:     $('#gameBest'),
  gameLives:    $('#gameLives')
};

const escapeHtml = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------------------------------------------------------
   PROGRESS MATH
   --------------------------------------------------------- */
function trackTaskIds(track) {
  const ids = [];
  track.modules.forEach(m => m.tasks.forEach((_, i) => ids.push(taskId(track.id, m.week, i))));
  return ids;
}
function trackProgress(track) {
  const ids = trackTaskIds(track);
  const done = ids.filter(id => state.done[id]).length;
  return { done, total: ids.length, pct: ids.length ? Math.round(done / ids.length * 100) : 0 };
}
function modProgress(track, mod) {
  const done = mod.tasks.filter((_, i) => state.done[taskId(track.id, mod.week, i)]).length;
  return { done, total: mod.tasks.length, pct: Math.round(done / mod.tasks.length * 100) };
}
function overallProgress() {
  const done = Object.keys(state.done).filter(k => state.done[k]).length;
  return { done, total: TOTAL_DAYS, pct: Math.round(done / TOTAL_DAYS * 100) };
}
const completedTracks = () => TRACKS.filter(t => trackProgress(t).pct === 100);

/** Progress bars shade from amber through to green as you fill them,
 *  so the colour tells you roughly how far along a track is at a glance.
 *  Nothing done at all stays grey. */
function progressTone(pct) {
  if (pct <= 0)   return "p0";     // grey  - not started
  if (pct < 34)   return "p1";     // amber - just begun
  if (pct < 67)   return "p2";     // lime  - halfway
  if (pct < 100)  return "p3";     // green - nearly there
  return "p4";                     // deep green - complete
}

/* ---------------------------------------------------------
   SEQUENTIAL UNLOCKING
   Week 1 is always open. Every later week unlocks only when
   EVERY week before it is 100% complete — so resetting an
   early week correctly re-locks everything downstream.
   --------------------------------------------------------- */
function unlockFlags() {
  const flags = [];
  let allPrevDone = true;
  MODULES.forEach((entry, i) => {
    flags[i] = allPrevDone;
    if (modProgress(entry.track, entry.mod).pct !== 100) allPrevDone = false;
  });
  return flags;
}

/** Is the module at this MODULES position unlocked? */
function isModuleUnlocked(i, flags) {
  return (flags || unlockFlags())[i] === true;
}

/** The module you must finish before position i opens. */
function prereqOf(i) {
  return i > 0 ? MODULES[i - 1] : null;
}

/** A track is unlocked once its FIRST week is unlocked. */
function isTrackUnlocked(track, flags) {
  return isModuleUnlocked(MODULE_IDX[`${track.id}:${track.modules[0].week}`], flags);
}

/** Global day index (0-83) -> unlocked? */
function isDayUnlocked(dayIdx, flags) {
  return isModuleUnlocked(Math.floor(dayIdx / DAYS_PER_WEEK), flags);
}

/** Earliest day index that is unlocked and still unchecked (or null if none). */
function nextOpenDay(flags) {
  const f = flags || unlockFlags();
  for (let d = 0; d < TOTAL_DAYS; d++) {
    const info = dayInfo(d);
    if (isDayUnlocked(d, f) && !state.done[info.id]) return d;
  }
  return null;
}

/* ---------------------------------------------------------
   DATE HELPERS
   --------------------------------------------------------- */
function parseISO(s) {
  if (!s) return null;
  const [y, m, d] = s.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}
function addDays(date, n) {
  const d = new Date(date.getTime());
  d.setDate(d.getDate() + n);
  return d;
}
function midnight(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }

/** Global day index for today, or null if no start date set. May be out of range. */
function todayIndex() {
  const start = parseISO(state.startDate);
  if (!start) return null;
  const diff = midnight(new Date()) - midnight(start);
  return Math.floor(diff / 86400000);
}
const fmtShort = d => d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
const fmtLong  = d => d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

/* ---------------------------------------------------------
   TOAST + WARNINGS
   --------------------------------------------------------- */
let toastTimer;
function toast(msg) {
  el.toast.textContent = msg;
  el.toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.toast.hidden = true; }, 3200);
}
function showStorageWarning(text) {
  el.storageAlertText.textContent = text;
  el.storageAlert.hidden = false;
}

/* ---------------------------------------------------------
   RENDER: SIDEBAR TRACK NAV
   --------------------------------------------------------- */
/** Collapse / expand the Tracks list in the sidebar. */
function syncTracksDrop() {
  const open = state.tracksOpen !== false;
  const btn  = $('#tracksDrop');
  const list = $('#trackNav');
  if (btn)  { btn.setAttribute('aria-expanded', String(open)); btn.classList.toggle('closed', !open); }
  if (list) list.hidden = !open;
  const cnt = $('#tracksCount');
  if (cnt) cnt.textContent = `${completedTracks().length}/${TRACKS.length}`;
}

function renderTrackNav() {
  const flags = unlockFlags();
  el.trackNav.innerHTML = TRACKS.map(t => {
    const p    = trackProgress(t);
    const open = isTrackUnlocked(t, flags);
    return `
      <button class="tnav ${state.view === 'track' && state.activeTrack === t.id ? 'active' : ''} ${open ? '' : 'locked'}"
              data-track="${t.id}" style="--tc:${t.color}">
        <span class="tnav-top">
          <span class="tnav-dot"></span>
          <span class="tnav-name">${escapeHtml(t.name)}</span>
          ${!open ? '<span class="tnav-lock">🔒</span>'
            : p.pct === 100 ? '<span class="tnav-check">✓</span>'
            : `<span class="tnav-pct">${p.pct}%</span>`}
        </span>
        <span class="tnav-bar"><span class="tnav-fill ${progressTone(p.pct)}" style="width:${p.pct}%"></span></span>
      </button>`;
  }).join('');
  syncTracksDrop();
}

/* ---------------------------------------------------------
   RENDER: OVERVIEW
   --------------------------------------------------------- */
function renderTrackGrid() {
  const flags = unlockFlags();
  el.trackGrid.innerHTML = TRACKS.map(t => {
    const p      = trackProgress(t);
    const open   = isTrackUnlocked(t, flags);
    const pre    = prereqOf(MODULE_IDX[`${t.id}:${t.modules[0].week}`]);
    return `
      <button class="tcard ${open ? '' : 'locked'}" data-track="${t.id}" style="--tc:${t.color};--tc-soft:${t.colorSoft}">
        <span class="tcard-top">
          <span class="tcard-ico">${open ? t.icon : '🔒'}</span>
          <span>
            <span class="tcard-weeks">${escapeHtml(t.weeksLabel)}</span>
            <span class="tcard-name" style="display:block">${escapeHtml(t.name)}</span>
          </span>
        </span>
        <span class="tcard-tag" style="display:block">${escapeHtml(t.tagline)}</span>
        <span class="tcard-bar" style="display:block"><span class="tcard-fill ${progressTone(p.pct)}" style="width:${p.pct}%"></span></span>
        <span class="tcard-meta">
          ${open
            ? `<span>${p.done} / ${p.total} tasks</span>
               <span class="${p.pct === 100 ? 'tcard-done' : ''}">${p.pct === 100 ? '✓ Complete' : p.pct + '%'}</span>`
            : `<span class="tcard-locked">🔒 Needs Week ${pre.mod.week} — ${escapeHtml(pre.track.name)}</span>`}
        </span>
      </button>`;
  }).join('');
}

function renderStats() {
  const p = overallProgress();
  const C = 2 * Math.PI * 52;
  el.ringFg.style.strokeDasharray  = C;
  el.ringFg.style.strokeDashoffset = C * (1 - p.pct / 100);
  el.ringPct.textContent   = p.pct + '%';
  el.doneCount.textContent = p.done;
  el.totalCount.textContent = p.total;

  const ct = completedTracks().length;
  el.tracksDone.innerHTML = `${ct}<span class="stat-of">/${TRACKS.length}</span>`;
  el.tracksFoot.textContent = ct === TRACKS.length
    ? 'All tracks complete — Master Certificate unlocked'
    : ct > 0 ? `${ct} badge${ct > 1 ? 's' : ''} unlocked` : 'Finish a track to unlock its badge';

  const remaining = p.total - p.done;
  el.daysLeft.innerHTML = `${remaining}<span class="stat-of"> days</span>`;

  const ti = todayIndex();
  if (ti === null) {
    el.currentWeek.textContent = '—';
    el.currentWeekFoot.textContent = 'Set a start date to begin';
  } else if (ti < 0) {
    el.currentWeek.textContent = 'Soon';
    el.currentWeekFoot.textContent = `Program starts in ${-ti} day${-ti > 1 ? 's' : ''}`;
  } else if (ti >= TOTAL_DAYS) {
    el.currentWeek.textContent = 'Done';
    el.currentWeekFoot.textContent = 'Past day 84 — finish any open tasks';
  } else {
    const info = dayInfo(ti);
    el.currentWeek.textContent = 'W' + info.mod.week;
    el.currentWeekFoot.textContent = info.track.name;
  }
}

/* ---------------------------------------------------------
   GREETING — rotates on every open, always uses your name
   --------------------------------------------------------- */
const GREETINGS = [
  { e: '👋', t: 'good to see you back. one hour is all today asks for.' },
  { e: '☕', t: 'brew something, open one module, and let the hour do the work.' },
  { e: '🎯', t: 'you do not have to finish the roadmap today. just today\'s task.' },
  { e: '🧱', t: 'twelve weeks is just eighty-four ordinary hours stacked up.' },
  { e: '🌱', t: 'the skills compound. week 9 will make sense because of week 1.' },
  { e: '⚡', t: 'momentum beats motivation. open the track and start.' },
  { e: '🧭', t: 'every hour here moves you further from hourly work.' },
  { e: '🔧', t: 'the tools are learnable. the discipline is the rare part.' },
  { e: '🚀', t: 'clients pay for what you can build, not what you have watched.' },
  { e: '🌤️', t: 'a slow day still counts. show up and check one box.' },
  { e: '📈', t: 'you are closer than when you last closed this tab.' },
  { e: '🧠', t: 'confused is what learning feels like from the inside. keep going.' },
  { e: '🏗️', t: 'build something small today. small things become the portfolio.' },
  { e: '🔥', t: 'seven days a week beats a heroic weekend. steady wins.' }
];

function renderGreeting() {
  const g   = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
  const who = (state.name || '').trim().split(' ')[0];
  const hr  = new Date().getHours();
  const part = hr < 12 ? 'Morning' : hr < 18 ? 'Afternoon' : 'Evening';
  $('#greetEmoji').textContent = g.e;
  $('#greetText').innerHTML =
    `<strong>${part}, ${escapeHtml(who || 'there')}</strong> — ${escapeHtml(g.t)}`;
}

/* ---------------------------------------------------------
   RESUME BAR — one click back to exactly where you stopped
   --------------------------------------------------------- */
let resumeTarget = null;   // { trackId, week, dayIdx, taskId } or null

function renderResume() {
  const flags = unlockFlags();
  const nd    = nextOpenDay(flags);

  if (nd === null) {
    resumeTarget = null;
    el.resumeIco.textContent = '🏆';
    el.resumeLabel.textContent = 'All 84 tasks complete';
    el.resumeTask.textContent = 'Go collect your Master Certificate';
    el.resumeBar.classList.add('is-done');
    return;
  }

  const info  = dayInfo(nd);
  const first = overallProgress().done === 0;
  resumeTarget = { trackId: info.track.id, week: info.mod.week, dayIdx: nd, taskId: info.id };

  el.resumeBar.classList.remove('is-done');
  el.resumeIco.textContent = first ? '🚀' : '▶';
  el.resumeLabel.textContent = first
    ? `Start here · Day 1 · ${info.track.name}`
    : `Continue where you left off · Day ${nd + 1} · ${info.track.name} · Week ${info.mod.week}`;
  el.resumeTask.textContent = info.text;
}

function goToResume() {
  if (!resumeTarget) { setView('certificates'); return; }
  const { trackId, week, taskId: tid } = resumeTarget;
  state.openModules[`${trackId}:${week}`] = true;
  setView('track', trackId);
  // Wait for the track view to paint, then scroll the exact task into view and flash it.
  requestAnimationFrame(() => {
    const node = document.querySelector(`.task[data-task="${tid}"]`);
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    node.classList.add('flash');
    setTimeout(() => node.classList.remove('flash'), 1600);
  });
}

function renderFocus() {
  const ti = todayIndex();

  if (ti === null) {
    el.focusDayChip.textContent = 'Day —';
    el.focusBody.innerHTML = `<p class="focus-empty">Set your start date on the right to unlock today's 1-hour task →</p>`;
    return;
  }
  if (ti < 0) {
    el.focusDayChip.textContent = 'Not started';
    const first = dayInfo(0);
    el.focusBody.innerHTML = `
      <div class="focus-track">Starts in ${-ti} day${-ti > 1 ? 's' : ''} · first up: ${escapeHtml(first.track.name)}</div>
      <div class="focus-task">${escapeHtml(first.text)}</div>
      <div class="focus-week">Week 1 · ${escapeHtml(first.mod.title)}</div>`;
    return;
  }
  if (ti >= TOTAL_DAYS) {
    const p = overallProgress();
    el.focusDayChip.textContent = 'Day 84+';
    el.focusBody.innerHTML = `
      <div class="focus-track">Program window complete</div>
      <div class="focus-task">${p.pct === 100 ? 'Every task checked off. Go print your Master Certificate.' : `You're past day 84 with ${p.total - p.done} task${p.total - p.done > 1 ? 's' : ''} still open — mop them up.`}</div>
      <div class="focus-actions">
        <button class="focus-btn" data-view-jump="${p.pct === 100 ? 'certificates' : 'calendar'}">${p.pct === 100 ? 'Open certificates' : 'Find what\'s left'}</button>
      </div>`;
    return;
  }

  const flags = unlockFlags();

  // Scheduled day sits in a locked week — you're behind. Point at the real next task.
  if (!isDayUnlocked(ti, flags)) {
    const nd = nextOpenDay(flags);
    el.focusDayChip.textContent = `Day ${ti + 1} · catching up`;
    if (nd === null) {
      el.focusBody.innerHTML = `<p class="focus-empty">Everything currently unlocked is complete. Nice.</p>`;
      return;
    }
    const ni = dayInfo(nd);
    el.focusBody.innerHTML = `
      <div class="focus-track">🔒 The calendar says Day ${ti + 1}, but that week is still locked — here's where you actually are</div>
      <div class="focus-task">${escapeHtml(ni.text)}</div>
      <div class="focus-week">Day ${nd + 1} · ${escapeHtml(ni.track.name)} · Week ${ni.mod.week}</div>
      <div class="focus-actions">
        <button class="focus-btn" id="focusCheck">Mark this complete</button>
        <button class="focus-link" style="background:none;border:0;border-bottom:1px solid rgba(255,255,255,.4);cursor:pointer;padding:0 0 1px" data-open-track="${ni.track.id}" data-open-week="${ni.mod.week}">Open this week</button>
      </div>`;
    const b = $('#focusCheck');
    if (b) b.addEventListener('click', () => toggleTask(ni.id, true));
    return;
  }

  const info = dayInfo(ti);
  const isDone = !!state.done[info.id];
  const vid = info.mod.resources.find(r => r.t === 'video') || info.mod.resources[0];

  el.focusDayChip.textContent = `Day ${ti + 1} of ${TOTAL_DAYS}`;
  el.focusBody.innerHTML = `
    <div class="focus-track">${info.track.icon} ${escapeHtml(info.track.name)} · Week ${info.mod.week} · Day ${info.taskIndex + 1} of 7</div>
    <div class="focus-task">${escapeHtml(info.text)}</div>
    <div class="focus-week">${escapeHtml(info.mod.title)}</div>
    <div class="focus-actions">
      <button class="focus-btn ${isDone ? 'done' : ''}" id="focusCheck">
        ${isDone ? '✓ Done for today' : 'Mark today complete'}
      </button>
      ${vid ? `<a class="focus-link" href="${vid.url}" target="_blank" rel="noopener">▶ ${escapeHtml(vid.title.length > 52 ? vid.title.slice(0, 52) + '…' : vid.title)}</a>` : ''}
      <button class="focus-link" style="background:none;border:0;border-bottom:1px solid rgba(255,255,255,.4);cursor:pointer;padding:0 0 1px" data-open-track="${info.track.id}" data-open-week="${info.mod.week}">Open this week</button>
    </div>`;

  const btn = $('#focusCheck');
  if (btn) btn.addEventListener('click', () => toggleTask(info.id, !state.done[info.id]));
}

/* ---------------------------------------------------------
   RENDER: TRACK DETAIL
   --------------------------------------------------------- */
function renderTrackDetail() {
  const track = TRACKS.find(t => t.id === state.activeTrack);
  if (!track) { setView('overview'); return; }

  const p     = trackProgress(track);
  const ti    = todayIndex();
  const flags = unlockFlags();
  const brand = BRAND[track.id];

  const modulesHtml = track.modules.map(mod => {
    const mp     = modProgress(track, mod);
    const key    = `${track.id}:${mod.week}`;
    const mIdx   = MODULE_IDX[key];
    const locked = !isModuleUnlocked(mIdx, flags);
    const pre    = prereqOf(mIdx);
    const open   = !locked && !!state.openModules[key];

    // A locked week shows only its title and what unlocks it.
    if (locked) {
      return `
        <div class="module locked" data-mod="${key}" style="--tc:${track.color};--tc-soft:${track.colorSoft}">
          <div class="mod-head is-locked">
            <span class="mod-lock">🔒</span>
            <span class="mod-week">Week ${mod.week}</span>
            <span class="mod-titles">
              <span class="mod-title" style="display:block">${escapeHtml(mod.title)}</span>
              <span class="mod-goal" style="display:block">Unlocks when you finish Week ${pre.mod.week} — ${escapeHtml(pre.track.name)}</span>
            </span>
            <span class="mod-count">
              ${mp.done > 0 ? `<span class="lock-kept">${mp.done}/${mp.total} kept</span>` : ''}
              <span class="lock-pill">Locked</span>
            </span>
          </div>
        </div>`;
    }

    const resHtml = mod.resources.map(r => `
      <a class="res" href="${r.url}" target="_blank" rel="noopener">
        <span class="res-type ${r.t}">${r.t === 'video' ? '▶' : r.t === 'course' ? '★' : '§'}</span>
        <span class="res-text">
          <span class="res-title" style="display:block">${escapeHtml(r.title)}</span>
          <span class="res-src" style="display:block">${escapeHtml(r.src)}</span>
        </span>
        <span class="res-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg></span>
      </a>`).join('');

    const tasksHtml = mod.tasks.map((text, i) => {
      const id       = taskId(track.id, mod.week, i);
      const checked  = !!state.done[id];
      const globalDay = (mod.week - 1) * DAYS_PER_WEEK + i;
      const isToday  = ti !== null && ti === globalDay;
      return `
        <label class="task ${isToday ? 'is-today' : ''}" data-task="${id}">
          <input type="checkbox" ${checked ? 'checked' : ''} />
          <span class="box"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span>
          <span class="task-body">
            <span class="task-day">Day ${globalDay + 1} · Week ${mod.week} day ${i + 1}</span>
            <span class="task-text">${escapeHtml(text)}${isToday ? '<span class="task-today-flag">Today</span>' : ''}</span>
          </span>
        </label>`;
    }).join('');

    return `
      <div class="module ${open ? 'open' : ''}" data-mod="${key}" style="--tc:${track.color};--tc-soft:${track.colorSoft}">
        <button class="mod-head" data-toggle="${key}" aria-expanded="${open}">
          <span class="mod-chev"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></span>
          <span class="mod-week">Week ${mod.week}</span>
          <span class="mod-titles">
            <span class="mod-title" style="display:block">${escapeHtml(mod.title)}</span>
            <span class="mod-goal" style="display:block">${escapeHtml(mod.goal)}</span>
          </span>
          <span class="mod-count">
            ${mp.pct === 100 ? '<span class="mod-tick">✓</span>' : ''}
            <span>${mp.done}/${mp.total}</span>
            <span class="mod-mini"><span class="mod-mini-fill" style="width:${mp.pct}%"></span></span>
          </span>
        </button>
        <div class="mod-body" ${open ? '' : 'hidden'}>
          <div class="res-block">
            <div class="res-label">Watch &amp; read first</div>
            <div class="res-list">${resHtml}</div>
          </div>
          <div class="task-label">Daily tasks — one per day, about an hour each</div>
          <div class="tasks">${tasksHtml}</div>
          <div class="deliver"><strong>End of week you should have:</strong> ${escapeHtml(mod.deliverable)}</div>
          ${mp.done > 0 ? `<div class="mod-foot">
            <button class="mini-reset" data-reset-week="${track.id}" data-week="${mod.week}">
              <svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg> Uncheck week ${mod.week}
            </button>
          </div>` : ''}
        </div>
      </div>`;
  }).join('');

  el.trackDetail.innerHTML = `
    <button class="back-btn" data-view-jump="overview">
      <svg viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg> All tracks
    </button>
    <div class="hero" style="background:${brand.grad}">
      <div class="hero-body">
        <div class="hero-left">
          <div class="hero-eyebrow">${escapeHtml(track.weeksLabel)}</div>
          <h1 class="hero-title"><span class="hero-ico">${track.icon}</span> ${escapeHtml(track.name)}</h1>
          <p class="hero-tag">${escapeHtml(track.tagline)}</p>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-pct">${p.pct}%</div>
              <div class="hero-bar"><div class="hero-fill" style="width:${p.pct}%"></div></div>
              <div class="hero-sub">${p.done} of ${p.total} tasks complete</div>
            </div>
            ${p.done > 0 ? `<button class="hero-reset" data-reset-track="${track.id}">
              <svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg> Reset track
            </button>` : ''}
          </div>
        </div>
        <div class="hero-video">
          <div class="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${brand.intro.id}?${state.autoplay === false ? 'rel=0&modestbranding=1' : 'autoplay=1&mute=1&rel=0&modestbranding=1'}"
              title="${escapeHtml(brand.intro.title)}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="video-meta">
            <span class="video-label">${state.autoplay === false ? 'Intro video' : '▶ Playing muted — click the video to unmute'}</span>
            <a class="video-out" href="https://www.youtube.com/watch?v=${brand.intro.id}" target="_blank" rel="noopener">Open on YouTube ↗</a>
          </div>
        </div>
      </div>
    </div>
    ${(() => {
      if (isTrackUnlocked(track, flags)) return '';
      const pre = prereqOf(MODULE_IDX[`${track.id}:${track.modules[0].week}`]);
      return `<div class="locked-banner">
        <span class="locked-banner-ico">🔒</span>
        <span>
          <strong>This track is locked.</strong>
          Finish <button class="linkish" data-track="${pre.track.id}">Week ${pre.mod.week} — ${escapeHtml(pre.track.name)}</button> to unlock it.
          You can still read the briefing below to see what's coming.
        </span>
      </div>`;
    })()}
    <div class="brief">
      <div class="brief-box"><h3>What it actually is</h3><p>${track.whatItIs}</p></div>
      <div class="brief-box"><h3>When you'd reach for it</h3><p>${track.whenToReach}</p></div>
    </div>
    ${modulesHtml}`;
}

/* ---------------------------------------------------------
   RENDER: CALENDAR
   --------------------------------------------------------- */
function renderCalendar() {
  el.calLegend.innerHTML = TRACKS.map(t =>
    `<span class="leg" style="--tc:${t.color}"><span class="leg-dot"></span>${escapeHtml(t.name)}</span>`
  ).join('');

  const start = parseISO(state.startDate);
  const ti    = todayIndex();
  const flags = unlockFlags();

  el.calendar.innerHTML = MODULES.map((entry, wi) => {
    const { track, mod } = entry;
    const locked = !isModuleUnlocked(wi, flags);
    const pre    = prereqOf(wi);

    const days = mod.tasks.map((text, i) => {
      const gd      = wi * DAYS_PER_WEEK + i;
      const id      = taskId(track.id, mod.week, i);
      const done    = !!state.done[id];
      const isToday = ti !== null && ti === gd;
      const date    = start ? addDays(start, gd) : null;
      const short   = text.length > 74 ? text.slice(0, 74).trim() + '…' : text;
      return `
        <button class="cal-day ${done ? 'done' : ''} ${isToday ? 'today' : ''} ${locked ? 'locked' : ''}"
                data-task="${id}" style="--tc:${track.color}"
                title="${locked ? 'Locked — finish Week ' + pre.mod.week + ' first' : escapeHtml(text)}">
          <span class="cal-dtop">
            <span class="cal-dnum">Day ${gd + 1}</span>
            ${isToday ? '<span class="cal-todaytag">Today</span>' : (date ? `<span class="cal-date">${fmtShort(date)}</span>` : '')}
            <span class="cal-check">${locked ? '<span class="cal-lock">🔒</span>' : ''}</span>
          </span>
          <span class="cal-dtext">${escapeHtml(short)}</span>
        </button>`;
    }).join('');

    return `
      <div class="cal-week ${locked ? 'locked' : ''}" style="--tc:${track.color}">
        <div class="cal-wlabel">
          <div class="cal-wnum">Week ${mod.week}${locked ? ' 🔒' : ''}</div>
          <div class="cal-wname">${escapeHtml(track.name)}</div>
        </div>
        ${days}
      </div>`;
  }).join('');
}

/* ---------------------------------------------------------
   RENDER: CERTIFICATES
   --------------------------------------------------------- */
function renderBadges() {
  el.badgeGrid.innerHTML = TRACKS.map(t => {
    const p = trackProgress(t);
    const unlocked = p.pct === 100;
    return `
      <div class="badge ${unlocked ? 'unlocked' : 'locked'}" ${unlocked ? `data-badge="${t.id}" role="button" tabindex="0"` : ''}
           style="--tc:${t.color};--tc-soft:${t.colorSoft}">
        <div class="badge-medal">${unlocked ? toolIcon(t.id, 26) : '🔒'}</div>
        <div class="badge-name">${escapeHtml(t.name)}</div>
        <div class="badge-status">${unlocked ? 'Certified' : `${p.done}/${p.total} tasks`}</div>
        ${unlocked ? '<div class="badge-cta">View certificate →</div>' : ''}
      </div>`;
  }).join('');

  const ct = completedTracks().length;
  el.masterDone.textContent = ct;
  el.masterBarFill.style.width = (ct / TRACKS.length * 100) + '%';

  const all = ct === TRACKS.length;
  el.masterLock.hidden = all;
  el.masterOpen.hidden = !all;

  el.navBadgeCount.hidden = ct === 0;
  el.navBadgeCount.textContent = ct;
}

function renderCertificate() {
  el.certTools.innerHTML = TRACKS.map(t =>
    `<li style="--tc:${t.color}">${toolIcon(t.id, 15)}<span>${escapeHtml(t.name)}</span></li>`
  ).join('');
  el.certNameOut.textContent = state.name || 'Your Name';
  el.certName.value = state.name || '';
  el.certDate.textContent = fmtLong(new Date());
  // the master certificate gets the 9th cat, so it differs from all eight tracks
  const cat = $('#certCat');
  if (cat) cat.innerHTML = catPortrait(8, '#4f46e5');
}

function openBadgeCert(trackId) {
  const t = TRACKS.find(x => x.id === trackId);
  if (!t) return;
  const weeks = t.modules.map(m => `Week ${m.week}: ${m.title}`);
  const b = BRAND[t.id];
  el.badgeCert.innerHTML = `
    <div class="cert-frame" style="--tc:${t.color};--tc-ink:${b ? b.ink : t.color}">
      <div class="cert-inner">

        <div class="cert-paws" aria-hidden="true">
          <svg viewBox="0 0 120 120"><use href="#pawset"/></svg>
        </div>

        <div class="cert-brand"><span class="cert-brand-text">Visual Studio Joe</span></div>

        <div class="cert-cat">${catPortrait(TRACKS.indexOf(t), t.color)}</div>
        <div class="cert-toolmark" style="background:${t.color}">${toolIcon(t.id, 30)}</div>

        <p class="cert-kicker">Certificate of Completion</p>
        <div class="cert-rule" aria-hidden="true"><span></span><i>❋</i><span></span></div>
        <h3 class="cert-title">${escapeHtml(t.name)}</h3>
        <p class="cert-sub">${escapeHtml(t.weeksLabel)} · ${trackProgress(t).total} daily tasks</p>

        <p class="cert-awarded">This certifies that</p>
        <p class="cert-name">${escapeHtml(state.name || 'Your Name')}</p>
        <div class="cert-nameline" aria-hidden="true"></div>

        <p class="cert-body">has completed every module in this track, covering:</p>
        <ul class="cert-tools cert-weeks">${weeks.map(w => `<li><span>${escapeHtml(w)}</span></li>`).join('')}</ul>

        <div class="cert-foot">
          <div class="cert-foot-col">
            <div class="cert-foot-top">${fmtLong(new Date())}</div>
            <div class="cert-line"></div>
            <div class="cert-foot-label">Date of completion</div>
          </div>
          <div class="cert-seal-wrap" aria-hidden="true">
            <div class="cert-seal" style="border-color:${t.color};color:${t.color}">
              <svg viewBox="0 0 24 24"><use href="#paw"/></svg>
              <span>CERTIFIED</span>
            </div>
          </div>
          <div class="cert-foot-col">
            <div class="cert-foot-top cert-sig">Joemark Basa</div>
            <div class="cert-line"></div>
            <div class="cert-foot-label">App developer</div>
          </div>
        </div>

        <p class="cert-disclaimer">
          For fun, not for hiring. This is a personal-project completion record from an
          independently built roadmap — not an accredited qualification, and it carries no formal
          recognition. It simply says you finished this course. ${escapeHtml(t.name)}'s own official
          certification, if it has one, comes from ${escapeHtml(t.name)} themselves.
        </p>
      </div>
    </div>`;
  const pngBtn = $('#pngBadgeBtn');
  if (pngBtn) pngBtn.dataset.track = trackId;
  openModal(el.badgeModal);
}

/* ---------------------------------------------------------
   VIEW ROUTING
   --------------------------------------------------------- */
function setView(view, trackId) {
  state.view = view;
  if (trackId) state.activeTrack = trackId;
  saveState();

  ['overview', 'track', 'calendar', 'compare', 'certificates'].forEach(v => {
    const node = $('#view-' + v);
    if (node) node.hidden = (v !== view);
  });

  $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === view));

  if (view === 'track')        renderTrackDetail();
  if (view === 'calendar')     renderCalendar();
  if (view === 'certificates'){ renderBadges(); renderCertificate(); }

  renderTrackNav();
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/* ---------------------------------------------------------
   TASK TOGGLING
   --------------------------------------------------------- */
function toggleTask(id, value) {
  // Refuse anything inside a locked week, whatever route the click came from.
  const parts = id.split(':');                       // trackId : wN : tI
  const idx   = MODULE_IDX[`${parts[0]}:${parts[1].slice(1)}`];
  if (idx !== undefined && !isModuleUnlocked(idx)) {
    const pre = prereqOf(idx);
    toast(pre ? `🔒 Locked — finish Week ${pre.mod.week} (${pre.track.name}) first` : '🔒 Locked');
    renderAll();
    return;
  }

  const wasTrack = TRACKS.find(t => id.startsWith(t.id + ':'));
  const before   = wasTrack ? trackProgress(wasTrack).pct : 0;
  const beforeAll = overallProgress().pct;

  if (value) state.done[id] = true; else delete state.done[id];
  saveState();

  renderAll();

  if (wasTrack) {
    const after = trackProgress(wasTrack).pct;
    if (before < 100 && after === 100) {
      // celebrate in that tool's own brand colours
      const b = BRAND[wasTrack.id];
      confetti({ count: 140, colors: [wasTrack.color, b ? b.ink : '#4f46e5', '#fbbf24', '#ffffff', '#22c55e'] });
      try { Sfx.level(); } catch (_) {}
      toast(`🎉 ${wasTrack.name} track complete — certificate unlocked`);
    }
  }
  if (beforeAll < 100 && overallProgress().pct === 100) {
    setTimeout(() => confetti({ count: 260 }), 250);   // a bigger one for the lot
    setTimeout(() => {
      setView('certificates');
      renderCertificate();
      openModal(el.certModal);
      confetti({ count: 200 });
      toast('🏆 All 8 tracks complete — Master Certificate unlocked');
    }, 700);
  }
}

/** Clear every checked task in one track. */
function resetTrack(trackId) {
  const track = TRACKS.find(t => t.id === trackId);
  if (!track) return;
  const p = trackProgress(track);
  if (!p.done) return;

  const ok = window.confirm(
    `Uncheck all ${p.done} completed task${p.done > 1 ? 's' : ''} in the ${track.name} track?\n\n` +
    `This clears ${track.weeksLabel} only — every other track keeps its checked tasks.\n\n` +
    `Note: because tracks unlock in order, any later track will re-lock until you finish this one again. ` +
    `Its progress is kept, just hidden behind the lock.`
  );
  if (!ok) return;

  trackTaskIds(track).forEach(id => { delete state.done[id]; });
  saveState();
  renderAll();
  toast(`${track.name} track reset to zero`);
}

/** Clear every checked task in one week/module. */
function resetModule(trackId, week) {
  const track = TRACKS.find(t => t.id === trackId);
  if (!track) return;
  const mod = track.modules.find(m => m.week === Number(week));
  if (!mod) return;
  const mp = modProgress(track, mod);
  if (!mp.done) return;

  const ok = window.confirm(
    `Uncheck all ${mp.done} completed task${mp.done > 1 ? 's' : ''} in Week ${mod.week}?\n\n` +
    `"${mod.title}"\n\n` +
    `The rest of the ${track.name} track keeps its checked tasks, but every week after this one ` +
    `will re-lock until you complete Week ${mod.week} again.`
  );
  if (!ok) return;

  mod.tasks.forEach((_, i) => { delete state.done[taskId(track.id, mod.week, i)]; });
  saveState();
  renderAll();
  toast(`Week ${mod.week} reset to zero`);
}

/* ---------------------------------------------------------
   MODALS
   --------------------------------------------------------- */
let lastFocused = null;
function openModal(modal) {
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  const focusable = modal.querySelector('input, button');
  if (focusable) focusable.focus();
}
function closeModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = '';
  // leaving About: kill the theme song, hand the lofi back
  if (modal.id === 'aboutModal' && typeof AboutMusic !== 'undefined') AboutMusic.stop();
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

/* ---------------------------------------------------------
   SIDEBAR (mobile)
   --------------------------------------------------------- */
function openSidebar() {
  el.sidebar.classList.add('open');
  el.scrim.hidden = false;
  el.menuToggle.setAttribute('aria-expanded', 'true');
}
function closeSidebar() {
  el.sidebar.classList.remove('open');
  el.scrim.hidden = true;
  el.menuToggle.setAttribute('aria-expanded', 'false');
}

/* ---------------------------------------------------------
   THEME
   --------------------------------------------------------- */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  el.themeLabel.textContent = state.theme === 'dark' ? 'Light mode' : 'Dark mode';
}
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme();
}

/* ---------------------------------------------------------
   MASTER RENDER
   --------------------------------------------------------- */
function renderAll() {
  renderStats();
  renderResume();
  renderFocus();
  renderTrackGrid();
  renderTrackNav();
  if (state.view === 'track')        renderTrackDetail();
  if (state.view === 'calendar')     renderCalendar();
  if (state.view === 'certificates'){ renderBadges(); renderCertificate(); }
  else renderBadges();  // keeps the sidebar badge counter fresh
}

/* ---------------------------------------------------------
   EVENTS
   --------------------------------------------------------- */
document.addEventListener('click', e => {

  if (e.target.closest('#gameReset')) {
    if (window.confirm(
      `Reset the Study Buddy score from ${state.fish || 0} back to zero?\n\n` +
      `Your best-ever score of ${state.fishBest || 0} is kept.`
    )) {
      Game.resetScore();
      toast('Score reset — lives back to 3');
    }
    return;
  }
  if (e.target.closest('#tracksDrop')) {
    state.tracksOpen = state.tracksOpen === false;   // false -> true, true/undefined -> false
    saveState();
    syncTracksDrop();
    return;
  }
  if (e.target.closest('#settingsBtn')) { toggleSettings(); return; }
  if (e.target.closest('#pcard'))       { openWelcome(); return; }
  if (e.target.closest('#aboutMute'))   { AboutMusic.toggleMute(); return; }
  if (e.target.closest('#aboutBtn')) {
    closeSettings();
    renderAboutLinks();
    openModal($('#aboutModal'));
    AboutMusic.start();
    return;
  }
  if (e.target.closest('#wPhotoPick'))  { $('#wPhotoFile').click(); return; }
  if (e.target.closest('#wPhotoClear')) { state.photo = ''; saveState(); syncAvatar(); toast('Photo removed'); return; }

  // any click outside the settings menu closes it
  if (settingsOpen() && !e.target.closest('#settingsMenu') && !e.target.closest('#settingsBtn')) {
    closeSettings();
  }

  if (e.target.closest('#profileBtn'))  { closeSettings(); openWelcome(); return; }
  if (e.target.closest('#switchBtn'))   { closeSettings(); openProfiles(); return; }
  if (e.target.closest('#pfClose'))     { closeProfiles(); return; }
  if (e.target.closest('#pfNew'))       { addProfile(); return; }
  if (e.target.closest('#pfExport'))    { exportProgress(); return; }
  if (e.target.closest('#pfImport'))    { $('#pfFile').click(); return; }

  const sw = e.target.closest('[data-switch]');
  if (sw)  { switchProfile(sw.dataset.switch); return; }
  const dl = e.target.closest('[data-del]');
  if (dl)  { deleteProfile(dl.dataset.del); return; }

  if (e.target.closest('#gameTalk'))    { Game.talk(); return; }
  if (e.target.closest('#timerToggle')) { Timer.toggle(); return; }
  if (e.target.closest('#timerReset'))  { Timer.reset(); toast('Focus timer reset'); return; }
  if (e.target.closest('#musicToggle')) { Music.toggle(); return; }
  if (e.target.closest('#hourDone'))    { $('#hourModal').hidden = true; document.body.style.overflow=''; Timer.pause(); document.title='AI Automation VA Roadmap'; toast('Nice hour. See you tomorrow.'); return; }
  if (e.target.closest('#hourMore'))    { $('#hourModal').hidden = true; document.body.style.overflow=''; Timer.keepGoing(); document.title='AI Automation VA Roadmap'; return; }
  if (e.target.closest('#utilCollapse')){ state.utilHidden = true;  saveState(); $('#utilBar').hidden = true;  $('#utilOpen').hidden = false; return; }
  if (e.target.closest('#utilOpen'))    { state.utilHidden = false; saveState(); $('#utilBar').hidden = false; $('#utilOpen').hidden = true;  return; }

  if (e.target.closest('#gameSound')) {
    state.muted = !state.muted;
    saveState();
    $('#gameSound').textContent = state.muted ? '🔇' : '🔊';
    toast(state.muted ? 'Study Buddy muted' : 'Study Buddy sound on');
    return;
  }
  if (e.target.closest('#pngBtn'))   { downloadCert('master'); return; }
  if (e.target.closest('#emailBtn')) { emailCert(); return; }
  if (e.target.closest('#pngBadgeBtn')) {
    const id = $('#pngBadgeBtn').dataset.track;
    downloadCert('track', id);
    return;
  }

  if (e.target.closest('#dockToggle')) {
    state.dockHidden = true; saveState();
    el.dock.hidden = true; $('#dockOpen').hidden = false;
    Game.stop();
    return;
  }
  if (e.target.closest('#dockOpen')) {
    state.dockHidden = false; saveState();
    el.dock.hidden = false; $('#dockOpen').hidden = true;
    Game.start();
    return;
  }

  if (e.target.closest('#resumeBar')) { goToResume(); return; }

  if (e.target.closest('#autoplayToggle')) {
    state.autoplay = state.autoplay === false;   // false -> true, true/undefined -> false
    saveState();
    el.autoplayLabel.textContent = state.autoplay === false ? 'Autoplay: off' : 'Autoplay: on';
    if (state.view === 'track') renderTrackDetail();
    toast(state.autoplay === false ? 'Intro videos will not autoplay' : 'Intro videos autoplay (muted)');
    return;
  }

  // scoped resets — checked before nav/track so they never bubble into navigation
  const resetT = e.target.closest('[data-reset-track]');
  if (resetT) { resetTrack(resetT.dataset.resetTrack); return; }

  const resetW = e.target.closest('[data-reset-week]');
  if (resetW) { resetModule(resetW.dataset.resetWeek, resetW.dataset.week); return; }

  // main nav
  const nav = e.target.closest('.nav-item');
  if (nav) { setView(nav.dataset.view); return; }

  // sidebar track rows + overview track cards
  const trackBtn = e.target.closest('[data-track]');
  if (trackBtn) { setView('track', trackBtn.dataset.track); return; }

  // jump links (back button, focus-card buttons)
  const jump = e.target.closest('[data-view-jump]');
  if (jump) { setView(jump.dataset.viewJump); return; }

  // "Open this week" from Today's Focus
  const openTrack = e.target.closest('[data-open-track]');
  if (openTrack) {
    const tid = openTrack.dataset.openTrack;
    state.openModules[`${tid}:${openTrack.dataset.openWeek}`] = true;
    setView('track', tid);
    return;
  }

  // module accordion
  const toggle = e.target.closest('[data-toggle]');
  if (toggle) {
    const key = toggle.dataset.toggle;
    state.openModules[key] = !state.openModules[key];
    saveState();
    renderTrackDetail();
    return;
  }

  // calendar day = toggle that task
  const calDay = e.target.closest('.cal-day');
  if (calDay) { toggleTask(calDay.dataset.task, !state.done[calDay.dataset.task]); return; }

  // badge certificate
  const badge = e.target.closest('[data-badge]');
  if (badge) { openBadgeCert(badge.dataset.badge); return; }

  // modal close
  if (e.target.closest('[data-close-modal]')) {
    const m = e.target.closest('.modal');
    if (m) closeModal(m);
    return;
  }

  if (e.target.closest('#openCertBtn')) { renderCertificate(); openModal(el.certModal); return; }
  if (e.target.closest('#printBtn') || e.target.closest('#printBadgeBtn')) { window.print(); return; }
  if (e.target.closest('#menuToggle')) { el.sidebar.classList.contains('open') ? closeSidebar() : openSidebar(); return; }
  if (e.target.closest('#scrim')) { closeSidebar(); return; }
  if (e.target.closest('#themeToggle') || e.target.closest('#themeToggleMobile')) { toggleTheme(); return; }

  if (e.target.closest('#resetBtn')) {
    const p = overallProgress();
    if (window.confirm(
      `Reset EVERYTHING?\n\nThis clears all ${p.done} checked task${p.done === 1 ? '' : 's'} across all 8 tracks, ` +
      `plus your start date and name.\n\n` +
      `If you only want to redo one track or one week, cancel this and use the smaller reset button ` +
      `inside that track instead.`
    )) {
      const theme = state.theme;
      state = defaultState();
      state.theme = theme;
      saveState();
      el.startDate.value = '';
      setView('overview');
      renderAll();
      toast('Progress reset');
    }
    return;
  }
});

// checkbox changes inside track detail
document.addEventListener('change', e => {
  const task = e.target.closest('.task');
  if (task && e.target.type === 'checkbox') {
    toggleTask(task.dataset.task, e.target.checked);
  }
});

// keyboard support for badge tiles
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    $$('.modal').forEach(m => { if (!m.hidden) closeModal(m); });
    closeSettings();
    closeSidebar();
  }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('badge') && e.target.dataset.badge) {
    e.preventDefault();
    openBadgeCert(e.target.dataset.badge);
  }
});

el.startDate.addEventListener('change', e => {
  state.startDate = e.target.value;
  saveState();
  renderAll();
  if (state.view === 'calendar') renderCalendar();
  toast(state.startDate ? 'Start date set — Today\'s Focus is live' : 'Start date cleared');
});

el.certName.addEventListener('input', e => {
  state.name = e.target.value;
  el.certNameOut.textContent = state.name || 'Your Name';
  saveState();
});

/* =========================================================
   SOUND — synthesised with the Web Audio API, no audio files.
   The AudioContext is only created after a real click, which is
   what browser autoplay policy requires.
   ========================================================= */
const Sfx = (() => {
  let ac = null;
  function ctx() {
    if (!ac) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ac = new AC(); } catch (_) { return null; }
    }
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  function tone(o) {
    const a = ctx();
    if (!a || state.muted) return;
    const t0 = a.currentTime + (o.delay || 0);
    const dur = o.dur || 0.12;
    const osc = a.createOscillator(), g = a.createGain();
    osc.type = o.type || 'square';
    osc.frequency.setValueAtTime(o.freq, t0);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(Math.max(1, o.to), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(o.vol || 0.15, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(a.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }
  return {
    unlock() { ctx(); },
    eat()  { tone({ freq: 680, to: 1020, dur: .08, vol: .13 });
             tone({ freq: 1020, to: 1360, dur: .09, vol: .10, delay: .06 }); },
    hurt() { tone({ freq: 190, to: 70,  dur: .22, type: 'sawtooth', vol: .22 });
             tone({ freq: 95,  to: 48,  dur: .26, type: 'square',   vol: .13, delay: .02 }); },
    die()  { [523, 440, 349, 262].forEach((f, i) =>
               tone({ freq: f, to: f * .92, dur: .3, type: 'triangle', vol: .2, delay: i * .17 })); },
    level(){ [523, 659, 784, 1047].forEach((f, i) =>
               tone({ freq: f, dur: .13, vol: .12, delay: i * .075 })); },
    meow() { tone({ freq: 720, to: 520, dur: .17, type: 'sine', vol: .17 });
             tone({ freq: 520, to: 660, dur: .15, type: 'sine', vol: .12, delay: .15 }); },
    bark() { tone({ freq: 240, to: 110, dur: .11, type: 'sawtooth', vol: .17 });
             tone({ freq: 200, to: 90,  dur: .10, type: 'sawtooth', vol: .13, delay: .13 }); },
    revive(){ [392, 523, 659, 880].forEach((f, i) =>
               tone({ freq: f, dur: .16, type: 'triangle', vol: .15, delay: i * .1 })); }
  };
})();

/* =========================================================
   STUDY BUDDY — WASD game in the right gutter.
   Pure canvas, no assets. Keys are only captured while the
   canvas is focused, so typing anywhere else is never eaten.

   Milestones:  20 pts → a dog starts hunting you
               100 pts → two fish at once
               500 pts → the fish swim away from you
   ========================================================= */
/* Each dog keeps the SAME on-screen / off-screen rhythm no matter how
   many there are — only the count and the speed climb with your score. */
const DOG_SHOWS_FOR = 15000;               // 15s on screen
const DOG_GAP = [9000, 22000];             // then away for 9–22s
const START_LIVES = 3;                     // what you begin with
const MAX_LIVES   = 5;                     // hearts can top you up to this
const HEART_GAP   = [18000, 40000];        // a heart drops every 18–40s
const HEART_LASTS = 12000;                 // and waits 12s before fading
const SWIM_AT = 120;                       // fish start dodging you

/* Difficulty ladder. `at` is the fish score the level starts at. */
const LEVELS = [
  { at:   0, dogs: 0, fish: 1, speed: 0.00, name: 'warm-up',      note: null },
  { at:  15, dogs: 1, fish: 1, speed: 1.10, name: 'a dog!',       note: 'a dog has noticed you' },
  { at:  30, dogs: 1, fish: 2, speed: 1.22, name: 'double fish',  note: 'double fish!' },
  { at:  50, dogs: 2, fish: 2, speed: 1.34, name: 'two dogs',     note: 'there are TWO of them now' },
  { at:  75, dogs: 2, fish: 3, speed: 1.46, name: 'triple fish',  note: 'three fish at once' },
  { at: 105, dogs: 3, fish: 3, speed: 1.58, name: 'three dogs',   note: 'three dogs. good luck.' },
  { at: 140, dogs: 3, fish: 4, speed: 1.70, name: 'four fish',    note: 'four fish. stay sharp.' },
  { at: 180, dogs: 4, fish: 4, speed: 1.82, name: 'the pack',     note: 'a whole pack now' },
  { at: 240, dogs: 5, fish: 5, speed: 1.94, name: 'swarm',        note: 'five dogs. FIVE.' },
  { at: 320, dogs: 6, fish: 5, speed: 2.06, name: 'chaos',        note: 'this is chaos' },
  { at: 420, dogs: 7, fish: 6, speed: 2.18, name: 'nightmare',    note: 'nightmare mode' },
  { at: 550, dogs: 8, fish: 6, speed: 2.30, name: 'legend',       note: 'you are a legend' }
];

/** The level for a given score. */
function levelFor(score) {
  let lv = LEVELS[0];
  for (const l of LEVELS) if (score >= l.at) lv = l;
  return lv;
}

/* What the dogs say once they stop chasing you and settle down. */
const DOG_LINES = [
  'truce?', 'i was never really hungry', 'you smell like fish',
  'nice grid you have here', 'i only chase for the cardio',
  'do you also have snacks?', 'we are friends now, ok?',
  'ten out of ten, would chase again', 'shhh, they are studying',
  'i will allow one (1) fish', 'good study session, human',
  'no hard feelings about earlier'
];

const CAT_LINES = [
  'one hour today. that is the whole trick.',
  'did you check off a task yet? no? go on.',
  'HubSpot first. everything else plugs into it.',
  'i am a cat. i cannot build workflows. you can.',
  'zapier for straight lines, make for branches.',
  'n8n is the scary one. you will be fine.',
  'the fish are not going anywhere. the roadmap is.',
  'week 9 is the one that pays. the AI layer.',
  'consistency beats intensity. every time.',
  'go watch the video. then come back and play.',
  'you are further along than you were last week.',
  'a portfolio piece beats a certificate. build both.',
  'purr. that is all i have got today.',
  'careful — that dog does not respect boundaries.'
];

/* Lines the cat offers on its own while you're studying (canvas not focused).
   Some are generated from your live focus-timer minutes. */
const IDLE_LINES = [
  'you are doing the thing. keep going.',
  'nice and steady. that is how this works.',
  'i will keep watch. you keep studying.',
  'one module at a time. no rush.',
  'still here. still proud of you.',
  'eyes on the screen, not on me.',
  'this hour counts even if it feels slow.',
  'future you is already thanking present you.',
  'stuck is fine. stuck means you are at the edge.',
  'do not skip the boring part. that is the part.',
  'you are building a career, not watching a video.',
  'small reps beat big plans.',
  'breathe. sip water. carry on.',
  'the hard tool today is the easy tool next month.'
];

function idleLine() {
  // roughly 1 in 3 lines references your actual focus time
  if (Math.random() < 0.34) {
    let mins = 0;
    try { mins = Math.floor(Timer.elapsed() / 60000); } catch (_) { mins = 0; }
    const who = (state.name || '').trim().split(' ')[0];
    if (mins >= 45) return `${mins} minutes deep. almost a full hour, ${who || 'friend'}.`;
    if (mins >= 25) return `${mins} minutes of focus so far. that is real work.`;
    if (mins >= 10) return `${mins} minutes in. the hard part is behind you.`;
    if (mins >= 2)  return `${mins} minutes on the clock. good start.`;
    return who ? `settle in, ${who}. the timer is running.` : 'settle in. the timer is running.';
  }
  return IDLE_LINES[Math.floor(Math.random() * IDLE_LINES.length)];
}

const Game = (() => {
  const cv = el.gameCanvas;
  if (!cv) return { start(){}, stop(){}, resize(){}, resetScore(){}, syncHud(){} };
  const ctx = cv.getContext('2d');
  let W = cv.clientWidth || 260, H = cv.clientHeight || 300;

  const cat  = { x: 130, y: 150, vx: 0, vy: 0, dir: 1, step: 0 };
  const keys = Object.create(null);
  let fishes = [], lives = START_LIVES, dead = false;
  let heart = null, heartNextAt = 0;          // the collectable extra life
  let active = false, raf = null, tick = 0, pop = 0, invulnUntil = 0;
  let spoke = 0, shownLevel = 0;
  /* One "slot" per dog the current level allows. A slot is either
     holding a dog (until `until`) or empty and waiting (`nextAt`).
     Every slot uses the same 15s-on / 9-22s-off rhythm. */
  let slots = [];
  let bubble = null;                       // { text, until }
  const idle = { tx: null, ty: null, nextMove: 0, nextTalk: 0, giveUpAt: 0 };

  const rnd  = (a, b) => a + Math.random() * (b - a);
  const now  = () => performance.now();
  const score = () => state.fish || 0;

  /* ---------- helpers ---------- */
  function say(text, ms) {
    bubble = { text, until: now() + (ms || 2600) };
  }
  const level = () => levelFor(score());
  function fishCount() { return level().fish; }
  function fishSwims() { return score() >= SWIM_AT; }

  /* ---------- dogs ---------- */
  function newDog(t) {
    const edge = Math.floor(rnd(0, 4));
    return {
      x: edge === 0 ? 10 : edge === 1 ? W - 10 : rnd(20, Math.max(22, W - 20)),
      y: edge === 2 ? 14 : edge === 3 ? H - 14 : rnd(24, Math.max(26, H - 20)),
      vx: 0, vy: 0, wander: 0,
      tx: null, ty: null, restUntil: 0,        // used in companion mode
      msg: null, msgUntil: 0, nextMsg: t + rnd(3000, 14000)
    };
  }

  /** Keep the number of slots matching the level. */
  function syncSlots(t) {
    const want = level().dogs;
    while (slots.length < want) slots.push({ dog: null, nextAt: t + rnd(1500, 6000), until: 0 });
    while (slots.length > want) slots.pop();
  }

  const liveDogs = () => slots.filter(s => s.dog).map(s => s.dog);

  function newFish() {
    return { x: rnd(28, Math.max(30, W - 28)), y: rnd(28, Math.max(30, H - 28)),
             t: rnd(0, 60), vx: rnd(-1, 1), vy: rnd(-1, 1) };
  }
  function syncFish() {
    while (fishes.length < fishCount()) fishes.push(newFish());
    while (fishes.length > fishCount()) fishes.pop();
  }
  syncFish();

  function syncHud() {
    if (el.gameScore) el.gameScore.textContent = score();
    if (el.gameBest)  el.gameBest.textContent  = state.fishBest || 0;
    if (el.gameLives) {
      // only show empty slots up to what you have actually earned
      const slotsShown = Math.max(START_LIVES, lives);
      el.gameLives.textContent = '♥'.repeat(Math.max(0, lives)) + '♡'.repeat(Math.max(0, slotsShown - lives));
      el.gameLives.classList.toggle('low', lives === 1);
    }
  }

  function resize() {
    const r = cv.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.round(r.width);
    H = Math.round(r.height);
    cv.width  = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;
    cat.x = Math.max(24, Math.min(W - 24, cat.x));
    cat.y = Math.max(30, Math.min(H - 22, cat.y));
    fishes.forEach(f => {
      f.x = Math.max(26, Math.min(Math.max(28, W - 26), f.x));
      f.y = Math.max(26, Math.min(Math.max(28, H - 26), f.y));
    });
  }

  function themeInk() {
    return document.documentElement.getAttribute('data-theme') === 'dark'
      ? { bg: '#191c21', grid: '#24272e', txt: '#7b8494', panel: 'rgba(12,13,16,.86)', ink: '#f2f4f7' }
      : { bg: '#f1f3f6', grid: '#e4e7ec', txt: '#8b94a3', panel: 'rgba(255,255,255,.9)',  ink: '#111827' };
  }

  /* ---------- sprites ---------- */
  function drawCat(x, y, dir, walking, hurtFlash) {
    const s = 4;
    const px = (a, b, w, h, c) => {
      ctx.fillStyle = c;
      ctx.fillRect(Math.round(x + a * s * dir - (dir < 0 ? w * s : 0)), Math.round(y + b * s), w * s, h * s);
    };
    const body = hurtFlash ? '#fca5a5' : '#f59e0b';
    const dark = hurtFlash ? '#ef4444' : '#b45309';
    const pink = '#fda4af';
    const bob  = walking ? Math.sin(cat.step / 3) * 1.2 : Math.sin(tick / 28) * 0.8;

    ctx.save();
    ctx.translate(0, bob);
    const tw = Math.sin(tick / 9) * 1.6;
    px(-6, -1 + tw * .3, 2, 1, dark);
    px(-7, -3 + tw * .3, 1, 2, dark);
    px(-5, 0, 8, 4, body);
    px(1, -4, 5, 5, body);
    px(1, -6, 1, 2, dark);
    px(4, -6, 1, 2, dark);
    const lift = walking ? (Math.floor(cat.step / 4) % 2 ? 1 : 0) : 0;
    px(-4, 4 - lift, 2, 1, dark);
    px(1, 4 - (1 - lift), 2, 1, dark);
    px(4, -3, 1, 1, '#1f2937');
    px(2, -3, 1, 1, '#1f2937');
    px(3, -1, 1, 1, pink);
    ctx.restore();
  }

  // front-facing, bouncing, delighted — used on the game-over screen
  function drawHappyCat(x, y, t) {
    const s = 5, bounce = Math.abs(Math.sin(t / 260)) * 9;
    const px = (a, b, w, h, c) => { ctx.fillStyle = c; ctx.fillRect(Math.round(x + a * s), Math.round(y - bounce + b * s), w * s, h * s); };
    px(-3, -4, 6, 6, '#f59e0b');          // head
    px(-3, -6, 1, 2, '#b45309');          // ears
    px(2, -6, 1, 2, '#b45309');
    px(-4, 2, 8, 4, '#f59e0b');           // body
    px(-2, -2, 1, 1, '#1f2937');          // eyes
    px(1, -2, 1, 1, '#1f2937');
    px(0, 0, 1, 1, '#fda4af');            // nose
    ctx.strokeStyle = '#1f2937'; ctx.lineWidth = 1.6;
    ctx.beginPath();                       // smile
    ctx.arc(x + s / 2, y - bounce + s * 0.5, s * 1.15, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
    // excited sparkles
    ctx.fillStyle = '#fbbf24';
    const sp = Math.sin(t / 150) * 3;
    ctx.fillRect(x - s * 6, y - bounce - s * 2 + sp, 3, 3);
    ctx.fillRect(x + s * 5, y - bounce - s * 4 - sp, 3, 3);
    ctx.fillRect(x + s * 7, y - bounce + s + sp, 2, 2);
  }

  function drawDog(d, friendly) {
    const s = 4, dir = d.vx < 0 ? -1 : 1, x = d.x, y = d.y;
    const px = (a, b, w, h, c) => {
      ctx.fillStyle = c;
      ctx.fillRect(Math.round(x + a * s * dir - (dir < 0 ? w * s : 0)), Math.round(y + b * s), w * s, h * s);
    };
    const body = '#78716c', dark = '#44403c';
    const trot = Math.floor(tick / 5) % 2;
    px(-7, -1, 2, 2, dark);                // tail
    px(-6, 0, 9, 5, body);                 // body
    px(2, -4, 6, 6, body);                 // head
    px(2, -6, 2, 2, dark);                 // ear
    px(8, -1, 1, 2, dark);                 // snout
    px(6, -3, 1, 1, friendly ? '#1f2937' : '#fca5a5');   // calm vs angry eye
    px(-5, 5 - trot, 2, 1, dark);
    px(1, 5 - (1 - trot), 2, 1, dark);

    if (friendly) {
      // wagging tail and a little heart instead of rage
      const wag = Math.sin(tick / 6) * 2;
      px(-8, -3 + wag * 0.4, 1, 2, dark);
      if (tick % 90 < 26) {
        ctx.fillStyle = 'rgba(244,114,182,.75)';
        ctx.fillRect(Math.round(x + 7 * s * dir), Math.round(y - 7 * s), 3, 3);
        ctx.fillRect(Math.round(x + 8 * s * dir), Math.round(y - 8 * s), 2, 2);
      }
    } else if (tick % 40 < 12) {
      ctx.fillStyle = 'rgba(239,68,68,.5)';
      ctx.fillRect(Math.round(x + 10 * s * dir), Math.round(y - 6 * s), 3, 3);
    }
  }

  function drawFish(f) {
    const s = 4, wob = Math.sin(f.t / 10) * 1.5;
    const dir = f.vx < 0 ? -1 : 1;
    ctx.save();
    ctx.translate(f.x, f.y + wob);
    ctx.scale(dir, 1);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(-2 * s, -s, 3 * s, 2 * s);
    ctx.beginPath();
    ctx.moveTo(s, 0); ctx.lineTo(2 * s, -s); ctx.lineTo(2 * s, s);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#0c4a6e';
    ctx.fillRect(-s, -s / 2, s / 2, s / 2);
    ctx.restore();
  }

  function drawBubble(text) {
    ctx.font = '10px Inter, system-ui, sans-serif';
    const words = text.split(' ');
    const maxW = Math.min(W - 24, 168);
    const lines = [];
    let line = '';
    words.forEach(w => {
      const t = line ? line + ' ' + w : w;
      if (ctx.measureText(t).width > maxW - 16 && line) { lines.push(line); line = w; }
      else line = t;
    });
    if (line) lines.push(line);

    const bw = Math.min(maxW, Math.max(...lines.map(l => ctx.measureText(l).width)) + 16);
    const bh = lines.length * 13 + 11;
    let bx = cat.x - bw / 2;
    let by = cat.y - 34 - bh;
    bx = Math.max(6, Math.min(W - bw - 6, bx));
    by = Math.max(6, by);

    const ink = themeInk();
    ctx.fillStyle = ink.panel;
    ctx.strokeStyle = 'rgba(128,128,140,.45)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 7); else ctx.rect(bx, by, bw, bh);
    ctx.fill(); ctx.stroke();
    ctx.beginPath();
    const tipX = Math.max(bx + 8, Math.min(bx + bw - 8, cat.x));
    ctx.moveTo(tipX - 4, by + bh);
    ctx.lineTo(tipX + 4, by + bh);
    ctx.lineTo(tipX, by + bh + 6);
    ctx.closePath(); ctx.fill();

    ctx.fillStyle = ink.ink;
    ctx.textAlign = 'left';
    lines.forEach((l, i) => ctx.fillText(l, bx + 8, by + 17 + i * 13));
  }

  /* ---------- lifecycle ---------- */
  function loseLife(dog) {
    lives--;
    invulnUntil = now() + 1600;
    syncHud();
    if (lives <= 0) {
      Sfx.die();
      dead = true;
      slots = [];
      state.fish = 0;
      saveState();
      syncHud();
    } else {
      Sfx.hurt();
      const ang = Math.atan2(cat.y - dog.y, cat.x - dog.x);
      cat.vx = Math.cos(ang) * 7;
      cat.vy = Math.sin(ang) * 7;
      dog.x -= Math.cos(ang) * 34;
      dog.y -= Math.sin(ang) * 34;
      say(lives === 1 ? 'last life!' : 'ow! ' + lives + ' left', 1800);
    }
  }

  function restart() {
    dead = false;
    lives = START_LIVES;
    cat.x = W / 2; cat.y = H / 2; cat.vx = cat.vy = 0;
    fishes = []; syncFish();
    slots = [];                                    // rebuilt from the level
    shownLevel = 0;
    heart = null; heartNextAt = 0;
    invulnUntil = now() + 1200;
    Sfx.revive();
    say('let us go again!', 2200);
    syncHud();
  }

  function gainFish() {
    const before = score();
    state.fish = before + 1;
    if (state.fish > (state.fishBest || 0)) state.fishBest = state.fish;
    saveState();
    syncHud();
    Sfx.eat();
    pop = 22;

    const after = state.fish;

    // crossed into a new level?
    const lvBefore = levelFor(before), lvAfter = levelFor(after);
    if (lvAfter.at !== lvBefore.at && lvAfter.note) {
      Sfx.level();
      say(lvAfter.note, 3400);
      shownLevel = lvAfter.at;
    } else if (before < SWIM_AT && after >= SWIM_AT) {
      Sfx.level();
      say('the fish can swim now. good luck.', 3600);
    }
    syncFish();
  }

  /** A pulsing heart pickup that restores one life. */
  function drawHeart(h, t) {
    const beat = 1 + Math.sin(t / 180) * 0.09;
    const fade = Math.min(1, (h.until - t) / 2200);       // fades as it expires
    const s = 9 * beat;
    ctx.save();
    ctx.globalAlpha = Math.max(0.15, Math.min(1, fade));
    ctx.translate(h.x, h.y);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(0, s * 0.75);
    ctx.bezierCurveTo(-s * 1.5, -s * 0.25, -s * 0.6, -s * 1.25, 0, -s * 0.45);
    ctx.bezierCurveTo(s * 0.6, -s * 1.25, s * 1.5, -s * 0.25, 0, s * 0.75);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.55)';              // little shine
    ctx.fillRect(-s * 0.55, -s * 0.5, 2.5, 2.5);
    ctx.restore();
  }

  /** Spawn / expire / collect the heart. Only while playing. */
  function heartTick(t) {
    if (!heartNextAt) { heartNextAt = t + rnd(...HEART_GAP); return; }

    if (!heart && t >= heartNextAt) {
      if (lives >= MAX_LIVES) {                            // already full, try later
        heartNextAt = t + rnd(...HEART_GAP);
      } else {
        heart = { x: rnd(26, Math.max(28, W - 26)), y: rnd(30, Math.max(32, H - 26)), until: t + HEART_LASTS };
      }
    }
    if (!heart) return;

    if (t >= heart.until) {                                // missed it
      heart = null;
      heartNextAt = t + rnd(...HEART_GAP);
      return;
    }
    drawHeart(heart, t);

    if (Math.hypot(heart.x - cat.x, heart.y - cat.y) < 20) {
      heart = null;
      heartNextAt = t + rnd(...HEART_GAP);
      if (lives < MAX_LIVES) {
        lives++;
        syncHud();
        Sfx.revive();
        say(lives >= MAX_LIVES ? 'full hearts!' : '+1 life', 2000);
      }
    }
  }

  /** Small speech bubble used by the dogs in companion mode. */
  function drawMiniBubble(x, y, text) {
    ctx.font = '9.5px Inter, system-ui, sans-serif';
    const tw = Math.min(ctx.measureText(text).width, W - 26);
    const bw = tw + 12, bh = 17;
    let bx = Math.max(4, Math.min(W - bw - 4, x - bw / 2));
    let by = Math.max(4, y - bh);
    const ink = themeInk();
    ctx.fillStyle = ink.panel;
    ctx.strokeStyle = 'rgba(128,128,140,.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 6); else ctx.rect(bx, by, bw, bh);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = ink.ink;
    ctx.textAlign = 'center';
    ctx.fillText(text, bx + bw / 2, by + 12);
  }

  /* ---------- companion mode ----------
     While the canvas is NOT focused the game is paused: no dog, no fish,
     no lives at risk. The cat just pads around on its own and pipes up
     with something encouraging now and then. */
  function idleTick(t) {
    // No destination and the rest is over? Either pick a new spot or keep sitting.
    if (idle.tx === null && t > idle.nextMove) {
      if (Math.random() < 0.78) {
        idle.tx = rnd(28, Math.max(30, W - 28));
        idle.ty = rnd(38, Math.max(40, H - 26));
        idle.giveUpAt = t + 9000;                 // failsafe if it can't arrive
      } else {
        idle.nextMove = t + rnd(1600, 4200);      // just sit a while longer
      }
    }

    // Walking somewhere.
    if (idle.tx !== null) {
      const dx = idle.tx - cat.x, dy = idle.ty - cat.y;
      const d  = Math.hypot(dx, dy);
      if (d < 8 || t > idle.giveUpAt) {
        idle.tx = idle.ty = null;                 // arrived — rest before the next trip
        idle.nextMove = t + rnd(2000, 6500);
      } else {
        cat.vx += (dx / d) * 0.17;                // gentle amble, not a sprint
        cat.vy += (dy / d) * 0.17;
        cat.dir = dx < 0 ? -1 : 1;
      }
    }

    if (t > idle.nextTalk) {
      say(idleLine(), 5200);
      idle.nextTalk = t + rnd(26000, 52000);
    }
  }

  /* ---------- main loop ---------- */
  function frame() {
    tick++;
    const t = now();
    const ink = themeInk();

    ctx.fillStyle = ink.bg;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = ink.grid; ctx.lineWidth = 1;
    for (let g = 20; g < W; g += 20) { ctx.beginPath(); ctx.moveTo(g + .5, 0); ctx.lineTo(g + .5, H); ctx.stroke(); }
    for (let g = 20; g < H; g += 20) { ctx.beginPath(); ctx.moveTo(0, g + .5); ctx.lineTo(W, g + .5); ctx.stroke(); }

    if (dead) {
      drawGameOver(t);
      raf = requestAnimationFrame(frame);
      return;
    }

    /* cat movement */
    const sp = 0.55, fr = 0.82;
    if (active) {
      if (keys.w) cat.vy -= sp;
      if (keys.s) cat.vy += sp;
      if (keys.a) { cat.vx -= sp; cat.dir = -1; }
      if (keys.d) { cat.vx += sp; cat.dir = 1; }
    } else {
      idleTick(t);
    }
    cat.vx *= fr; cat.vy *= fr;
    cat.x = Math.max(24, Math.min(W - 24, cat.x + cat.vx));
    cat.y = Math.max(30, Math.min(H - 22, cat.y + cat.vy));
    const moving = Math.abs(cat.vx) + Math.abs(cat.vy) > 0.25;
    if (moving) cat.step++;

    /* fish — only in play; companion mode is just the cat */
    if (active) {
    syncFish();
    fishes.forEach(f => {
      f.t++;
      if (fishSwims()) {
        // drift, wander, and shy away from a nearby cat
        const d = Math.hypot(f.x - cat.x, f.y - cat.y);
        if (d < 70) {
          const a = Math.atan2(f.y - cat.y, f.x - cat.x);
          f.vx += Math.cos(a) * 0.16;
          f.vy += Math.sin(a) * 0.16;
        }
        f.vx += rnd(-0.06, 0.06);
        f.vy += rnd(-0.06, 0.06);
        const sp2 = Math.hypot(f.vx, f.vy), cap = 1.5;
        if (sp2 > cap) { f.vx = f.vx / sp2 * cap; f.vy = f.vy / sp2 * cap; }
        f.x += f.vx; f.y += f.vy;
        if (f.x < 26 || f.x > W - 26) { f.vx *= -1; f.x = Math.max(26, Math.min(W - 26, f.x)); }
        if (f.y < 26 || f.y > H - 26) { f.vy *= -1; f.y = Math.max(26, Math.min(H - 26, f.y)); }
      }
      drawFish(f);
    });
    for (let i = fishes.length - 1; i >= 0; i--) {
      if (Math.hypot(fishes[i].x - cat.x, fishes[i].y - cat.y) < 20) {
        fishes.splice(i, 1);
        gainFish();
        syncFish();
      }
    }
    }

    /* hearts — only while you are actually playing */
    if (active) heartTick(t);

    /* ---------- dogs ----------
       The spawn / despawn rhythm runs in BOTH modes, so the dogs that
       are around when you click away stay around, and ones that were
       due to arrive still arrive. Only their behaviour changes. */
    syncSlots(t);
    slots.forEach(s => {
      if (!s.dog && t >= s.nextAt) {
        s.dog = newDog(t);
        s.until = t + DOG_SHOWS_FOR;
        if (active) { Sfx.bark(); say(slots.filter(x => x.dog).length > 1 ? 'another one!' : 'run!', 1500); }
      }
      if (s.dog && t >= s.until) {
        s.dog = null;
        s.nextAt = t + rnd(...DOG_GAP);
      }
    });

    const spd = level().speed || 1.1;
    slots.forEach(s => {
      const d = s.dog;
      if (!d) return;

      if (active) {
        /* hunting: head for the cat, but with a wobble so it curves */
        d.wander += rnd(-0.14, 0.14);
        d.wander = Math.max(-0.9, Math.min(0.9, d.wander));
        const ang = Math.atan2(cat.y - d.y, cat.x - d.x) + d.wander;
        d.vx = Math.cos(ang) * spd;
        d.vy = Math.sin(ang) * spd;
      } else {
        /* friendly: potter about like the cat does, no chasing */
        if (d.tx === null && t > d.restUntil) {
          if (Math.random() < 0.75) {
            d.tx = rnd(20, Math.max(22, W - 20));
            d.ty = rnd(26, Math.max(28, H - 20));
          } else d.restUntil = t + rnd(1500, 4000);
        }
        if (d.tx !== null) {
          const dx = d.tx - d.x, dy = d.ty - d.y, dist = Math.hypot(dx, dy);
          if (dist < 8) { d.tx = null; d.restUntil = t + rnd(1800, 5000); d.vx = d.vy = 0; }
          else { d.vx = (dx / dist) * 0.55; d.vy = (dy / dist) * 0.55; }
        } else { d.vx *= 0.85; d.vy *= 0.85; }

        // an occasional friendly remark
        if (t > d.nextMsg) {
          d.msg = DOG_LINES[Math.floor(Math.random() * DOG_LINES.length)];
          d.msgUntil = t + 4200;
          d.nextMsg = t + rnd(14000, 34000);
        }
      }

      d.x = Math.max(14, Math.min(W - 14, d.x + d.vx));
      d.y = Math.max(20, Math.min(H - 16, d.y + d.vy));
      drawDog(d, !active);

      if (active && t > invulnUntil && Math.hypot(d.x - cat.x, d.y - cat.y) < 21) loseLife(d);

      if (!active && d.msg && t < d.msgUntil) drawMiniBubble(d.x, d.y - 22, d.msg);
      else if (d.msg && t >= d.msgUntil) d.msg = null;
    });

    /* +1 popper */
    if (pop > 0) {
      ctx.globalAlpha = pop / 22;
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('+1', cat.x, cat.y - 26 - (22 - pop));
      ctx.globalAlpha = 1;
      pop--;
    }

    const flashing = t < invulnUntil && Math.floor(t / 90) % 2 === 0;
    drawCat(cat.x, cat.y, cat.dir, moving, flashing);

    if (bubble) {
      if (t > bubble.until) bubble = null;
      else drawBubble(bubble.text);
    }

    /* level name, top left */
    const lv = level();
    if (lv.at > 0) {
      ctx.fillStyle = active ? 'rgba(239,68,68,.75)' : ink.txt;
      ctx.font = 'bold 9.5px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('LV ' + (LEVELS.indexOf(lv) + 1), 8, 14);
    }

    if (!active) {
      ctx.fillStyle = ink.txt;
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      const pals = liveDogs().length;
      ctx.fillText(pals ? `paused · ${pals} friend${pals > 1 ? 's' : ''} visiting` : 'paused · click to play', W / 2, H - 10);
    }

    raf = requestAnimationFrame(frame);
  }

  function drawGameOver(t) {
    const ink = themeInk();
    ctx.fillStyle = ink.panel;
    ctx.fillRect(0, 0, W, H);
    drawHappyCat(W / 2, H / 2 - 6, t);

    ctx.textAlign = 'center';
    ctx.fillStyle = ink.ink;
    ctx.font = 'bold 15px Inter, sans-serif';
    ctx.fillText('the dog got me!', W / 2, H / 2 + 52);
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = ink.txt;
    ctx.fillText('score reset · best still ' + (state.fishBest || 0), W / 2, H / 2 + 71);

    const bw = 116, bh = 28, bx = W / 2 - bw / 2, by = H / 2 + 84;
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 8); else ctx.rect(bx, by, bw, bh);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillText('play again ↵', W / 2, by + 18);
  }

  /* ---------- input ---------- */
  const MAP = { w:'w', a:'a', s:'s', d:'d', arrowup:'w', arrowleft:'a', arrowdown:'s', arrowright:'d' };

  cv.addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (dead && (k === 'enter' || k === ' ')) { restart(); e.preventDefault(); return; }
    const m = MAP[k];
    if (!m) return;
    keys[m] = true;
    e.preventDefault();
  });
  cv.addEventListener('keyup', e => {
    const m = MAP[e.key.toLowerCase()];
    if (m) { keys[m] = false; e.preventDefault(); }
  });
  cv.addEventListener('focus', () => {
    active = true;
    idle.tx = idle.ty = null;
    invulnUntil = now() + 1500;                    // grace period on resume
    // dogs that were hanging around go back to hunting, but you get a
    // moment first and their leave-timers keep running unchanged
    slots.forEach(s => { if (s.dog) { s.dog.tx = s.dog.ty = null; s.dog.msg = null; } });
    if (el.gameHint) el.gameHint.textContent = 'wasd / arrows';
    cv.classList.add('playing');
  });

  // Clicked away — pause the game entirely and switch to companion mode.
  cv.addEventListener('blur', () => {
    active = false;
    for (const k in keys) keys[k] = false;
    // Dogs STAY when you click away — they just stop hunting and turn
    // friendly. Their arrive/leave timers carry on exactly as before.
    slots.forEach(s => {
      if (!s.dog) return;
      s.dog.tx = s.dog.ty = null;
      s.dog.restUntil = now() + rnd(300, 1500);
      s.dog.nextMsg = now() + rnd(2500, 9000);
    });
    cat.vx = cat.vy = 0;
    idle.tx = idle.ty = null;
    idle.nextMove = now() + rnd(700, 2000);
    idle.nextTalk = now() + rnd(7000, 15000);
    if (el.gameHint) el.gameHint.textContent = 'companion mode';
    cv.classList.remove('playing');
  });

  /** The cat talks on ANY click in the window — no need to hit it precisely.
      A short cooldown just stops mashing from cutting each line off. */
  let lastSpoke = 0;
  function talk() {
    const t = now();
    if (t - lastSpoke < 420) return;
    lastSpoke = t;
    const who = (state.name || '').trim().split(' ')[0];
    say(spoke === 0 && who ? `hi ${who}!` : CAT_LINES[Math.floor(Math.random() * CAT_LINES.length)], 3200);
    spoke++;
    Sfx.meow();
  }

  cv.addEventListener('pointerdown', e => {
    Sfx.unlock();
    cv.focus();
    if (dead) { restart(); return; }
    talk();
  });

  // expose so the 💬 button in the footer can trigger it too
  cv._talk = talk;

  return {
    start() { resize(); syncHud(); if (!raf) frame(); },
    stop()  { if (raf) { cancelAnimationFrame(raf); raf = null; } },
    resize,
    syncHud,
    talk() { if (!dead) talk(); },
    resetScore() {
      state.fish = 0;
      saveState();
      lives = START_LIVES;
      dead = false;
      slots = [];
      shownLevel = 0;
      heart = null; heartNextAt = 0;
      invulnUntil = 0;
      cat.x = W / 2; cat.y = H / 2; cat.vx = cat.vy = 0;
      fishes = []; syncFish();
      syncHud();
    }
  };
})();

/* =========================================================
   ABOUT — edit these three values after you push to GitHub.
   ========================================================= */
const ABOUT_LINKS = [
  { label: 'Email',    value: 'joemarkloarbasa96@gmail.com',   icon: '✉',
    href: 'mailto:joemarkloarbasa96@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/joemark-basa',  icon: 'in',
    href: 'https://www.linkedin.com/in/joemark-basa/' },
  { label: 'GitHub',   value: 'github.com/MarkBasa96',        icon: '{ }',
    href: 'https://github.com/MarkBasa96' }
];

function renderAboutLinks() {
  const html = ABOUT_LINKS.map(l => {
    const unset = /YOUR-USERNAME|YOUR-HANDLE/.test(l.href);
    return `<a class="ccard ${unset ? 'unset' : ''}"
               href="${unset ? '#' : l.href}"
               ${unset ? 'title="Add your GitHub username in ABOUT_LINKS at the top of script.js"'
                       : 'target="_blank" rel="noopener"'}>
              <span class="ccard-ico">${l.icon}</span>
              <span class="ccard-text">
                <span class="ccard-label">${escapeHtml(l.label)}</span>
                <span class="ccard-value">${escapeHtml(l.value)}</span>
              </span>
              <span class="ccard-go" aria-hidden="true">↗</span>
            </a>`;
  }).join('');

  ['#aboutLinks', '#aboutLinks2'].forEach(sel => {
    const box = $(sel);
    if (box) box.innerHTML = html;
  });
}

/* =========================================================
   SETTINGS MENU — opens upward from the sidebar footer,
   like a system power menu. Closes on outside click or Esc.
   ========================================================= */
function settingsOpen()  { return !$('#settingsMenu').hidden; }
function openSettings() {
  $('#settingsMenu').hidden = false;
  $('#settingsBtn').setAttribute('aria-expanded', 'true');
  $('#settingsBtn').classList.add('is-open');
}
function closeSettings() {
  $('#settingsMenu').hidden = true;
  $('#settingsBtn').setAttribute('aria-expanded', 'false');
  $('#settingsBtn').classList.remove('is-open');
}
function toggleSettings() { settingsOpen() ? closeSettings() : openSettings(); }

/* =========================================================
   AVATAR — initial, or an uploaded photo downscaled to 256px
   ========================================================= */
function avatarHTML(size) {
  const who = (state.name || '').trim();
  if (state.photo) return `<img src="${state.photo}" alt="" />`;
  return escapeHtml(who ? who.charAt(0).toUpperCase() : '?');
}

function syncAvatar() {
  const who = (state.name || '').trim();
  const av  = $('#pcardAv');
  if (av) {
    av.innerHTML = avatarHTML();
    av.classList.toggle('has-photo', !!state.photo);
  }
  if ($('#pcardName')) $('#pcardName').textContent = who || 'Set up your profile';
  if ($('#pcardSub'))  $('#pcardSub').textContent  =
    (state.email || '').trim() || 'Technical VA → AI Automation';

  const wav = $('#wPhotoAv');
  if (wav) {
    wav.innerHTML = avatarHTML();
    wav.classList.toggle('has-photo', !!state.photo);
    $('#wPhotoClear').hidden = !state.photo;
  }
}

/** Downscale to a 256px square so localStorage isn't flooded with a raw photo. */
function setPhotoFromFile(file) {
  if (!file.type || !file.type.startsWith('image/')) { toast('That is not an image file'); return; }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const S = 256;
      const c = document.createElement('canvas');
      c.width = c.height = S;
      const x = c.getContext('2d');
      const side = Math.min(img.width, img.height);          // centre-crop to a square
      x.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, S, S);
      try {
        state.photo = c.toDataURL('image/jpeg', 0.85);
        saveState();
        syncAvatar();
        toast('Photo updated');
      } catch (e) {
        toast('Could not save that photo');
      }
    };
    img.onerror = () => toast('Could not read that image');
    img.src = reader.result;
  };
  reader.onerror = () => toast('Could not read that file');
  reader.readAsDataURL(file);
}

/* =========================================================
   PROFILES — several people, one browser, separate progress.
   Plus export/import so progress can move between devices.
   ========================================================= */
const AV_COLORS = ['#4f46e5','#0d9488','#d97706','#e11d48','#7c3aed','#0891b2','#c026d3','#ea580c'];

/** % complete for any profile without switching to it. */
function profileStats(id) {
  try {
    const raw = window.localStorage.getItem(dataKey(id));
    if (!raw) return { pct: 0, name: '' };
    const s = JSON.parse(raw) || {};
    const n = Object.keys(s.done || {}).filter(k => s.done[k]).length;
    return { pct: Math.round(n / TOTAL_DAYS * 100), name: s.name || '' };
  } catch (e) { return { pct: 0, name: '' }; }
}

function renderProfiles() {
  const list = readProfiles();
  const cur  = activeId();
  $('#pfGrid').innerHTML = list.map((p, i) => {
    const st = profileStats(p.id);
    const nm = (p.name || 'Unnamed').trim();
    return `
      <div class="pf ${p.id === cur ? 'is-current' : ''}">
        <button class="pf-pick" data-switch="${p.id}" title="Switch to ${escapeHtml(nm)}">
          <span class="pf-av" style="background:${AV_COLORS[i % AV_COLORS.length]}">${escapeHtml(nm.charAt(0).toUpperCase() || '?')}</span>
          <span class="pf-name">${escapeHtml(nm)}</span>
          <span class="pf-pct">${st.pct}% complete</span>
          ${p.id === cur ? '<span class="pf-badge">current</span>' : ''}
        </button>
        ${list.length > 1 ? `<button class="pf-del" data-del="${p.id}" title="Delete this profile">✕</button>` : ''}
      </div>`;
  }).join('') + `
      <button class="pf-new" id="pfNew">
        <span class="pf-av pf-av-new">+</span>
        <span class="pf-name">New profile</span>
      </button>`;
}

function openProfiles() {
  renderProfiles();
  $('#profileModal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeProfiles() {
  $('#profileModal').hidden = true;
  document.body.style.overflow = '';
}

function switchProfile(id) {
  if (id === activeId()) { closeProfiles(); return; }
  saveState();                       // flush current profile first
  setActiveId(id);
  location.reload();                 // cleanest way to re-init every module
}

function addProfile() {
  const name = (window.prompt('Name for the new profile?') || '').trim();
  if (!name) return;
  saveState();
  createProfile(name);
  location.reload();
}

function deleteProfile(id) {
  const list = readProfiles();
  const p = list.find(x => x.id === id);
  if (!p || list.length < 2) return;
  const st = profileStats(id);
  if (!window.confirm(
    `Delete the profile "${p.name}"?\n\n` +
    `Its progress (${st.pct}% complete) will be permanently erased. This cannot be undone.\n\n` +
    `Tip: cancel, switch to it, and Export first if you might want it back.`
  )) return;

  try { window.localStorage.removeItem(dataKey(id)); } catch (e) {}
  const next = list.filter(x => x.id !== id);
  writeProfiles(next);
  if (activeId() === id) { setActiveId(next[0].id); location.reload(); return; }
  renderProfiles();
  toast('Profile deleted');
}

/* ---------- export / import ---------- */
function exportProgress() {
  const who  = (state.name || 'roadmap').trim().replace(/[^a-z0-9]+/gi, '-');
  const blob = new Blob([JSON.stringify({
    _app: 'ai-automation-va-roadmap',
    _version: 1,
    _exported: new Date().toISOString(),
    profileName: state.name || 'Unnamed',
    state
  }, null, 2)], { type: 'application/json' });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${who}-roadmap-progress.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
  toast('Progress exported — keep that file safe');
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try { data = JSON.parse(reader.result); }
    catch (e) { toast('That file is not valid JSON'); return; }

    if (!data || data._app !== 'ai-automation-va-roadmap' || !data.state) {
      toast("That doesn't look like a roadmap export file");
      return;
    }

    const incoming = Object.assign(defaultState(), data.state);
    const base = (incoming.name || data.profileName || 'Imported').trim();
    const taken = readProfiles().some(p => p.name.toLowerCase() === base.toLowerCase());
    const name = taken ? `${base} (restored)` : base;

    const done = Object.keys(incoming.done || {}).filter(k => incoming.done[k]).length;
    if (!window.confirm(
      `Restore "${base}"?\n\n` +
      `${done} of ${TOTAL_DAYS} tasks complete.\n\n` +
      `This creates a NEW profile called "${name}". Nothing already on this device is overwritten.`
    )) return;

    saveState();
    const id = createProfile(name);
    incoming.name = incoming.name || base;
    try { window.localStorage.setItem(dataKey(id), JSON.stringify(incoming)); } catch (e) {}
    location.reload();
  };
  reader.onerror = () => toast('Could not read that file');
  reader.readAsText(file);
}

/* =========================================================
   ONBOARDING
   ========================================================= */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function openWelcome() {
  const m    = $('#welcomeModal');
  const edit = !!(state.name || '').trim();     // already set up? then this is an edit

  $('#wName').value  = state.name || '';
  $('#wEmail').value = state.email || '';
  $('#wStart').value = state.startDate || '';
  $('#wNameErr').hidden = true;
  $('#wEmailErr').hidden = true;

  $('#welcomeKicker').textContent = edit ? 'Your details' : '12 weeks · 84 days · ~1 hour a day';
  $('#welcomeTitle').textContent  = edit ? 'Update your details' : "Let's set up your roadmap";
  $('#welcomeLede').innerHTML     = edit
    ? 'Change the name printed on your certificates, your email, or your start date. Stored <strong>only in this browser</strong>.'
    : 'Your name goes on the certificates you unlock. Everything below is stored <strong>only in this browser</strong> — nothing is uploaded anywhere.';
  $('#wSubmit').textContent   = edit ? 'Save changes' : 'Start the roadmap';
  $('#wSkip').textContent     = edit ? 'Cancel' : 'Skip for now';
  $('#wSkipNote').hidden      = edit;

  m.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('#wName').focus(), 60);
}

function closeWelcome() {
  $('#welcomeModal').hidden = true;
  document.body.style.overflow = '';
  saveState();
}

(function wireWelcome() {
  const form = $('#welcomeForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = $('#wName').value.trim();
    const email = $('#wEmail').value.trim();
    let bad = false;

    $('#wNameErr').hidden = !!name;
    if (!name) bad = true;

    const emailBad = email && !EMAIL_RE.test(email);
    $('#wEmailErr').hidden = !emailBad;
    if (emailBad) bad = true;

    if (bad) return;

    state.name      = name;
    state.email     = email;
    state.startDate = $('#wStart').value || '';
    if (!activeId()) createProfile(name);       // very first run creates the profile
    saveState();

    const wasEdit = $('#wSubmit').textContent === 'Save changes';

    el.startDate.value = state.startDate;
    closeWelcome();
    syncProfileLabel();
    syncAvatar();
    renderGreeting();          // now that we know the name
    renderAll();
    toast(wasEdit ? 'Details updated' : `Welcome, ${name.split(' ')[0]} — your roadmap is ready`);
  });

  $('#wSkip').addEventListener('click', closeWelcome);
})();

/** Sidebar button shows who you're signed in as, once a name exists. */
function syncProfileLabel() {
  const who = (state.name || '').trim();
  const lbl = $('#profileLabel');
  if (lbl) lbl.textContent = who ? who.split(' ')[0] + "'s details" : 'Your details';
}

(function initProfileLabel() {
  syncProfileLabel();
  syncAvatar();
  renderAboutLinks();
})();

/* =========================================================
   CERTIFICATE EXPORT — PNG rendered on a canvas, plus email
   ========================================================= */
/**
 * Draw the certificate to a canvas for the PNG download.
 *
 * This deliberately mirrors the on-screen design one element at a time —
 * same cream paper, double frame, paw watermark, cat portrait, tool mark,
 * footer order and disclaimer — so the file you download matches what you
 * are looking at. It is A4-landscape proportioned (1.414:1), which is also
 * what the print stylesheet targets, so PNG and PDF agree.
 */
function certPNG(opts) {
  const { title, subtitle, name, body, items, accent, ink, catIndex, iconPath } = opts;
  const S = 2;                                   // 2x for a crisp file
  const W = 1414, H = 1000;                      // A4 landscape ratio
  const c = document.createElement('canvas');
  c.width = W * S; c.height = H * S;
  const x = c.getContext('2d');
  x.scale(S, S);

  const AC   = accent || '#4f46e5';
  const INK  = ink || '#33475b';
  const PAPER = '#fdfcf8';

  /* ---------- paper + ruling ---------- */
  x.fillStyle = PAPER; x.fillRect(0, 0, W, H);
  x.strokeStyle = 'rgba(0,0,0,.018)'; x.lineWidth = 1;
  for (let ly = 40; ly < H - 40; ly += 22) {
    x.beginPath(); x.moveTo(46, ly + .5); x.lineTo(W - 46, ly + .5); x.stroke();
  }

  /* ---------- double frame ---------- */
  x.strokeStyle = AC;
  x.lineWidth = 3; x.strokeRect(24, 24, W - 48, H - 48);
  x.lineWidth = 3; x.strokeRect(33, 33, W - 66, H - 66);
  x.strokeStyle = hexA(AC, .4); x.lineWidth = 1;
  x.strokeRect(47, 47, W - 94, H - 94);

  /* ---------- paw watermark, top left ---------- */
  x.save();
  x.globalAlpha = .12; x.fillStyle = '#2b2b2b';
  x.translate(74, 84);
  [[0, 0, 1.5, -18], [56, -10, 1.2, 12], [8, 56, 1.25, 8], [60, 48, 1.6, -10]].forEach(p => {
    x.save();
    x.translate(p[0], p[1]); x.rotate(p[3] * Math.PI / 180); x.scale(p[2], p[2]);
    paw(x);
    x.restore();
  });
  x.restore();

  /* ---------- cat portrait, top right ---------- */
  drawCatBox(x, W - 168, 74, 108, catIndex, AC);

  /* ---------- brand ---------- */
  x.textAlign = 'center';
  x.fillStyle = INK; x.font = '800 17px Inter, sans-serif';
  x.fillText('Visual Studio Joe', W / 2, 100);

  /* ---------- tool mark ---------- */
  if (iconPath) {
    x.save();
    x.fillStyle = AC;
    x.beginPath(); x.arc(W / 2, 154, 33, 0, Math.PI * 2); x.fill();
    x.translate(W / 2 - 17, 154 - 17);
    x.scale(34 / 24, 34 / 24);
    x.fillStyle = '#fff';
    x.fill(new Path2D(iconPath));
    x.restore();
  }

  /* ---------- kicker + rule ---------- */
  const topY = iconPath ? 216 : 168;
  x.fillStyle = INK; x.font = 'bold 15px Inter, sans-serif';
  x.fillText('C E R T I F I C A T E   O F   C O M P L E T I O N', W / 2, topY);

  x.strokeStyle = hexA(AC, .5); x.lineWidth = 1;
  x.beginPath(); x.moveTo(W / 2 - 220, topY + 18); x.lineTo(W / 2 - 20, topY + 18); x.stroke();
  x.beginPath(); x.moveTo(W / 2 + 20, topY + 18); x.lineTo(W / 2 + 220, topY + 18); x.stroke();
  x.fillStyle = AC; x.font = '14px Georgia, serif';
  x.fillText('❋', W / 2, topY + 23);

  /* ---------- title ---------- */
  x.fillStyle = '#1b1b1b'; x.font = 'bold 54px Georgia, serif';
  x.fillText(title, W / 2, topY + 76);

  x.fillStyle = '#6b6b6b'; x.font = '15px Inter, sans-serif';
  x.fillText(subtitle, W / 2, topY + 104);

  /* ---------- name ---------- */
  x.fillStyle = '#6b6b6b'; x.font = 'italic 16px Inter, sans-serif';
  x.fillText('This certifies that', W / 2, topY + 148);

  x.fillStyle = INK; x.font = 'bold 46px Georgia, serif';
  x.fillText(name, W / 2, topY + 200);
  x.strokeStyle = '#b9b9b9'; x.lineWidth = 1;
  x.beginPath(); x.moveTo(W / 2 - 300, topY + 218); x.lineTo(W / 2 + 300, topY + 218); x.stroke();

  /* ---------- body copy ---------- */
  x.fillStyle = '#4a4a4a'; x.font = '15px Inter, sans-serif';
  let line = '', y = topY + 256;
  body.split(' ').forEach(word => {
    const test = line ? line + ' ' + word : word;
    if (x.measureText(test).width > 800) { x.fillText(line, W / 2, y); y += 24; line = word; }
    else line = test;
  });
  if (line) { x.fillText(line, W / 2, y); }

  /* ---------- pills ---------- */
  y += 40;
  x.font = '600 13px Inter, sans-serif';
  const padX = 14, gap = 9, maxRow = 980;
  const rows = [];
  let row = [], rowW = 0;
  items.forEach(t => {
    const w = x.measureText(t).width + padX * 2;
    if (rowW + w + gap > maxRow && row.length) { rows.push({ row, rowW }); row = []; rowW = 0; }
    row.push({ t, w }); rowW += w + gap;
  });
  if (row.length) rows.push({ row, rowW });

  rows.forEach(({ row: r, rowW: rw }) => {
    let cx = W / 2 - (rw - gap) / 2;
    r.forEach(({ t, w }) => {
      x.fillStyle = '#ffffff';
      x.strokeStyle = '#e2ded2'; x.lineWidth = 1;
      x.beginPath();
      if (x.roundRect) x.roundRect(cx, y - 15, w, 26, 13); else x.rect(cx, y - 15, w, 26);
      x.fill(); x.stroke();
      x.fillStyle = '#333'; x.textAlign = 'center';
      x.fillText(t, cx + w / 2, y + 3);
      cx += w + gap;
    });
    y += 34;
  });

  /* ---------- footer: value ABOVE the line, label under it ---------- */
  const fy = H - 132;
  const colL = 330, colR = W - 330;

  x.fillStyle = '#2b2b2b'; x.font = '600 15px Inter, sans-serif';
  x.fillText(fmtLong(new Date()), colL, fy - 8);
  x.font = 'bold 22px Georgia, serif';
  x.fillText('Joemark Basa', colR, fy - 8);

  x.strokeStyle = '#b9b9b9'; x.lineWidth = 1;
  x.beginPath(); x.moveTo(colL - 150, fy); x.lineTo(colL + 150, fy); x.stroke();
  x.beginPath(); x.moveTo(colR - 150, fy); x.lineTo(colR + 150, fy); x.stroke();

  x.fillStyle = '#8a8a8a'; x.font = 'bold 10px Inter, sans-serif';
  x.fillText('D A T E   O F   C O M P L E T I O N', colL, fy + 18);
  x.fillText('A P P   D E V E L O P E R', colR, fy + 18);

  /* ---------- seal ---------- */
  x.save();
  x.strokeStyle = AC; x.lineWidth = 2; x.setLineDash([5, 4]);
  x.beginPath(); x.arc(W / 2, fy - 8, 36, 0, Math.PI * 2); x.stroke();
  x.setLineDash([]);
  x.fillStyle = AC;
  x.translate(W / 2 - 11, fy - 26); x.scale(22 / 24, 22 / 24);
  paw(x);
  x.restore();
  x.fillStyle = AC; x.font = 'bold 8px Inter, sans-serif';
  x.fillText('C E R T I F I E D', W / 2, fy + 16);

  /* ---------- disclaimer ---------- */
  x.strokeStyle = '#d8d4c8'; x.lineWidth = 1; x.setLineDash([2, 3]);
  x.beginPath(); x.moveTo(W / 2 - 380, H - 82); x.lineTo(W / 2 + 380, H - 82); x.stroke();
  x.setLineDash([]);

  x.fillStyle = '#a9a9a9'; x.font = 'italic 11px Inter, sans-serif';
  const disc = 'For fun, not for hiring. This is a personal-project completion record from an independently built roadmap — not an accredited qualification, and it carries no formal recognition. It simply says you finished this course.';
  let dl = '', dy = H - 62;
  disc.split(' ').forEach(word => {
    const test = dl ? dl + ' ' + word : word;
    if (x.measureText(test).width > 760) { x.fillText(dl, W / 2, dy); dy += 16; dl = word; }
    else dl = test;
  });
  if (dl) x.fillText(dl, W / 2, dy);

  return c;
}

/** A paw, drawn at 24x24 from the current transform. */
function paw(x) {
  const e = (cx, cy, rx, ry) => { x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); x.fill(); };
  e(12, 15, 4.6, 4);
  e(6.6, 9.4, 2.1, 2.7);
  e(10.3, 6.8, 2.1, 2.9);
  e(14.2, 6.9, 2.1, 2.9);
  e(17.6, 9.6, 2.1, 2.7);
}

/** The framed cat portrait, drawn to match catPortrait()'s SVG. */
function drawCatBox(x, cx, cy, size, i, eyeColor) {
  const f = CAT_FUR[(i || 0) % CAT_FUR.length];
  const half = size / 2;

  // white photo border
  x.save();
  x.fillStyle = '#fff';
  x.fillRect(cx - half - 4, cy - half - 4, size + 8, size + 8);
  x.fillStyle = f.belly;
  x.globalAlpha = .35;
  x.fillRect(cx - half, cy - half, size, size);
  x.globalAlpha = 1;

  // draw the cat in a 100x100 space
  x.translate(cx - half, cy - half);
  x.scale(size / 100, size / 100);

  const tri = (pts, fill) => {
    x.fillStyle = fill; x.beginPath();
    x.moveTo(pts[0], pts[1]); x.lineTo(pts[2], pts[3]); x.lineTo(pts[4], pts[5]);
    x.closePath(); x.fill();
  };
  const ell = (a, b, rx, ry, fill) => {
    x.fillStyle = fill; x.beginPath(); x.ellipse(a, b, rx, ry, 0, 0, Math.PI * 2); x.fill();
  };

  tri([22, 40, 26, 15, 44, 30], f.base);
  tri([78, 40, 74, 15, 56, 30], f.base);
  tri([27, 37, 29.5, 22, 40, 31], '#f6b8c4');
  tri([73, 37, 70.5, 22, 60, 31], '#f6b8c4');

  ell(50, 56, 30, 27, f.base);
  ell(50, 64, 19, 16, f.belly);

  if (i % 3 === 0) {
    x.strokeStyle = f.dark; x.lineWidth = 3.2; x.lineCap = 'round';
    [[38, 33, 40, 46], [50, 30, 50, 43], [62, 33, 60, 46]].forEach(s => {
      x.beginPath(); x.moveTo(s[0], s[1]); x.quadraticCurveTo(s[0] + 2, s[1] + 7, s[2], s[3]); x.stroke();
    });
  }

  ell(39, 53, 5.5, 6.5, '#fff');
  ell(61, 53, 5.5, 6.5, '#fff');
  ell(39, 53.5, 3, 4.5, eyeColor || '#3a3a3a');
  ell(61, 53.5, 3, 4.5, eyeColor || '#3a3a3a');
  ell(40.3, 51.4, 1.2, 1.2, '#fff');
  ell(62.3, 51.4, 1.2, 1.2, '#fff');

  tri([47, 62, 53, 62, 50, 66], '#e98a9c');

  x.strokeStyle = f.dark; x.lineWidth = 2; x.lineCap = 'round';
  x.beginPath(); x.moveTo(50, 66); x.quadraticCurveTo(46, 71, 42, 68); x.stroke();
  x.beginPath(); x.moveTo(50, 66); x.quadraticCurveTo(54, 71, 58, 68); x.stroke();

  x.lineWidth = 1.6; x.globalAlpha = .8;
  [[20, 60, 36, 62], [20, 67, 36, 66], [80, 60, 64, 62], [80, 67, 64, 66]].forEach(w => {
    x.beginPath(); x.moveTo(w[0], w[1]); x.lineTo(w[2], w[3]); x.stroke();
  });
  x.restore();
}

/** #rrggbb + alpha -> rgba() */
function hexA(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(ch => ch + ch).join('') : h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function downloadCert(kind, trackId) {
  const who = (state.name || '').trim() || 'Your Name';
  let cfg;

  if (kind === 'master') {
    cfg = {
      title: 'AI Automation Specialist',
      subtitle: 'Technical Virtual Assistant Program · 12 Weeks · 84 Days',
      name: who,
      body: 'has completed a self-directed 84-day program covering client management systems, structured data, workflow automation, AI integration and applied tool building — demonstrating practical competence across the following platforms:',
      items: TRACKS.map(t => t.name),
      accent: '#4f46e5',
      ink: '#33475b',
      catIndex: 8,                       // the 9th cat, unique to this one
      iconPath: null
    };
  } else {
    const t = TRACKS.find(z => z.id === trackId);
    if (!t) return;
    const b = BRAND[t.id];
    const ic = TOOL_ICON[t.id];
    cfg = {
      title: t.name,
      subtitle: `${t.weeksLabel} · ${trackProgress(t).total} daily tasks`,
      name: who,
      body: `has completed every module in the ${t.name} track of the AI Automation Specialist roadmap, covering:`,
      items: t.modules.map(m => `Week ${m.week}: ${m.title}`),
      accent: t.color,
      ink: b ? b.ink : '#33475b',
      catIndex: TRACKS.indexOf(t),       // each track gets its own cat
      iconPath: ic ? ic.d : null
    };
  }

  const canvas = certPNG(cfg);
  canvas.toBlob(blob => {
    if (!blob) { toast('Could not generate the image'); return; }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${who.replace(/[^a-z0-9]+/gi, '-')}-${kind === 'master' ? 'AI-Automation-Specialist' : trackId}-certificate.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    toast('Certificate saved as PNG');
  }, 'image/png');
}

/** Opens the user's mail app with a congratulations message pre-written. */
function emailCert() {
  const who   = (state.name || '').trim() || 'there';
  const first = who.split(' ')[0];
  const to    = state.email || '';
  const done  = TRACKS.map(t => `  • ${t.name}`).join('\n');

  const subject = `🏆 Certificate — ${who} is an AI Automation Specialist`;
  const bodyTxt =
`Congratulations, ${first}!

You finished all 84 days of the AI Automation Specialist roadmap — 12 weeks, 8 tracks, one hour at a time.

Tracks completed:
${done}

Completed on ${fmtLong(new Date())}.

That is a CRM stack, a data layer, three automation platforms, an AI integration layer and two portfolio builds. Go update the rate card.

— Your Automation Roadmap

P.S. Attach the certificate PNG you just downloaded to this email so you have a copy in your inbox.`;

  const href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTxt)}`;
  window.location.href = href;
}

/* =========================================================
   LOFI PLAYER — hidden YouTube IFrame player + small controls.

   Browsers refuse to start audio before the user interacts with
   the page, so the player boots muted and unmutes itself on your
   very first click or keypress anywhere on the site.
   ========================================================= */
const Music = (() => {
  let player = null, ready = false, wanted = null, unlocked = false;
  let watchdog = null;              // catches a station that loads but never plays
  const tried = new Set();          // stations already proven unplayable here

  /* A 24/7 stream that has gone offline still LOADS fine — it just never
     reaches the PLAYING state and fires no error. So after asking for a
     station, give it 9 seconds to actually start; if it hasn't, move on. */
  function armWatchdog() {
    clearTimeout(watchdog);
    watchdog = setTimeout(() => {
      if (!ready || !player || !player.getPlayerState) return;
      if (player.getPlayerState() === 1) return;          // 1 = PLAYING, fine
      nextStation('that one is offline — switching');
    }, 9000);
  }

  /** Move to the next genre in the list, remembering the dud. */
  function nextStation(why) {
    const picker = $('#musicPick');
    if (!picker) return;
    const opts = Array.from(picker.options).map(o => o.value);
    const cur  = state.musicId || opts[0];
    tried.add(cur);
    const next = opts.find(v => !tried.has(v));
    if (!next) { setMeta('no station would play'); return; }
    state.musicId = next;
    saveState();
    picker.value = next;
    setMeta(why || 'switching station…');
    if (player && player.loadVideoById) {
      player.loadVideoById({ videoId: next });
      if (unlocked) { player.unMute(); player.setVolume(state.musicVol == null ? 35 : state.musicVol); }
      armWatchdog();
    }
  }

  const nameOf = id => {
    const opt = $('#musicPick') && $('#musicPick').querySelector(`option[value="${id}"]`);
    return opt ? opt.textContent : 'lofi';
  };
  const setMeta = txt => { if ($('#musicName')) $('#musicName').textContent = txt; };
  const setBtn  = playing => { if ($('#musicToggle')) $('#musicToggle').textContent = playing ? '❚❚' : '♪'; };

  function boot() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.onerror = () => setMeta('music blocked (offline?)');
    document.head.appendChild(tag);
  }

  window.onYouTubeIframeAPIReady = function () {
    const id = state.musicId || 'CFGLoQIhmow';
    player = new YT.Player('ytPlayer', {
      videoId: id,
      playerVars: { autoplay: 1, controls: 0, disablekb: 1, playsinline: 1, rel: 0, loop: 1, playlist: id },
      events: {
        onReady: e => {
          ready = true;
          e.target.setVolume(state.musicVol == null ? 35 : state.musicVol);
          e.target.mute();                       // required for an unprompted start
          if (state.musicOn !== false) e.target.playVideo();
          setMeta(nameOf(id) + ' · click anywhere for sound');
          setBtn(state.musicOn !== false);
        },
        onStateChange: e => {
          if (e.data === YT.PlayerState.PLAYING) {
            clearTimeout(watchdog);            // it started, all good
            setBtn(true);
            setMeta(nameOf(state.musicId));
          }
          if (e.data === YT.PlayerState.PAUSED) setBtn(false);
          // a finished mix simply restarts
          if (e.data === YT.PlayerState.ENDED && player.loadVideoById) {
            player.loadVideoById(state.musicId);
          }
        },
        // A station can refuse to embed. Walk down the list rather than dead-ending.
        onError: () => nextStation('that one would not load — switching')
      }
    });
  };

  /** First real user gesture: legally allowed to make noise now.
   *  If the IFrame API has not finished loading yet we must WAIT and try
   *  again — the old version gave up silently, and because the gesture
   *  listener had already been removed, the player stayed muted forever. */
  function unlock(tries) {
    if (unlocked) return;
    if (!ready || !player) {
      const n = tries || 0;
      if (n < 24) setTimeout(() => unlock(n + 1), 250);   // keep trying for ~6s
      return;
    }
    unlocked = true;
    if (state.musicOn !== false) {
      player.unMute();
      player.setVolume(state.musicVol == null ? 35 : state.musicVol);
      player.playVideo();
      setMeta(nameOf(state.musicId));
      armWatchdog();
    }
  }

  return {
    boot, unlock,
    isPlaying() { return !!(ready && player && player.getPlayerState && player.getPlayerState() === 1); },
    /** Pause without touching state.musicOn, so we know to resume later. */
    duck()   { if (ready && player && player.pauseVideo) player.pauseVideo(); },
    unduck() {
      if (!ready || !player) return;
      player.unMute();
      player.setVolume(state.musicVol == null ? 35 : state.musicVol);
      player.playVideo();
    },
    toggle() {
      if (!ready || !player) return;
      const playing = player.getPlayerState && player.getPlayerState() === 1;
      if (playing) { player.pauseVideo(); state.musicOn = false; }
      else { player.unMute(); player.setVolume(state.musicVol == null ? 35 : state.musicVol); player.playVideo(); state.musicOn = true; unlocked = true; }
      saveState();
    },
    volume(v) {
      state.musicVol = v; saveState();
      if (ready && player) { player.setVolume(v); if (v > 0) player.unMute(); }
    },
    pick(id) {
      state.musicId = id;
      tried.clear();                 // a fresh manual choice deserves a clean slate
      saveState();
      if (!ready || !player) return;
      player.loadVideoById({ videoId: id });
      player.setVolume(state.musicVol == null ? 35 : state.musicVol);
      // choosing a genre IS a user gesture, so we are allowed to make noise
      unlocked = true;
      player.unMute();
      player.playVideo();
      setMeta(nameOf(id) + ' · starting…');
      armWatchdog();
    }
  };
})();

/* =========================================================
   ABOUT THEME — F4 「流星雨」 plays only while the About panel
   is open. The main lofi ducks out and comes back on close.
   ========================================================= */
const AboutMusic = (() => {
  /* A pool of anime mixes. One is picked at random each time the About
     panel opens, and we drop in at a random point inside it — so you get
     a different track almost every visit.

     All three are ordinary uploads, not 24/7 live streams. A stream that
     has ended still loads a player and plays silence, which is exactly
     what broke the lofi stations earlier. */
  const VIDEOS = [
    'yg0JcqzKjfM',   // 90's Anime Hits Playlist
    'Ub675XMsaZs',   // Vampire Knight — openings & endings
    '4xQ2go7zv5Q'    // Anime Openings & Endings Mix — full songs
  ];
  let VIDEO = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
  let p = null, ready = false, resumeMain = false, guard = null;

  /** Choose a different mix from the one currently loaded. */
  function pickVideo() {
    if (VIDEOS.length < 2) return VIDEOS[0];
    let next = VIDEO;
    while (next === VIDEO) next = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
    VIDEO = next;
    return VIDEO;
  }

  /* YouTube's `rel=0` has not actually disabled related videos since 2018 —
     it only limits them to the same channel. So when a track finishes, the
     embed can wander off into whatever it feels like playing next. This
     checks what is ACTUALLY loaded every few seconds and drags it back. */
  function startGuard() {
    clearInterval(guard);
    guard = setInterval(() => {
      if (!ready || !p || !p.getVideoData) return;
      let data = null;
      try { data = p.getVideoData(); } catch (_) { return; }
      if (data && data.video_id && data.video_id !== VIDEO) {
        try { p.loadVideoById({ videoId: VIDEO }); if (!state.aboutMuted) p.unMute(); } catch (_) {}
      }
    }, 4000);
  }
  function stopGuard() { clearInterval(guard); guard = null; }

  function build(then, tries) {
    if (p) { then && then(); return; }
    // The IFrame API may not have finished loading yet (e.g. About opened
    // within a second of page load). Wait for it instead of failing silently.
    if (!window.YT || !YT.Player) {
      const n = tries || 0;
      if (n < 20) setTimeout(() => build(then, n + 1), 250);
      else setBtn('unavailable');
      return;
    }
    p = new YT.Player('ytAbout', {
      videoId: VIDEO,
      // no loop/playlist params — looping is handled in code below, which is
      // more reliable than asking the embed to do it
      playerVars: { autoplay: 0, controls: 0, disablekb: 1, playsinline: 1, rel: 0 },
      events: {
        onReady: e => {
          ready = true;
          e.target.setVolume(state.aboutVol == null ? 45 : state.aboutVol);
          then && then();
        },
        // loop=1 is unreliable on some videos, so restart it by hand too
        onStateChange: e => {
          // finished -> start it over rather than letting YouTube pick something
          if (e.data === YT.PlayerState.ENDED && p.seekTo) { p.seekTo(0); p.playVideo(); }
        },
        onError: () => setBtn('unavailable')
      }
    });
  }

  function setBtn(mode) {
    const b = $('#aboutMute');
    if (!b) return;
    if (mode === 'unavailable') { b.textContent = '🚫'; b.title = 'Theme song unavailable'; return; }
    b.textContent = state.aboutMuted ? '🔇' : '🔊';
    b.title = state.aboutMuted ? 'Unmute theme song' : 'Mute theme song';
  }

  return {
    start() {
      resumeMain = Music.isPlaying();
      if (resumeMain) Music.duck();

      // already built? swap to a different mix for this visit
      const swap = !!p;
      if (swap) pickVideo();

      build(() => {
        if (!ready || !p) return;
        if (swap && p.loadVideoById) p.loadVideoById({ videoId: VIDEO });
        p.setVolume(state.aboutVol == null ? 45 : state.aboutVol);
        state.aboutMuted ? p.mute() : p.unMute();
        // Drop in at a random point in the mix so it is a different song
        // each visit. getDuration() is 0 until metadata loads, so fall
        // back to the start if we ask too early.
        let at = 0;
        try {
          const dur = p.getDuration ? p.getDuration() : 0;
          if (dur > 60) at = Math.floor(Math.random() * (dur * 0.85));
        } catch (_) {}
        p.seekTo(at, true);
        p.playVideo();
      });
      startGuard();
      setBtn();
    },
    stop() {
      stopGuard();
      if (ready && p && p.pauseVideo) { p.pauseVideo(); if (p.seekTo) p.seekTo(0); }
      if (resumeMain) Music.unduck();
      resumeMain = false;
    },
    toggleMute() {
      state.aboutMuted = !state.aboutMuted;
      saveState();
      if (ready && p) state.aboutMuted ? p.mute() : p.unMute();
      setBtn();
    }
  };
})();

/* =========================================================
   FOCUS TIMER — counts up, nudges you at the 1-hour mark.

   HOW TIME IS COUNTED (this matters):
   `accum` is the only number ever saved. It holds real banked
   milliseconds. Every tick we add the slice that just passed:

       accum += now - lastTick

   `lastTick` lives in memory ONLY and is never written to storage.
   That is the whole trick. Because a fresh page load starts with
   lastTick = null, there is no timestamp left over from last time
   for the clock to "catch up" against — so closing the site can
   never make the timer jump forward.

   Measuring a real wall-clock slice each tick (rather than just
   adding 1000ms) keeps it accurate when the browser throttles
   background tabs, so switching tabs still counts properly.
   ========================================================= */
const Timer = (() => {
  const GOAL = 60 * 60 * 1000;                 // one hour
  const SAVE_EVERY = 5000;                     // throttle writes to localStorage
  let iv = null;
  let lastTick = null;                         // in memory only — never persisted
  let lastSave = 0;

  const t = () => state.timer || (state.timer = { running: false, accum: 0, notified: false });

  /** Bank the slice of time since the previous tick. */
  function checkpoint() {
    const s = t();
    if (!s.running) return;
    const now = Date.now();
    if (lastTick != null) s.accum += Math.max(0, now - lastTick);
    lastTick = now;
  }

  function elapsed() {
    const s = t();
    // lastTick is null right after a load, so nothing is ever reconstructed
    return s.accum + (s.running && lastTick != null ? Math.max(0, Date.now() - lastTick) : 0);
  }
  const two = n => String(n).padStart(2, '0');

  function paint() {
    checkpoint();                              // bank time before we read it
    const ms  = elapsed();
    const min = Math.floor(ms / 60000);
    const sec = Math.floor(ms / 1000) % 60;
    const s   = t();

    // periodic save so a browser crash loses seconds, not the session
    if (s.running && Date.now() - lastSave > SAVE_EVERY) {
      lastSave = Date.now();
      saveState();
    }
    if ($('#timerTime')) $('#timerTime').textContent = `${two(min)}:${two(sec)}`;
    if ($('#timerFill')) $('#timerFill').style.width = Math.min(100, ms / GOAL * 100) + '%';
    if ($('#timerToggle')) $('#timerToggle').textContent = s.running ? '❚❚' : '▶';
    if ($('#timerMeta')) {
      $('#timerMeta').textContent = !s.running ? 'focus timer · paused'
        : ms >= GOAL ? `focus time · ${min} min — hour complete ✓`
        : `focus time · ${Math.max(0, 60 - min)} min to go`;
    }
    if (s.running && ms >= GOAL && !s.notified) {
      s.notified = true; saveState();
      hourUp(min);
    }
  }

  function hourUp(min) {
    Sfx.level();
    $('#hourName').textContent = (state.name || '').trim().split(' ')[0] || 'friend';
    $('#hourLen').textContent  = min + ' minutes';
    $('#hourModal').hidden = false;
    document.body.style.overflow = 'hidden';
    document.title = '⏱ Hour complete — AI Automation Roadmap';
    try {
      if (window.Notification && Notification.permission === 'granted') {
        new Notification("That's your hour", { body: 'Focus session complete. Check off today\'s task.' });
      }
    } catch (_) { /* file:// blocks notifications; the modal is the real signal */ }
  }

  function loop() { clearInterval(iv); iv = setInterval(paint, 500); paint(); }

  return {
    elapsed,
    init() {
      const s = t();
      delete s.startedAt;          // legacy field from the old wall-clock version
      s.running = false;           // ALWAYS open paused — never resume by itself
      lastTick = null;
      saveState();
      loop();
    },
    start() {
      const s = t();
      if (s.running) return;
      s.running = true;
      lastTick = Date.now();       // start measuring from now, not from storage
      lastSave = Date.now();
      saveState(); paint();
    },
    pause() {
      const s = t();
      if (!s.running) return;
      checkpoint();                // bank the final slice before stopping
      s.running = false;
      lastTick = null;
      saveState(); paint();
    },
    toggle() { t().running ? this.pause() : this.start(); },

    /** Page is going away: bank the time and stop. */
    suspend() {
      const s = t();
      if (!s.running) { saveState(); return; }
      checkpoint();
      s.running = false;
      lastTick = null;
      saveState();
    },
    /** Tab hidden: bank what we have but keep running. */
    flush() { checkpoint(); saveState(); },
    /** Redraw the display (used after returning from bfcache). */
    repaint() { paint(); },

    reset() {
      state.timer = { running: false, accum: 0, notified: false };
      lastTick = null;
      saveState(); paint();
      document.title = 'AI Automation VA Roadmap';
    },
    keepGoing() { const s = t(); s.notified = true; saveState(); }
  };
})();


/* ---------------------------------------------------------
   TIMER PAGE LIFECYCLE

   Closing / reloading / navigating away  -> pause and save.
   Switching tabs or minimising           -> keep running,
                                             just save progress.
   --------------------------------------------------------- */
// `pagehide` is the reliable one (fires on mobile Safari and on
// bfcache); `beforeunload` covers older desktop cases. Running both
// is harmless because suspend() is safe to call twice.
window.addEventListener('pagehide', () => Timer.suspend());
window.addEventListener('beforeunload', () => Timer.suspend());

// Hidden tab: bank progress but DO NOT pause — a tab switch should
// keep counting, which is why this calls flush() and not suspend().
document.addEventListener('visibilitychange', () => {
  if (document.hidden) Timer.flush();
});

// Coming back from the browser's back/forward cache: the page was
// suspended, so repaint to show the paused state.
window.addEventListener('pageshow', e => { if (e.persisted) Timer.repaint(); });
/* ---------------------------------------------------------
   DOCK WINDOW

   The Study Buddy and the timer/music bar used to be
   free-floating windows you could drag and resize. They now
   live inside `.rail`, a real layout column, so their size and
   position are fixed by CSS and cannot be moved. The old drag
   handler, resize observer and viewport-clamping code were
   removed rather than disabled, so nothing can re-enable them.

   Game.resize() still runs on window resize because the canvas
   has to match whatever width the rail gives it.
   --------------------------------------------------------- */
/* ---------------------------------------------------------
   VIEWPORT / MONITOR CHANGES

   Dragging the window to a second monitor is not always a plain
   resize. If that screen has different DPI scaling, the window can
   keep the same CSS width while devicePixelRatio changes — and the
   game canvas is sized in real device pixels, so it ends up blurry
   or the wrong size with no `resize` event to tell us.

   So we watch three things:
     1. window resize            (normal size change)
     2. devicePixelRatio change  (moved to a monitor with different scaling)
     3. the rail's actual box    (any layout shift we did not predict)
   --------------------------------------------------------- */
(function watchViewport() {
  let pending = null;

  function refresh() {
    clearTimeout(pending);
    pending = setTimeout(() => {
      if (typeof Game !== 'undefined' && Game.resize) Game.resize();
      if (typeof Timer !== 'undefined' && Timer.repaint) Timer.repaint();
    }, 120);                                  // debounce: dragging fires a lot
  }

  window.addEventListener('resize', refresh);
  window.addEventListener('orientationchange', refresh);

  // Re-arm on every DPI change, because the query itself is built from
  // the CURRENT ratio and stops matching once that ratio moves.
  function watchDpi() {
    const mq = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    const onChange = () => { refresh(); watchDpi(); };
    if (mq.addEventListener) mq.addEventListener('change', onChange, { once: true });
    else if (mq.addListener) mq.addListener(onChange);
  }
  try { watchDpi(); } catch (_) { /* very old browser: the resize listener still covers most cases */ }

  // The rail is what actually decides the canvas width.
  if (window.ResizeObserver) {
    const rail = document.getElementById('rail');
    if (rail) new ResizeObserver(refresh).observe(rail);
  }
})();


/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
(function init() {
  if (!storageOK) {
    showStorageWarning('This browser is blocking localStorage (private mode, or the file is running in a sandboxed preview). Progress is being kept in memory only and will be lost when you refresh. Open index.html directly from your Desktop in Chrome or Edge and it will save normally.');
  }

  applyTheme();
  el.startDate.value = state.startDate || '';
  el.totalCount.textContent = TOTAL_DAYS;
  el.autoplayLabel.textContent = state.autoplay === false ? 'Autoplay: off' : 'Autoplay: on';

  renderGreeting();
  $('#wPhotoFile').addEventListener('change', e => {
    if (e.target.files && e.target.files[0]) setPhotoFromFile(e.target.files[0]);
    e.target.value = '';
  });
  $('#pfFile').addEventListener('change', e => {
    if (e.target.files && e.target.files[0]) importProgress(e.target.files[0]);
    e.target.value = '';                        // allow re-picking the same file
  });

  /* ---- focus timer + lofi ---- */
  Timer.init();
  Music.boot();

  // Both side panels ALWAYS open as icons. You expand the one you want;
  // it is not remembered between visits, so every load starts tidy.
  // The music is unaffected — its player lives in #ytHost outside the
  // rail, so it keeps auto-playing whether the panel is shown or not.
  state.utilHidden = true;
  state.dockHidden = true;

  if (state.utilHidden) { $('#utilBar').hidden = true; $('#utilOpen').hidden = false; }
  $('#musicVol').value = state.musicVol == null ? 35 : state.musicVol;

  // A station saved before the genre list changed may no longer exist.
  // Fall back to the first option rather than showing a blank selector.
  const picker  = $('#musicPick');
  const genreIds = Array.from(picker.options).map(o => o.value);
  if (!state.musicId || genreIds.indexOf(state.musicId) === -1) {
    state.musicId = genreIds[0];
    saveState();
  }
  picker.value = state.musicId;
  $('#musicVol').addEventListener('input', e => Music.volume(+e.target.value));
  $('#musicPick').addEventListener('change', e => Music.pick(e.target.value));

  // Browsers block audio until the user interacts — the first click or
  // keypress anywhere unmutes the music and starts the timer.
  // Unlocks audio only. The timer NEVER starts on its own — it starts
  // when you press play, and nothing else.
  const firstGesture = () => {
    Music.unlock();
    document.removeEventListener('pointerdown', firstGesture);
    document.removeEventListener('keydown', firstGesture);
  };
  document.addEventListener('pointerdown', firstGesture);
  document.addEventListener('keydown', firstGesture);

  // study buddy — position and size come from the rail's CSS now, so
  // there is no saved geometry to restore.
  el.gameScore.textContent = state.fish || 0;
  $('#gameSound').textContent = state.muted ? '🔇' : '🔊';
  Game.syncHud();

  // clear geometry saved by the old draggable version, once
  if (state.dockPos || state.dockSize) {
    state.dockPos = null;
    state.dockSize = null;
    ['width', 'height', 'left', 'top', 'right'].forEach(p => el.dock.style.removeProperty(p));
    saveState();
  }

  const wide = window.matchMedia('(min-width: 1440px)');
  const syncDock = () => {
    if (state.dockHidden) { el.dock.hidden = true; $('#dockOpen').hidden = false; Game.stop(); return; }
    el.dock.hidden = false; $('#dockOpen').hidden = true;
    wide.matches && !document.hidden ? Game.start() : Game.stop();
    Game.resize();
  };
  wide.addEventListener('change', syncDock);
  document.addEventListener('visibilitychange', syncDock);
  syncDock();

  // sanity check: every module must have exactly 7 tasks
  const bad = MODULES.filter(m => m.mod.tasks.length !== DAYS_PER_WEEK);
  if (bad.length) console.warn('Modules with wrong task count:', bad);

  setView(state.view === 'track' && !state.activeTrack ? 'overview' : state.view);
  renderAll();

  // Ask until a name actually exists. Skipping is allowed, but since the
  // name is what goes on the certificates, we ask again next time rather
  // than silently locking you out of ever setting it.
  if (!(state.name || '').trim()) openWelcome();
})();

/* =========================================================
   LIVING BACKGROUND
   One fixed canvas behind the page: a slow network of
   workflow "nodes" that link up when close, pulses that
   travel along those links, and soft particles rising.
   Pauses when the tab is hidden; static under reduced motion.
   ========================================================= */
(function () {
  const canvas = document.createElement('canvas');
  canvas.className = 'bg-fx';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LINK = 150;                    // px — max distance for a link
  let w, h, dpr, nodes = [], motes = [], pulses = [], raf = null, last = 0;

  const isDark = () => document.documentElement.dataset.theme === 'dark';
  const palette = () => isDark()
    ? { node: '165,180,252', link: '129,140,248', mote: '196,181,253', pulse: '244,114,182' }
    : { node: '99,102,241',  link: '99,102,241',  mote: '139,92,246',  pulse: '236,72,153' };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // density scales with area so phones stay light
    const nCount = Math.round(Math.min(70, Math.max(24, (w * h) / 22000)));
    const mCount = Math.round(nCount * 0.8);
    nodes = Array.from({ length: nCount }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
      r: 1.4 + Math.random() * 1.8
    }));
    motes = Array.from({ length: mCount }, () => newMote(true));
    pulses = [];
  }

  function newMote(anywhere) {
    return {
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 10,
      r: .6 + Math.random() * 1.8,
      vy: .12 + Math.random() * .35,
      drift: Math.random() * Math.PI * 2,
      a: .15 + Math.random() * .45
    };
  }

  function frame(t) {
    const dt = Math.min(50, t - (last || t)) / 16.7;  // ~1 at 60fps
    last = t;
    const c = palette();
    ctx.clearRect(0, 0, w, h);

    // nodes drift and wrap
    for (const n of nodes) {
      n.x += n.vx * dt; n.y += n.vy * dt;
      if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20;
      if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20;
    }

    // links
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(${c.link},${(1 - d / LINK) * .14})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          // occasionally send a pulse down a fresh link
          if (!reduced && pulses.length < 6 && Math.random() < .0006 * dt) pulses.push({ a, b, p: 0 });
        }
      }
    }

    // travelling pulses — "data moving through the workflow"
    pulses = pulses.filter(p => {
      p.p += .012 * dt;
      const d = Math.hypot(p.a.x - p.b.x, p.a.y - p.b.y);
      if (p.p >= 1 || d > LINK * 1.2) return false;
      const x = p.a.x + (p.b.x - p.a.x) * p.p, y = p.a.y + (p.b.y - p.a.y) * p.p;
      const g = ctx.createRadialGradient(x, y, 0, x, y, 9);
      g.addColorStop(0, `rgba(${c.pulse},.9)`); g.addColorStop(1, `rgba(${c.pulse},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.fill();
      return true;
    });

    // node dots
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${c.node},.42)`;
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }

    // rising motes
    for (let i = 0; i < motes.length; i++) {
      const m = motes[i];
      m.y -= m.vy * dt; m.drift += .01 * dt;
      const x = m.x + Math.sin(m.drift) * 12;
      if (m.y < -10) { motes[i] = newMote(false); continue; }
      const fade = Math.min(1, m.y / (h * .25));           // fade out near the top
      ctx.fillStyle = `rgba(${c.mote},${m.a * fade})`;
      ctx.beginPath(); ctx.arc(x, m.y, m.r, 0, Math.PI * 2); ctx.fill();
    }

    if (!reduced) raf = requestAnimationFrame(frame);
  }

  function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
  function stop()  { if (raf) cancelAnimationFrame(raf); raf = null; }

  resize();
  window.addEventListener('resize', () => { resize(); if (reduced) frame(0); });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : (reduced ? null : start()));
  // redraw once on theme change so the static (reduced-motion) frame recolours too
  new MutationObserver(() => reduced && frame(0))
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  reduced ? frame(0) : start();
})();
