const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const formattedDate = date.toLocaleDateString('ru-RU', {
        month: 'long',
        day: 'numeric',
    });
  
    return formattedDate;
};

export default formatDate;