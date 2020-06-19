import { compute } from "./compute";
describe("compute", () => {
  it("should return 0 id input is negative", () => {
    const result = compute(1);
    expect(result).toBe(0);
  });
  it("should incremt the input if it positve", () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
