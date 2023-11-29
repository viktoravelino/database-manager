export const TabType = {
  query: "query",
  data: "data",
  structure: "structure",
} as const;

export type TabType = keyof typeof TabType;
