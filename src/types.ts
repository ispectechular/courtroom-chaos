export enum Verdict {
  BLAME_SHIFTING = 'BLAME_SHIFTING',
  TAKING_RESPONSIBILITY = 'TAKING_RESPONSIBILITY',
}

export enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  correctVerdict: Verdict;
  explanation: string;
  difficulty: Difficulty;
}

export interface GameState {
  currentScenarioIndex: number;
  score: number;
  streak: number;
  history: { scenarioId: string; isCorrect: boolean }[];
  isGameOver: boolean;
  isSettingsOpen: boolean;
  settings: {
    autoReadScenario: boolean;
    autoReadExplanation: boolean;
    showDifficulty: boolean;
  };
}
