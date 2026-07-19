import { describe, expect, it } from "vitest";
import { getEnrollmentLink } from "@/lib/courseOffer";

const standardLink = "https://topmate.io/cyberdravida/2210273";
const promotionLink = `${standardLink}?coupon_code=EB10`;

describe("getEnrollmentLink", () => {
  it("uses the coupon link while the promotion is active", () => {
    expect(getEnrollmentLink(standardLink, promotionLink, true)).toBe(promotionLink);
  });

  it("uses the standard link after the promotion expires", () => {
    expect(getEnrollmentLink(standardLink, promotionLink, false)).toBe(standardLink);
  });

  it("falls back to the standard link when no coupon link exists", () => {
    expect(getEnrollmentLink(standardLink, undefined, true)).toBe(standardLink);
  });
});
