
// construction du fetch

import { useState } from "react";

const useFetch = (url, options) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Request has failed");

      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setError("An error has occurred : " + error.message);
    }
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;