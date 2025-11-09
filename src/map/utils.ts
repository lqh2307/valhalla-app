export const convertDDToDMS = (decimalDegrees: number): string => {
  const absDegrees =
    (decimalDegrees < 0 ? -decimalDegrees : decimalDegrees) + 1e-4;

  return `${0 | decimalDegrees}° ${Math.floor((absDegrees % 1) * 60)}' ${Math.floor(((absDegrees * 60) % 1) * 60)}"`;
};
