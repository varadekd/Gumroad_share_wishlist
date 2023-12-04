import { useState, useEffect } from "react";
const baseURL = "http://localhost:3000";

export function getDataFromApiAndCache(endpoint) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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

          localStorage.setItem(endpoint, JSON.stringify(apiData));
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

export const makeAPICall = async (method, endpoint, action) => {
  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: method,
    });

    if (!response.ok) {
      throw new Error(`Failed to perform ${action} `);
    }

    const apiData = await response.json();
    return {
      success: true,
      data: apiData,
    };
  } catch (error) {
    console.error(`Error when performing ${action} :`, error);
    throw error;
  }
};
