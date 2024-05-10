
export interface TranscriptionType {
  content: string;
  role: "agent" | "user";
  start: number;
  end: number;
}
