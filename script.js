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
  musicId: 'jfKfPfyJRdk',
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
        <span class="tnav-bar"><span class="tnav-fill" style="width:${p.pct}%"></span></span>
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
        <span class="tcard-bar" style="display:block"><span class="tcard-fill" style="width:${p.pct}%"></span></span>
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
        <div class="badge-medal">${unlocked ? t.icon : '🔒'}</div>
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
  el.certTools.innerHTML = TRACKS.map(t => `<li>${escapeHtml(t.name)}</li>`).join('');
  el.certNameOut.textContent = state.name || 'Your Name';
  el.certName.value = state.name || '';
  el.certDate.textContent = fmtLong(new Date());
}

function openBadgeCert(trackId) {
  const t = TRACKS.find(x => x.id === trackId);
  if (!t) return;
  const weeks = t.modules.map(m => `Week ${m.week}: ${m.title}`);
  el.badgeCert.innerHTML = `
    <div class="cert-inner" style="border-color:${t.color}">
      <div class="cert-seal" style="background:${t.color}">${t.icon}</div>
      <p class="cert-kicker">Track Completed</p>
      <h3 class="cert-title">${escapeHtml(t.name)}</h3>
      <p class="cert-sub">${escapeHtml(t.weeksLabel)} · ${trackProgress(t).total} daily tasks</p>
      <p class="cert-awarded">Awarded to</p>
      <p class="cert-name">${escapeHtml(state.name || 'Your Name')}</p>
      <p class="cert-body">for completing every module in this track, covering:</p>
      <ul class="cert-tools">${weeks.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul>
      <div class="cert-foot">
        <div class="cert-foot-col">
          <div class="cert-line"></div>
          <div class="cert-foot-label">Date</div>
          <div class="cert-foot-value">${fmtLong(new Date())}</div>
        </div>
        <div class="cert-foot-col">
          <div class="cert-line"></div>
          <div class="cert-foot-label">Program</div>
          <div class="cert-foot-value">AI Automation Specialist Roadmap</div>
        </div>
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
      toast(`🎉 ${wasTrack.name} track complete — badge unlocked`);
    }
  }
  if (beforeAll < 100 && overallProgress().pct === 100) {
    setTimeout(() => {
      setView('certificates');
      renderCertificate();
      openModal(el.certModal);
      toast('🏆 All 8 tracks complete — Master Certificate unlocked');
    }, 500);
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
const DOG_AT = 20, DOUBLE_AT = 100, SWIM_AT = 500;
const DOG_SHOWS_FOR = 15000;               // 15s on screen
const DOG_GAP = [9000, 22000];             // then hidden for 9–22s
const MAX_LIVES = 3;

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
  let fishes = [], dog = null, lives = MAX_LIVES, dead = false;
  let active = false, raf = null, tick = 0, pop = 0, invulnUntil = 0;
  let dogNextAt = 0, dogUntil = 0, spoke = 0;
  let bubble = null;                       // { text, until }
  const idle = { tx: null, ty: null, nextMove: 0, nextTalk: 0, giveUpAt: 0 };

  const rnd  = (a, b) => a + Math.random() * (b - a);
  const now  = () => performance.now();
  const score = () => state.fish || 0;

  /* ---------- helpers ---------- */
  function say(text, ms) {
    bubble = { text, until: now() + (ms || 2600) };
  }
  function fishCount() { return score() >= DOUBLE_AT ? 2 : 1; }
  function fishSwims() { return score() >= SWIM_AT; }

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
      el.gameLives.textContent = '♥'.repeat(Math.max(0, lives)) + '♡'.repeat(Math.max(0, MAX_LIVES - lives));
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

  function drawDog(d) {
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
    px(6, -3, 1, 1, '#fca5a5');            // eye (angry red)
    px(-5, 5 - trot, 2, 1, dark);
    px(1, 5 - (1 - trot), 2, 1, dark);
    // little rage puffs
    if (tick % 40 < 12) {
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
  function loseLife() {
    lives--;
    invulnUntil = now() + 1600;
    syncHud();
    if (lives <= 0) {
      Sfx.die();
      dead = true;
      dog = null;
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
    lives = MAX_LIVES;
    cat.x = W / 2; cat.y = H / 2; cat.vx = cat.vy = 0;
    fishes = []; syncFish();
    dog = null;
    dogNextAt = score() >= DOG_AT ? now() + rnd(...DOG_GAP) : 0;
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
    if (before < DOG_AT && after >= DOG_AT) {
      Sfx.level(); say('uh oh — a dog is coming', 3200);
      dogNextAt = now() + rnd(2500, 5000);
    } else if (before < DOUBLE_AT && after >= DOUBLE_AT) {
      Sfx.level(); say('double fish unlocked!', 3200);
    } else if (before < SWIM_AT && after >= SWIM_AT) {
      Sfx.level(); say('the fish can swim now. good luck.', 3600);
    }
    syncFish();
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

    /* dog schedule — never while you're studying */
    if (active && score() >= DOG_AT) {
      if (!dogNextAt && !dog) dogNextAt = t + rnd(...DOG_GAP);
      if (!dog && dogNextAt && t >= dogNextAt) {
        const edge = Math.floor(rnd(0, 4));
        dog = {
          x: edge === 0 ? 10 : edge === 1 ? W - 10 : rnd(20, W - 20),
          y: edge === 2 ? 10 : edge === 3 ? H - 10 : rnd(20, H - 20),
          vx: 0, vy: 0, wander: 0
        };
        dogUntil = t + DOG_SHOWS_FOR;
        dogNextAt = 0;
        Sfx.bark();
        say('run!', 1500);
      }
      if (dog && t >= dogUntil) {
        dog = null;
        dogNextAt = t + rnd(...DOG_GAP);
      }
    }

    /* dog behaviour — chases, but wanders while it does */
    if (dog) {
      dog.wander += rnd(-0.14, 0.14);
      dog.wander = Math.max(-0.9, Math.min(0.9, dog.wander));
      const ang = Math.atan2(cat.y - dog.y, cat.x - dog.x) + dog.wander;
      const spd = 1.18;
      dog.vx = Math.cos(ang) * spd;
      dog.vy = Math.sin(ang) * spd;
      dog.x = Math.max(14, Math.min(W - 14, dog.x + dog.vx));
      dog.y = Math.max(20, Math.min(H - 16, dog.y + dog.vy));
      drawDog(dog);

      if (t > invulnUntil && Math.hypot(dog.x - cat.x, dog.y - cat.y) < 21) loseLife();

      // countdown ring so you can see how long it sticks around
      const left = Math.max(0, (dogUntil - t) / DOG_SHOWS_FOR);
      ctx.strokeStyle = 'rgba(239,68,68,.55)'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(W - 14, 14, 6, -Math.PI / 2, -Math.PI / 2 + left * Math.PI * 2);
      ctx.stroke();
    }

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

    if (!active) {
      ctx.fillStyle = ink.txt;
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('paused · click to play', W / 2, H - 10);
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
    dogNextAt = score() >= DOG_AT ? now() + rnd(4000, 9000) : 0;
    if (el.gameHint) el.gameHint.textContent = 'wasd / arrows';
    cv.classList.add('playing');
  });

  // Clicked away — pause the game entirely and switch to companion mode.
  cv.addEventListener('blur', () => {
    active = false;
    for (const k in keys) keys[k] = false;
    dog = null;                                    // no dog while you study
    dogNextAt = 0;
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
      lives = MAX_LIVES;
      dead = false;
      dog = null;
      dogNextAt = 0;
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
function certPNG(opts) {
  const { title, subtitle, name, body, items, footRight } = opts;
  const S = 2;                                   // 2x for a crisp file
  const W = 1400, H = 990;
  const c = document.createElement('canvas');
  c.width = W * S; c.height = H * S;
  const x = c.getContext('2d');
  x.scale(S, S);

  x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
  x.strokeStyle = '#4f46e5'; x.lineWidth = 6;  x.strokeRect(34, 34, W - 68, H - 68);
  x.strokeStyle = '#d3d8e0'; x.lineWidth = 1.5; x.strokeRect(50, 50, W - 100, H - 100);

  x.textAlign = 'center';

  // seal
  x.fillStyle = '#4f46e5';
  x.beginPath(); x.arc(W / 2, 138, 34, 0, Math.PI * 2); x.fill();
  x.fillStyle = '#fff'; x.font = 'bold 30px Inter, sans-serif';
  x.fillText('⚡', W / 2, 149);

  x.fillStyle = '#8b94a3'; x.font = 'bold 15px Inter, sans-serif';
  x.fillText('CERTIFICATE OF COMPLETION'.split('').join(' '), W / 2, 214);

  x.fillStyle = '#111827'; x.font = 'bold 62px Georgia, serif';
  x.fillText(title, W / 2, 288);

  x.fillStyle = '#8b94a3'; x.font = '17px Inter, sans-serif';
  x.fillText(subtitle, W / 2, 324);

  x.fillStyle = '#4b5563'; x.font = '17px Inter, sans-serif';
  x.fillText('This certifies that', W / 2, 402);

  x.fillStyle = '#111827'; x.font = 'bold 52px Georgia, serif';
  x.fillText(name, W / 2, 466);
  x.strokeStyle = '#d3d8e0'; x.lineWidth = 1;
  x.beginPath(); x.moveTo(W / 2 - 330, 492); x.lineTo(W / 2 + 330, 492); x.stroke();

  // wrapped body copy
  x.fillStyle = '#4b5563'; x.font = '17px Inter, sans-serif';
  let line = '', y = 540;
  body.split(' ').forEach(word => {
    const test = line ? line + ' ' + word : word;
    if (x.measureText(test).width > 820) { x.fillText(line, W / 2, y); y += 27; line = word; }
    else line = test;
  });
  if (line) x.fillText(line, W / 2, y);

  // pills
  y += 52;
  x.font = 'bold 15px Inter, sans-serif';
  const pads = 17, gap = 11, rows = [];
  let row = [], rowW = 0;
  items.forEach(t => {
    const w = x.measureText(t).width + pads * 2;
    if (rowW + w + gap > 1060 && row.length) { rows.push({ row, rowW }); row = []; rowW = 0; }
    row.push({ t, w }); rowW += w + gap;
  });
  if (row.length) rows.push({ row, rowW });

  rows.forEach(({ row: r, rowW: rw }) => {
    let cx = W / 2 - (rw - gap) / 2;
    r.forEach(({ t, w }) => {
      x.fillStyle = '#eef2ff';
      x.beginPath();
      if (x.roundRect) x.roundRect(cx, y - 20, w, 32, 16); else x.rect(cx, y - 20, w, 32);
      x.fill();
      x.fillStyle = '#4338ca'; x.textAlign = 'center';
      x.fillText(t, cx + w / 2, y + 1);
      cx += w + gap;
    });
    y += 44;
  });

  // footer
  const fy = H - 116;
  x.strokeStyle = '#d3d8e0'; x.lineWidth = 1;
  x.beginPath(); x.moveTo(240, fy); x.lineTo(600, fy); x.stroke();
  x.beginPath(); x.moveTo(W - 600, fy); x.lineTo(W - 240, fy); x.stroke();
  x.fillStyle = '#8b94a3'; x.font = 'bold 12px Inter, sans-serif';
  x.fillText('D A T E   O F   C O M P L E T I O N', 420, fy + 26);
  x.fillText('P R O G R A M', W - 420, fy + 26);
  x.fillStyle = '#111827'; x.font = 'bold 16px Inter, sans-serif';
  x.fillText(fmtLong(new Date()), 420, fy + 50);
  x.fillText(footRight, W - 420, fy + 50);

  return c;
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
      footRight: 'Technical VA → AI Automation Specialist'
    };
  } else {
    const t = TRACKS.find(z => z.id === trackId);
    if (!t) return;
    cfg = {
      title: t.name,
      subtitle: `${t.weeksLabel} · ${trackProgress(t).total} daily tasks`,
      name: who,
      body: `has completed every module in the ${t.name} track of the AI Automation Specialist roadmap, covering:`,
      items: t.modules.map(m => `Week ${m.week}: ${m.title}`),
      footRight: 'AI Automation Specialist Roadmap'
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
  const tried = new Set();          // stations already proven unembeddable here

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
    const id = state.musicId || 'jfKfPfyJRdk';
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
          if (e.data === YT.PlayerState.PLAYING) { setBtn(true); setMeta(nameOf(state.musicId || 'jfKfPfyJRdk')); }
          if (e.data === YT.PlayerState.PAUSED)  setBtn(false);
          if (e.data === YT.PlayerState.ENDED && player.loadVideoById) player.loadVideoById(state.musicId || 'jfKfPfyJRdk');
        },
        // A station can refuse to embed. Walk down the list rather than dead-ending.
        onError: () => {
          const opts = Array.from($('#musicPick').options).map(o => o.value);
          const i = opts.indexOf(state.musicId || opts[0]);
          const next = opts[(i + 1) % opts.length];
          if (tried.has(next) || tried.size >= opts.length) {
            setMeta('no station could load here');
            return;
          }
          tried.add(next);
          state.musicId = next; saveState();
          $('#musicPick').value = next;
          setMeta('switching station…');
          player.loadVideoById({ videoId: next });
        }
      }
    });
  };

  /** First real user gesture: legally allowed to make noise now. */
  function unlock() {
    if (unlocked || !ready || !player) return;
    unlocked = true;
    if (state.musicOn !== false) {
      player.unMute();
      player.setVolume(state.musicVol == null ? 35 : state.musicVol);
      player.playVideo();
      setMeta(nameOf(state.musicId || 'jfKfPfyJRdk'));
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
      state.musicId = id; saveState();
      if (!ready || !player) return;
      player.loadVideoById({ videoId: id });
      player.setVolume(state.musicVol == null ? 35 : state.musicVol);
      if (unlocked) player.unMute();
      setMeta(nameOf(id));
    }
  };
})();

/* =========================================================
   ABOUT THEME — F4 「流星雨」 plays only while the About panel
   is open. The main lofi ducks out and comes back on close.
   ========================================================= */
const AboutMusic = (() => {
  const VIDEO = 'ocTdA8NytIc';
  let p = null, ready = false, resumeMain = false;

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
      playerVars: { autoplay: 0, controls: 0, disablekb: 1, playsinline: 1, rel: 0, loop: 1, playlist: VIDEO },
      events: {
        onReady: e => {
          ready = true;
          e.target.setVolume(state.aboutVol == null ? 45 : state.aboutVol);
          then && then();
        },
        // loop=1 is unreliable on some videos, so restart it by hand too
        onStateChange: e => { if (e.data === YT.PlayerState.ENDED && p.seekTo) { p.seekTo(0); p.playVideo(); } },
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
      build(() => {
        if (!ready || !p) return;
        p.setVolume(state.aboutVol == null ? 45 : state.aboutVol);
        state.aboutMuted ? p.mute() : p.unMute();
        p.seekTo(0);
        p.playVideo();
      });
      setBtn();
    },
    stop() {
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
  if (state.musicId) $('#musicPick').value = state.musicId;
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
