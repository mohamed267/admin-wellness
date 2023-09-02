export const extractLatLongFromGoogleMapsUrl = (url: string) => {
  // Regular expression pattern to match latitude and longitude in the URL
  const pattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;

  const match = url.match(pattern);
  if (match) {
    const latitude = Number(match[1]);
    const longtitude = Number(match[2]);
    return { latitude, longtitude };
  } else {
    return {};
  }
};
