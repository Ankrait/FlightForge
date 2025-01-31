export const calculatePricePerNight = (price: number | undefined, checkIn: string, checkOut: string) => {
  if (!price) return 0;
  if (checkIn === checkOut) return price;

  const dayInDate = new Date(checkIn);
  const dayOutDate = new Date(checkOut);
  const diffDays = (dayOutDate.getTime() - dayInDate.getTime()) / (1000 * 60 * 60 * 24);
  
  return diffDays > 0 ? Math.round(price / diffDays) : 0;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0'); 

  const formattedDateYYYYMMdd = `${year}-${month}-${day}`;

  const formattedDate = date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
  });

  return { formattedDate, formattedTime, formattedDateYYYYMMdd };
};
