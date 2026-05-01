import playRound from "./game.logic.js";

//const playRound = require("./game.logic.js");

// test game logic with jest
describe("tie game logic", () => {
  test("tie game logic (r,r)", () => {
    expect(playRound("r", "r")).toBe("T");
  });
  test("tie game logic (s,s)", () => {
    expect(playRound("s", "s")).toBe("T");
  });
  test("tie game logic (p,p)", () => {
    expect(playRound("p", "p")).toBe("T");
  });
});

describe("player loses game logic", () => {
  test("player L (r,p)", () => {
    expect(playRound("r", "p")).toBe("L");
  });
  test("player L (s,r)", () => {
    expect(playRound("s", "r")).toBe("L");
  });
  test("player L (p,s)", () => {
    expect(playRound("p", "s")).toBe("L");
  });
});

describe("player wins game logic", () => {
  test("player W (p,r)", () => {
    expect(playRound("r", "s")).toBe("W");
  });
  test("player W (r,s)", () => {
    expect(playRound("s", "p")).toBe("W");
  });
  test("player W (s,p)", () => {
    expect(playRound("p", "r")).toBe("W");
  });
});
