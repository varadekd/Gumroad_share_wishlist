import { useState, useEffect } from "react";

export function getDataFromApiAndCache(endpoint, isCache = false) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const baseURL = "http://localhost:3000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(endpoint);

        if (cachedData) {
          setData(JSON.parse(cachedData));
          setSuccess(true);
        } else {
          const response = await fetch(`${baseURL}${endpoint}`);

          if (!response.ok) {
            setError("Api returned with status other than 200");
            setSuccess(false);
            return;
          }

          const apiData = await response.json();
          setData(apiData);
          setSuccess(true);

          if (isCache) {
             localStorage.setItem(endpoint, JSON.stringify(apiData));
          }
        }
      } catch (error) {
        setError(error);
        setSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { success, isLoading, data, error };
}
