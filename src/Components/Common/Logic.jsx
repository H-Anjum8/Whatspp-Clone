export const getTime = () => {
  console.log('date', new Date())
    return new Date()
      .toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .toLocaleLowerCase();
     
  };
  