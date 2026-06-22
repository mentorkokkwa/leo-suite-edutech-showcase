# EduLens AI — Safety & Quality Design

## AI marking disclaimer

EduLens provides **draft** marking-style feedback. Teachers should review before using scores for grading decisions.

Displayed in app: AI analysis may contain errors; verify with teacher review.

## Content safety

| Area | Approach |
|------|----------|
| Generated lessons | Teacher review before classroom use |
| Homework feedback | Structured JSON with confidence cues |
| OCR input | Image processed transiently; not stored on server |
| Syllabus RAG | Local indexed content only in MVP |

## Demo mode

When `EDULENS_AI_MODE=mock`:

- Returns high-quality seeded analysis examples
- No external API calls
- Suitable for school portfolio review without API costs

## Data handling

- Homework text/images sent to LLM provider when real AI mode enabled
- Results stored locally in browser mistake book
- No student account system in MVP

## Quality controls

- Zod schema validation on all LLM JSON outputs
- Retry / fallback on parse failure
- Provider chain for resilience

## Not in scope (MVP)

- Automated plagiarism detection
- Real-time classroom proctoring
- Official exam board endorsement
