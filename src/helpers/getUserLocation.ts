export const getUserLocation = async (): Promise<{
  lon: number;
  lat: number;
}> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({ lon: coords.longitude, lat: coords.latitude });
      },

      () => {
        reject({ lon: -71.2063181, lat: 46.8120929 });
      }
    );
  });
};
