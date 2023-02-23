export default function setDate(date: string) {
  const minute = date.split('/')[2].split(' ')[1].split(':')[1];
  const hour = date.split('/')[2].split(' ')[1].split(':')[0];
  const day = date.split('/')[0];
  const month = date.split('/')[1];
  const year = date.split('/')[2].split(' ')[0];
  return new Date(+year, +month - 1, +day, +hour, +minute);
}
