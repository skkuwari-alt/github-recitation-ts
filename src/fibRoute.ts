// Endpoint for querying the fibonacci numbers

import { Router, Request, Response } from "express";
import { fibonacci } from "./fib";

const router = Router();

router.get("/fib/:num", (req: Request, res: Response) => {
  const num: number = parseInt(req.params.num, 10);

  let result: string;
  const fibN: number = fibonacci(num);

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
});

export default router;
