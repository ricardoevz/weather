export const convertDTtoDay = (dt: number) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleDateString('es-ES', {
    weekday: 'long',
  });
  return dayOfWeek;
};
