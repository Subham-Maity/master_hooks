import React, { useEffect, useState } from "react";

type Data<T> = {
  status: "loading" | "success" | "error";
  data?: T;
  error?: Error;
};

export function useFetch<T>(url: string): Data<T> {
  const [data, setData] = useState<Data<T>>({ status: "loading" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();

        setData({ status: "success", data: result });
      } catch (error) {
        setData({ status: "error", error: error as Error });
      }
    };
    fetchData();
  }, [url]); // Only run the effect when the url changes

  return data;
}
