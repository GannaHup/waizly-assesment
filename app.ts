import { miniMaxSum } from "./questions/test-1";
import { plusMinus } from "./questions/test-2";
import { timeConvertion } from "./questions/test-3";

(function app() {
  const test1 = miniMaxSum([1, 2, 3, 4, 5]);
  const test2 = plusMinus([1, 4, 0, -3, 5, 0]);
  const test3 = timeConvertion("12:00:01AM");

  console.log("\n +++++ RESULT +++++\n");
  console.log("TEST 1: ", test1);
  console.log("TEST 2: ", test2);
  console.log("TEST 3: ", test3);
})();
