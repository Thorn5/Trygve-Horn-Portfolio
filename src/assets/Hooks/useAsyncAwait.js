// useAsyncAwait.js
import { useState, useEffect } from "react";

const useAsyncAwait = (url) => {
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid URL");
  }
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);
  const moduleCalled = "fetched using useAsyncAwait";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setError(error.message);
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, error, apiData, moduleCalled };
};

export default useAsyncAwait;