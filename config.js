export const GAME_CONFIG = {
  images: {
    tiles: [
      "assets/tiles/1.png",
      "assets/tiles/2.png",
      "assets/tiles/3.png",
      "assets/tiles/4.png",
      "assets/tiles/5.png",
    ],
    win: "assets/win.png",
  },

  levels: [
    { id: 1, rows: 7, cols: 7, moves: 18, targetScore: 900 },
    { id: 2, rows: 8, cols: 8, moves: 16, targetScore: 1500 },
    { id: 3, rows: 9, cols: 9, moves: 15, targetScore: 2200 },
    { id: 4, rows: 9, cols: 9, moves: 13, targetScore: 2900 },
    { id: 5, rows:10, cols:10, moves: 12, targetScore: 3700 },
  ],

  scoring: {
    perTile: 20,
    bonusPerExtraTile: 20,
  },

  animation: {
    fallDelayMs: 60,
  }
};
