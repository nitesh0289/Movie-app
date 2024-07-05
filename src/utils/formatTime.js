export const formatMinute = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);

  return `${hours}:${minutes}:00`;
};
