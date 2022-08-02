export type Game = {
  ip: string;
  address: Address;
  start: Date;
  end: Date;
  steps: Step[];
  winner: Gamer;
};

export type Step = {
  gamer: Gamer;
  position: Position;
};

export type Address = {
  country: string;
  region: string;
  timezone: string;
  city: string;
};

export type Gamer = "USER" | "CPU" | "DRAW";

export type Position = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type InsertDto = {
  steps: Step[];
  start: Date;
  winner: Gamer;
};

export type Move = {
  row: number;
  col: number;
};

export type Board = BoardCell[][];

export type BoardCell = "x" | "o" | "_";
