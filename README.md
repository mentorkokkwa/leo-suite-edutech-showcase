# AI for Smarter Schools and Student Support — EduLens AI

Public portfolio showcase for **EduLens AI**.

> Full application source is in a **private** repo deployed to Vercel. This repo contains documentation, demo links, and selected non-sensitive samples for DSA-JC portfolio review.

---

## Live Demo

| Entry | URL |
|-------|-----|
| **EduLens home** | https://leo-suite-edutech-six.vercel.app/edulens?locale=en |
| **Homework analyzer** | https://leo-suite-edutech-six.vercel.app/edulens/homework-analyzer?locale=en |
| **Lesson generator** | https://leo-suite-edutech-six.vercel.app/edulens/lesson-generator?locale=en |
| **AI status** | https://leo-suite-edutech-six.vercel.app/api/edulens/ai-status?locale=en |
| **Vercel dashboard** | https://vercel.com/cenzhi/leo-suite-edutech |

---

## Demo Videos

- EduLens homework demo: *(add Drive / YouTube link)*
- Lesson generator walkthrough: *(add link)*

See [demo-videos.md](demo-videos.md) for the full list.

---

## Project Purpose

Built as a **DSA-JC Computing / AI** portfolio piece.

EduLens AI is a structured teaching assistant:

- Homework analyzer with marking-style feedback and mistake types
- Lesson generator with **multi-stage loading UX**, shareable report links, and output-type filtering
- RAG citation sanitization and smarter diagram rendering (no irrelevant math placeholders)
- Mistake book and printable reports
- Multi-provider LLM with JSON validation, minimal-prompt fallback, and vision OCR
- **Mock fallback** when cloud providers are unavailable

---

## Technical Highlights

- Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Provider chain: Agnes, Gemini, Groq, OpenRouter, OpenAI
- RAG-lite syllabus context with post-generation citation cleanup
- 3-part lesson generation with staged progress indicators
- Output sections filtered by user-selected deliverables (plan, worksheet, etc.)
- Structured JSON outputs with Zod validation
- PDF / DOCX / PPTX export pipelines

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/product_overview.md](docs/product_overview.md) | Product summary |
| [docs/architecture.md](docs/architecture.md) | System design |
| [docs/demo_script.md](docs/demo_script.md) | Walkthrough script |
| [docs/safety_design.md](docs/safety_design.md) | AI marking disclaimers |
| [docs/commercial_roadmap.md](docs/commercial_roadmap.md) | Pricing model |

---

## Sample Code

Non-sensitive excerpts in [sample/](sample/) — UI and type definitions only. Prompts and provider chain logic remain private.

---

## Note

Full source: private repo `mentorkokkwa/leo-suite-edutech`. Live demo hosted on **cenzhi** Vercel team.

---

## Author

**Liu Cenzhi** · [github.com/mentorkokkwa](https://github.com/mentorkokkwa)

MIT License · See [LICENSE](LICENSE)
