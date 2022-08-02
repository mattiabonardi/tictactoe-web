import type { NextApiRequest, NextApiResponse } from "next";
import { Board, Move } from "../../declarations/game";
import { findBestMove } from "../../ia/tictactoe";

/**
 * 1.1 | 1.2 | 1.3
 * ----+-----+----
 * 2.1 | 2.2 | 2.3
 * ----+-----+----
 * 3.1 | 3.2 | 3.3
 */

/**
 * Endpoint: /calculate
 * Method: POST
 * Body (json)
 *  - board: Board
 * @param req
 * @param res
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    move: Move;
  }>
) {
  const board: Board = req.body.board;
  const move: Move = findBestMove(board);
  res.status(200).json({
    move: move,
  });
}
