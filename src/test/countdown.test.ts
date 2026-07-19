import { describe, expect, it } from "vitest";
import { getCountdown } from "@/lib/countdown";

const DEADLINE = "2026-07-31T23:59:59+05:30";
const deadlineMs = Date.parse(DEADLINE);

describe("getCountdown", () => {
  it("calculates an active countdown", () => {
    const offset = ((2 * 24 + 3) * 60 * 60 + 4 * 60 + 5) * 1000;

    expect(getCountdown(DEADLINE, deadlineMs - offset)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
      isExpired: false,
    });
  });

  it("handles the final minute without rounding up", () => {
    expect(getCountdown(DEADLINE, deadlineMs - 59_000)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 59,
      isExpired: false,
    });
  });

  it("clamps an expired countdown at zero", () => {
    expect(getCountdown(DEADLINE, deadlineMs + 1_000)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    });
  });
});
