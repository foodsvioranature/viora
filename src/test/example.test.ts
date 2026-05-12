declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (value: unknown) => { toBe: (expected: unknown) => void };

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
