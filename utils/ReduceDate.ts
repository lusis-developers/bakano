export default function modifyDate(date: string){
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}