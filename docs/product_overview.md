# EduLens AI — Product Overview

## Problem

Teachers spend significant time marking homework and preparing differentiated materials. Students need timely, structured feedback — not just a final score.

## Solution

EduLens AI is a structured teaching assistant that:

1. Analyzes homework with marking-style feedback
2. Classifies mistake types and suggests similar questions
3. Generates lesson plans, worksheets, and visual lessons
4. Tracks mistakes in a personal mistake book
5. Exports printable PDF / DOCX / PPTX reports

## Key Features

| Feature | Description |
|---------|-------------|
| Homework Analyzer | Text + image OCR, structured JSON feedback |
| Lesson Generator | Syllabus-aware plans with RAG context |
| Mistake Book | Persistent local history of error patterns |
| Dashboard | Usage stats and progress overview |
| Demo mode | Seeded analysis when no API key configured |

## Output Structure

Homework analysis returns validated JSON:

- Overall score and summary
- Per-question feedback
- Mistake type tags
- Similar practice questions
- Teacher review reminder

## Safety Note

AI marking may require teacher review. Generated materials should be verified before classroom use.

## Target Users

- Students seeking structured homework feedback
- Teachers prototyping AI-assisted lesson prep
- Schools evaluating EdTech AI workflows
