/**
 * Sample homework analysis result shape (non-sensitive excerpt).
 * Full Zod schemas and prompts are in the private deployment repo.
 */

export type MistakeType =
  | "conceptual"
  | "calculation"
  | "careless"
  | "incomplete"
  | "method";

export type QuestionFeedback = {
  questionNumber: number;
  score: number;
  maxScore: number;
  feedback: string;
  mistakeTypes: MistakeType[];
  improvementTip: string;
};

export type HomeworkAnalysisResult = {
  overallScore: number;
  maxScore: number;
  summary: string;
  questions: QuestionFeedback[];
  similarQuestions: string[];
  teacherReviewNote: string;
};
