export const isValidCoordinates = (
  lat: string | number,
  lng: string | number
): boolean => {
  const ck_lat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;
  const ck_lng = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;
  const validLat = ck_lat.test(String(lat));
  const validLon = ck_lng.test(String(lng));
  return validLat && validLon;
};
