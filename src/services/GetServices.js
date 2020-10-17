

GetService(url,callback) 
{
    Axios.get(
      url
    )
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error);
      });
  }