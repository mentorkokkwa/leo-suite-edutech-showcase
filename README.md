# AI for Smarter Schools and Student Support — EduLens AI

Public portfolio showcase for **EduLens AI** (Leo Suite).

> Full application source is in a **private** repo deployed to Vercel. This repo contains documentation, demo links, and selected non-sensitive samples for DSA-JC portfolio review.

---

## Live Demo

| Entry | URL |
|-------|-----|
| **EduLens home** | https://edutech-olive-pi.vercel.app/edulens |
| **Homework analyzer** | https://edutech-olive-pi.vercel.app/edulens/homework-analyzer |
| **Lesson generator** | https://edutech-olive-pi.vercel.app/edulens/lesson-generator |
| **AI status (mock mode)** | https://edutech-olive-pi.vercel.app/api/edulens/ai-status |
| **Vercel dashboard** | https://vercel.com/amylings-projects/edutech |

Related Leo Suite demos:

| App | URL |
|-----|-----|
| YouthMentor AI | https://growth-chi-two.vercel.app/youthmentor · [showcase repo](https://github.com/mentorkokkwa/leo-suite-growth-showcase) |
| CampusBot AI | https://leo-suite-robot.vercel.app/campusbot |

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
- Lesson generator (plans, worksheets, visual lessons)
- Mistake book and printable reports
- Multi-provider LLM with JSON validation and vision OCR
- **Mock mode** for demo without API keys

---

## Technical Highlights

- Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Provider chain: Agnes, Gemini, Groq, OpenRouter, OpenAI
- RAG-lite syllabus context
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

Some backend implementation details are kept in the private repo (`mentorkokkwa/leo-suite-edutech`) for API security and product protection.

---

## Author

**Liu Cenzhi** · [github.com/mentorkokkwa](https://github.com/mentorkokkwa)

MIT License · See [LICENSE](LICENSE)
