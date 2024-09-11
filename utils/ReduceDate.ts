export default function modifyDate(date: string) {
  const dateObject = new Date(date);
  
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };
  
  const formattedDate = dateObject.toLocaleDateString('es-ES', options);
  
  return formattedDate;
}