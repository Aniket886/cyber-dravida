export const getEnrollmentLink = (
  standardLink: string,
  promotionLink: string | undefined,
  promotionActive: boolean,
) => (promotionActive && promotionLink ? promotionLink : standardLink);
